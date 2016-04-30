from PIL import Image
from resizeimage import resizeimage
from bs4 import BeautifulSoup
from selenium import webdriver
from collections import Counter
import numpy as np
import urllib2
import sys
import codecs

URL = "http://www.behr.com/consumer/colors/paint#"
PAGE_RANGE = xrange(1, 74)
image_file = sys.argv[1]
SIZE_RATIO = int(sys.argv[2])

def get_image_size():
	with open(image_file, 'r+b') as f:
		with Image.open(f) as image:
			return image.size

def resize_image():
	with open(image_file, 'r+b') as f:
		with Image.open(f) as image:
			height = image.size[0]
			width = image.size[1]
			cover = resizeimage.resize_cover(image, [height/SIZE_RATIO, width/SIZE_RATIO])
			cover.save(image_file.replace(".jpg", ".out.jpeg"), image.format)
			return cover


def get_pages():
	return [open("pages/page"+str(page_id)+".htm").read() for page_id in PAGE_RANGE]

def get_soups(pages):
	return [BeautifulSoup(page, 'html.parser') for page in pages]

def get_swatches(soups):
	return [soup.find_all("div", {"class": "swatch ui-draggable"}) for soup in soups]

def get_unique_swatches(swatches_lists):
	swatch_list = []
	for swatches in swatches_lists:
		for swatch in swatches:
			swatch_list.append(swatch)
	return set(swatch_list)

def get_color_from_stye(style):
	if "rgb" in style:
		color = style.split("(")[-1][0:-2].split(", ")
		return int(color[0]), int(color[1]), int(color[2])
	else:
		color = style.split(":")[-1]
		color1 = color[1:2]
		color2 = color[3:4]
		color3 = color[5:6]
		return int(color1, 16), int(color2, 16), int(color2, 16)

def get_swatch_name_color_tuple(swatches):
	return [
		(
			get_color_from_stye(swatch['style']), 
			swatch.find_all("div")[1].contents[0]
		) for swatch in swatches
	]

def rgb_distance(swatch_tuple, rgb):
	x_diff_squard = (swatch_tuple[0][0] - rgb[0])**2
	y_diff_squard = (swatch_tuple[0][1] - rgb[1])**2
	z_diff_squard = (swatch_tuple[0][2] - rgb[2])**2
	return x_diff_squard + y_diff_squard + z_diff_squard

def get_min_swatch(swatch_tuples, rgb):
	def rgb_diff(swatch_tuple):
		return -rgb_distance(swatch_tuple, rgb)
	return max(swatch_tuples, key=rgb_diff)

def break_image_down_into_grid_of_swatches(image, swatch_tuples):
	image_arr = np.asarray(image)
	height = image.size[0]
	width = image.size[1]
	image_arr_swatches = [[0 for i in range(height)] for j in range(width)]
	list_of_swatches = {}
	for i, row in enumerate(image_arr):
		list_of_swatches[i] = {}
		for j,col in enumerate(row):
			min_swatch = get_min_swatch(swatch_tuples, col)
			image_arr_swatches[i][j] = min_swatch
	return image_arr_swatches

def get_swatch_based_image(list_of_swatches):
	img = Image.new( 'RGB', (len(list_of_swatches),len(list_of_swatches[0])), "black")

	for i in range(img.size[0]):
		for j in range(img.size[1]):
			img.putpixel((i,j), list_of_swatches[i][j][0])

	return img

def write_cvs_of_swatches(list_of_swatches):
	csv_file = image_file.replace(".jpg", ".cvs")
	f = open(csv_file, 'w')
	for i in range(len(list_of_swatches)):
		color_names = [swatch[1] for swatch in list_of_swatches[i]]
		color_names_with_commas = ",".join(color_names).encode('utf-8')
		f.write(color_names_with_commas)
		f.write('\n')

def write_counts_of_swatches(list_of_swatches):
	swatch_counts = Counter([swatch for swatch_list in list_of_swatches for swatch in swatch_list])
	csv_file = image_file.replace(".jpg", ".txt")
	f = open(csv_file, 'w')
	for swatch_count in swatch_counts.most_common():
		f.write(str(swatch_count))
		f.write('\n')
	f.close()


pages = get_pages()
soups = get_soups(pages)
swatches_lists = get_swatches(soups)
swatches = get_unique_swatches(swatches_lists)
swatch_tuples = get_swatch_name_color_tuple(swatches)
image = resize_image()
list_of_swatches = break_image_down_into_grid_of_swatches(image, swatch_tuples)
swatch_image = get_swatch_based_image(list_of_swatches)

size = get_image_size()
swatch_image_enlarged = swatch_image.resize(size)
swatch_image_enlarged.save(image_file.replace(".jpg", ".swatch.jpeg"))

write_cvs_of_swatches(list_of_swatches)
write_counts_of_swatches(list_of_swatches)


from PIL import Image

from resizeimage import resizeimage


resize_ratio = 50
with open('mason_art.jpg', 'r+b') as f:
    with Image.open(f) as image:
        cover = resizeimage.resize_cover(image, [2048/resize_ratio, 1365/resize_ratio])
        cover.save('test-image-cover.jpeg', image.format)
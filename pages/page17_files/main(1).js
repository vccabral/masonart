(function($b$$) {
  function $d$$($g$$, $h$$) {
    if(!(1 < $g$$.originalEvent.touches.length)) {
      $g$$.preventDefault();
      var $i$$ = $g$$.originalEvent.changedTouches[0], $f$$ = document.createEvent("MouseEvents");
      $f$$.initMouseEvent($h$$, !0, !0, window, 1, $i$$.screenX, $i$$.screenY, $i$$.clientX, $i$$.clientY, !1, !1, !1, !1, 0, null);
      $g$$.target.dispatchEvent($f$$)
    }
  }
  $b$$.support.touch = "ontouchend" in document;
  if($b$$.support.touch) {
    var $c$$ = $b$$.ui.mouse.prototype, $e$$ = $c$$._mouseInit, $a$$;
    $c$$._touchStart = function $$c$$$_touchStart$($g$$) {
      !$a$$ && this._mouseCapture($g$$.originalEvent.changedTouches[0]) && ($a$$ = !0, this._touchMoved = !1, $d$$($g$$, "mouseover"), $d$$($g$$, "mousemove"), $d$$($g$$, "mousedown"))
    };
    $c$$._touchMove = function $$c$$$_touchMove$($f$$) {
      $a$$ && (this._touchMoved = !0, $d$$($f$$, "mousemove"))
    };
    $c$$._touchEnd = function $$c$$$_touchEnd$($f$$) {
      $a$$ && ($d$$($f$$, "mouseup"), $d$$($f$$, "mouseout"), this._touchMoved || $d$$($f$$, "click"), $a$$ = !1)
    };
    $c$$._mouseInit = function $$c$$$_mouseInit$() {
      this.element.bind("touchstart", $b$$.proxy(this, "_touchStart")).bind("touchmove", $b$$.proxy(this, "_touchMove")).bind("touchend", $b$$.proxy(this, "_touchEnd"));
      $e$$.call(this)
    }
  }
})(jQuery);
var colorLookup = [], nullColor;
$(document).ready(function() {
  loadColorData();
  nullColor = colorLookup["750C-3"]
});
function ColorDef() {
}
ColorDef.load = function $ColorDef$load$($fields$$, $data$$) {
  for(var $cd$$ = new ColorDef, $c$$ = 0;$c$$ < $fields$$.length;$c$$++) {
    var $field$$ = $fields$$[$c$$], $d$$ = $data$$[$c$$];
    "true" === $d$$ ? $d$$ = !0 : "false" === $d$$ && ($d$$ = !1);
    $cd$$[$field$$] = $d$$
  }
  return $cd$$
};
function loadColorData() {
  for(var $cols$$ = colorData.splice(0, 1), $i$$ = 0;$i$$ < colorData.length;$i$$++) {
    var $def$$ = ColorDef.load($cols$$[0], colorData[$i$$]);
    colorLookup[$def$$.id] = $def$$
  }
}
function Illuminants() {
}
Illuminants.A = [109.85, 100, 35.585];
Illuminants.B = [99.072, 100, 85.223];
Illuminants.C = [98.074, 100, 118.232];
Illuminants.D50 = [96.422, 100, 82.521];
Illuminants.D55 = [95.682, 100, 92.149];
Illuminants.D65 = [95.047, 100, 108.883];
Illuminants.D75 = [94.972, 100, 122.638];
Illuminants.E = [100, 100, 100];
Illuminants.F2 = [99.186, 100, 67.393];
Illuminants.F7 = [95.041, 100, 108.747];
Illuminants.F11 = [100.962, 100, 64.35];
Illuminants.None = [100, 100, 100];
function ColorMatrixes() {
}
ColorMatrixes.Adobe_RGB_D65 = [[0.5767309, 0.185554, 0.1881852], [0.2973769, 0.6273491, 0.0752741], [0.0270343, 0.0706872, 0.9911085]];
ColorMatrixes.iAdobe_RGB_D65 = [[2.041369, -0.5649464, -0.3446944], [-0.969266, 1.8760108, 0.041556], [0.0134474, -0.1183897, 1.0154096]];
ColorMatrixes.AppleRGB_D65 = [[0.4497288, 0.3162486, 0.1844926], [0.2446525, 0.6720283, 0.0833192], [0.0251848, 0.1411824, 0.9224628]];
ColorMatrixes.iAppleRGB_D65 = [[2.9515373, -1.2894116, -0.4738445], [-1.0851093, 1.9908566, 0.0372026], [0.0854934, -0.2694964, 1.0912975]];
ColorMatrixes.Best_RGB_D50 = [[0.6326696, 0.2045558, 0.1269946], [0.2284569, 0.7373523, 0.0341908], [0, 0.0095142, 0.8156958]];
ColorMatrixes.iBest_RGB_D50 = [[1.7552599, -0.4836786, -0.253], [-0.5441336, 1.5068789, 0.0215528], [0.0063467, -0.0175761, 1.2256959]];
ColorMatrixes.Beta_RGB_D50 = [[0.6712537, 0.1745834, 0.1183829], [0.3032726, 0.6637861, 0.0329413], [0, 0.040701, 0.784509]];
ColorMatrixes.iBeta_RGB_D50 = [[1.683227, -0.4282363, -0.2360185], [-0.7710229, 1.7065571, 0.04469], [0.0400013, -0.0885376, 1.272364]];
ColorMatrixes.Bruce_RGB_D65 = [[0.4674162, 0.2944512, 0.1886026], [0.2410115, 0.6835475, 0.075441], [0.0219101, 0.0736128, 0.9933071]];
ColorMatrixes.iBruce_RGB_D65 = [[2.7454669, -1.1358136, -0.4350269], [-0.969266, 1.8760108, 0.041556], [0.0112723, -0.1139754, 1.0132541]];
ColorMatrixes.CIE_RGB_E = [[0.488718, 0.3106803, 0.2006017], [0.1762044, 0.8129847, 0.0108109], [0, 0.0102048, 0.9897952]];
ColorMatrixes.iCIE_RGB_E = [[2.3706743, -0.9000405, -0.4706338], [-0.513885, 1.4253036, 0.0885814], [0.0052982, -0.0146949, 1.0093968]];
ColorMatrixes.ColorMatch_RGB_D50 = [[0.5093439, 0.3209071, 0.1339691], [0.274884, 0.6581315, 0.0669845], [0.0242545, 0.1087821, 0.6921735]];
ColorMatrixes.iColorMatch_RGB_D50 = [[2.6422874, -1.223427, -0.3930143], [-1.1119763, 2.0590183, 0.0159614], [0.0821699, -0.2807254, 1.4559877]];
ColorMatrixes.Don_RGB_4_D50 = [[0.6457711, 0.1933511, 0.1250978], [0.2783496, 0.6879702, 0.0336802], [0.0037113, 0.0179861, 0.8035125]];
ColorMatrixes.iDon_RGB_4_D50 = [[1.7603902, -0.4881198, -0.2536126], [-0.7126288, 1.6527432, 0.0416715], [0.0078207, -0.0347411, 1.2447743]];
ColorMatrixes.ECI_RGB_D50 = [[0.6502043, 0.1780774, 0.1359384], [0.3202499, 0.6020711, 0.0776791], [-0, 0.067839, 0.757371]];
ColorMatrixes.iECI_RGB_D50 = [[1.7827618, -0.4969847, -0.2690101], [-0.9593623, 1.9477962, -0.0275807], [0.0859317, -0.1744674, 1.3228273]];
ColorMatrixes.Ekta_Space_PS5_D50 = [[0.5938914, 0.2729801, 0.0973485], [0.2606286, 0.7349465, 0.0044249], [0, 0.0419969, 0.7832131]];
ColorMatrixes.iEkta_Space_PS5_D50 = [[2.0043819, -0.7304844, -0.2450052], [-0.7110285, 1.6202126, 0.0792227], [0.0381263, -0.086878, 1.2725438]];
ColorMatrixes.NTSC_RGB_C = [[0.6068909, 0.1735011, 0.200348], [0.2989164, 0.586599, 0.1144845], [-0, 0.0660957, 1.1162243]];
ColorMatrixes.iNTSC_RGB_C = [[1.9099961, -0.5324542, -0.2882091], [-0.9846663, 1.999171, -0.0283082], [0.0583056, -0.1183781, 0.8975535]];
ColorMatrixes.PAL_SECAM_RGB_D65 = [[0.430619, 0.3415419, 0.1783091], [0.2220379, 0.7066384, 0.0713236], [0.0201853, 0.1295504, 0.9390944]];
ColorMatrixes.iPAL_SECAM_RGB_D65 = [[3.0628971, -1.3931791, -0.4757517], [-0.969266, 1.8760108, 0.041556], [0.0678775, -0.2288548, 1.069349]];
ColorMatrixes.ProPhoto_RGB_D50 = [[0.7976749, 0.1351917, 0.0313534], [0.2880402, 0.7118741, 8.57E-5], [0, 0, 0.82521]];
ColorMatrixes.iProPhoto_RGB_D50 = [[1.3459433, -0.2556075, -0.0511118], [-0.5445989, 1.5081673, 0.0205351], [0, 0, 1.2118128]];
ColorMatrixes.SMPTE_C_RGB_D65 = [[0.3935891, 0.3652497, 0.1916313], [0.2124132, 0.7010437, 0.0865432], [0.0187423, 0.1119313, 0.9581563]];
ColorMatrixes.iSMPTE_C_RGB_D65 = [[3.505396, -1.7394894, -0.543964], [-1.0690722, 1.9778245, 0.0351722], [0.05632, -0.1970226, 1.0502026]];
ColorMatrixes.sRGB_D65 = [[0.4124564, 0.3575761, 0.1804375], [0.2126729, 0.7151522, 0.072175], [0.0193339, 0.119192, 0.9503041]];
ColorMatrixes.isRGB_D65 = [[3.2404542, -1.5371385, -0.4985314], [-0.969266, 1.8760108, 0.041556], [0.0556434, -0.2040259, 1.0572252]];
ColorMatrixes.Wide_Gamut_RGB_D50 = [[0.7161046, 0.1009296, 0.1471858], [0.2581874, 0.7249378, 0.0168748], [0, 0.0517813, 0.7734287]];
ColorMatrixes.iWide_Gamut_RGB_D50 = [[1.4628067, -0.1840623, -0.2743606], [-0.5217933, 1.4472381, 0.0677227], [0.0349342, -0.096893, 1.2884099]];
function ColorUtilities() {
}
ColorUtilities.D50 = [96.4212, 100, 82.5188];
ColorUtilities.D55 = [95.6797, 100, 92.1481];
ColorUtilities.D65 = [95.0429, 100, 108.89];
ColorUtilities.D75 = [94.9722, 100, 122.6394];
ColorUtilities.E = [100, 100, 100];
ColorUtilities.whitePoint = Illuminants.D65;
ColorUtilities.chromaD50 = [0.3457, 0.3585, 100];
ColorUtilities.chromaD55 = [0.3324, 0.3474, 100];
ColorUtilities.chromaD65 = [0.3127, 0.3291, 100];
ColorUtilities.chromaD75 = [0.299, 0.3149, 100];
ColorUtilities.chromaWhitePoint = ColorUtilities.chromaD65;
ColorUtilities.Mi = ColorMatrixes.isRGB_D65;
ColorUtilities.M = ColorMatrixes.sRGB_D65;
ColorUtilities.DELTA_SIMILAR = 15;
ColorUtilities.createCanvas = function $ColorUtilities$createCanvas$($image$$) {
  if(!$image$$) {
    return null
  }
  var $canvas$$ = document.createElement("canvas");
  $canvas$$.width = $image$$.width;
  $canvas$$.height = $image$$.height;
  $canvas$$.getContext("2d").drawImage($image$$, 0, 0);
  return $canvas$$
};
ColorUtilities.convertRGBToXYZ = function $ColorUtilities$convertRGBToXYZ$($R_r$$, $G_g$$, $B_b$$) {
  var $result$$ = [];
  $R_r$$ /= 255;
  $G_g$$ /= 255;
  $B_b$$ /= 255;
  $R_r$$ = 0.04045 >= $R_r$$ ? $R_r$$ / 12.92 : Math.pow(($R_r$$ + 0.055) / 1.055, 2.4);
  $G_g$$ = 0.04045 >= $G_g$$ ? $G_g$$ / 12.92 : Math.pow(($G_g$$ + 0.055) / 1.055, 2.4);
  $B_b$$ = 0.04045 >= $B_b$$ ? $B_b$$ / 12.92 : Math.pow(($B_b$$ + 0.055) / 1.055, 2.4);
  $R_r$$ *= 100;
  $G_g$$ *= 100;
  $B_b$$ *= 100;
  $result$$[0] = $R_r$$ * ColorUtilities.M[0][0] + $G_g$$ * ColorUtilities.M[0][1] + $B_b$$ * ColorUtilities.M[0][2];
  $result$$[1] = $R_r$$ * ColorUtilities.M[1][0] + $G_g$$ * ColorUtilities.M[1][1] + $B_b$$ * ColorUtilities.M[1][2];
  $result$$[2] = $R_r$$ * ColorUtilities.M[2][0] + $G_g$$ * ColorUtilities.M[2][1] + $B_b$$ * ColorUtilities.M[2][2];
  return $result$$
};
ColorUtilities.convertXYZToLAB = function $ColorUtilities$convertXYZToLAB$($X_x$$, $Y_y$$, $Z_z$$) {
  $X_x$$ /= ColorUtilities.whitePoint[0];
  $Y_y$$ /= ColorUtilities.whitePoint[1];
  $Z_z$$ /= ColorUtilities.whitePoint[2];
  $X_x$$ = 0.008856 < $X_x$$ ? Math.pow($X_x$$, 1 / 3) : 7.787 * $X_x$$ + 16 / 116;
  $Y_y$$ = 0.008856 < $Y_y$$ ? Math.pow($Y_y$$, 1 / 3) : 7.787 * $Y_y$$ + 16 / 116;
  $Z_z$$ = 0.008856 < $Z_z$$ ? Math.pow($Z_z$$, 1 / 3) : 7.787 * $Z_z$$ + 16 / 116;
  var $result$$ = [];
  $result$$[0] = 116 * $Y_y$$ - 16;
  $result$$[1] = 500 * ($X_x$$ - $Y_y$$);
  $result$$[2] = 200 * ($Y_y$$ - $Z_z$$);
  return $result$$
};
ColorUtilities.colorCompareDE1994 = function $ColorUtilities$colorCompareDE1994$($dl_l1$$, $a1_da$$, $b1_db$$, $l2$$, $a2$$, $b2_first$$) {
  var $c1_third$$ = Math.sqrt($a1_da$$ * $a1_da$$ + $b1_db$$ * $b1_db$$), $c2_dc_second$$ = Math.sqrt($a2$$ * $a2$$ + $b2_first$$ * $b2_first$$), $c2_dc_second$$ = $c1_third$$ - $c2_dc_second$$;
  $dl_l1$$ -= $l2$$;
  $a1_da$$ -= $a2$$;
  $b1_db$$ -= $b2_first$$;
  $b1_db$$ = Math.sqrt($a1_da$$ * $a1_da$$ + $b1_db$$ * $b1_db$$ - $c2_dc_second$$ * $c2_dc_second$$);
  $b2_first$$ = $dl_l1$$ / 1;
  $c2_dc_second$$ /= 1 + 0.045 * $c1_third$$;
  $c1_third$$ = $b1_db$$ / (1 + 0.015 * $c1_third$$);
  return Math.sqrt($b2_first$$ * $b2_first$$ + $c2_dc_second$$ * $c2_dc_second$$ + $c1_third$$ * $c1_third$$)
};
ColorUtilities.areColorsSimilar = function $ColorUtilities$areColorsSimilar$($b1$$1_c1$$, $b2$$1_c2$$, $b3_c3$$) {
  var $l1$$ = $b1$$1_c1$$.luminosity, $a1$$ = $b1$$1_c1$$.a;
  $b1$$1_c1$$ = $b1$$1_c1$$.b;
  var $l2$$ = $b2$$1_c2$$.luminosity, $a2$$ = $b2$$1_c2$$.a;
  $b2$$1_c2$$ = $b2$$1_c2$$.b;
  var $l3$$ = $b3_c3$$.luminosity, $a3$$ = $b3_c3$$.a;
  $b3_c3$$ = $b3_c3$$.b;
  return ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$1_c1$$, $l2$$, $a2$$, $b2$$1_c2$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$1_c1$$, $l3$$, $a3$$, $b3_c3$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l3$$, $a3$$, $b3_c3$$, $l2$$, $a2$$, $b2$$1_c2$$) < ColorUtilities.DELTA_SIMILAR ? !0 : !1
};
ColorUtilities.combineColors = function $ColorUtilities$combineColors$($b1$$2_c1$$, $b2$$2_c2$$, $b3$$1_c3$$) {
  var $l1$$ = $b1$$2_c1$$.luminosity, $a1$$ = $b1$$2_c1$$.a;
  $b1$$2_c1$$ = $b1$$2_c1$$.b;
  var $l2$$ = $b2$$2_c2$$.luminosity, $a2$$ = $b2$$2_c2$$.a;
  $b2$$2_c2$$ = $b2$$2_c2$$.b;
  var $l3$$ = $b3$$1_c3$$.luminosity, $a3$$ = $b3$$1_c3$$.a;
  $b3$$1_c3$$ = $b3$$1_c3$$.b;
  return ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$2_c1$$, $l2$$, $a2$$, $b2$$2_c2$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$2_c1$$, $l3$$, $a3$$, $b3$$1_c3$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l3$$, $a3$$, $b3$$1_c3$$, $l2$$, $a2$$, $b2$$2_c2$$) < ColorUtilities.DELTA_SIMILAR ? !0 : !1
};
ColorUtilities.findClosestBehrColor = function $ColorUtilities$findClosestBehrColor$($l$$, $a$$, $b$$) {
  var $lowestDif$$ = 1E4, $finalColor$$ = null, $compared$$ = 0, $c$$;
  for($c$$ in colorLookup) {
    if(colorLookup[$c$$].israck == rack) {
      var $color$$ = colorLookup[$c$$];
      $compared$$++;
      var $dif$$ = ColorUtilities.colorCompareDE1994($color$$.luminosity, $color$$.a, $color$$.b, $l$$, $a$$, $b$$);
      $dif$$ < $lowestDif$$ && ($finalColor$$ = $color$$, $lowestDif$$ = $dif$$)
    }
  }
  return $finalColor$$
};
ColorUtilities.toLCH = function $ColorUtilities$toLCH$($l$$, $a$$2_c$$, $b$$) {
  var $LCH$$ = [], $h$$ = Math.atan2($b$$, $a$$2_c$$), $h$$ = 0 < $h$$ ? 180 * ($h$$ / Math.PI) : 360 - 180 * (Math.abs($h$$) / Math.PI);
  $a$$2_c$$ = Math.sqrt(($a$$2_c$$ ^ 2) + ($b$$ ^ 2));
  $LCH$$.l = $l$$;
  $LCH$$.c = $a$$2_c$$;
  $LCH$$.h = $h$$;
  return $LCH$$
};
ColorUtilities.toLAB = function $ColorUtilities$toLAB$($l$$, $b$$4_c$$, $h$$) {
  var $LAB$$ = [], $a$$ = Math.cos($h$$ / (180 * Math.PI)) * $b$$4_c$$;
  $b$$4_c$$ *= Math.sin($h$$ / (180 * Math.PI));
  $LAB$$.l = $l$$;
  $LAB$$.a = $a$$;
  $LAB$$.b = $b$$4_c$$;
  return $LAB$$
};
ColorUtilities.extractRed = function $ColorUtilities$extractRed$($c$$) {
  return $c$$ >> 16 & 255
};
ColorUtilities.extractGreen = function $ColorUtilities$extractGreen$($c$$) {
  return $c$$ >> 8 & 255
};
ColorUtilities.extractBlue = function $ColorUtilities$extractBlue$($c$$) {
  return $c$$ & 255
};
ColorUtilities.convertRGBToLAB = function $ColorUtilities$convertRGBToLAB$($r$$, $g$$, $b$$) {
  $r$$ = ColorUtilities.convertRGBToXYZ($r$$, $g$$, $b$$);
  return ColorUtilities.convertXYZToLAB($r$$[0], $r$$[1], $r$$[2])
};
ColorUtilities.convertIntToLAB = function $ColorUtilities$convertIntToLAB$($b$$6_color$$) {
  var $r$$2_xyz$$ = ColorUtilities.extractRed($b$$6_color$$), $g$$ = ColorUtilities.extractGreen($b$$6_color$$);
  $b$$6_color$$ = ColorUtilities.extractBlue($b$$6_color$$);
  $r$$2_xyz$$ = ColorUtilities.convertRGBToXYZ($r$$2_xyz$$, $g$$, $b$$6_color$$);
  return ColorUtilities.convertXYZToLAB($r$$2_xyz$$[0], $r$$2_xyz$$[1], $r$$2_xyz$$[2])
};
ColorUtilities.convertLABToXYZ = function $ColorUtilities$convertLABToXYZ$($L_y$$, $a$$4_x$$, $b$$7_z$$) {
  var $result$$ = [];
  $L_y$$ = ($L_y$$ + 16) / 116;
  var $y3$$ = Math.pow($L_y$$, 3);
  $a$$4_x$$ = $a$$4_x$$ / 500 + $L_y$$;
  var $x3$$ = Math.pow($a$$4_x$$, 3);
  $b$$7_z$$ = $L_y$$ - $b$$7_z$$ / 200;
  var $z3$$ = Math.pow($b$$7_z$$, 3);
  $result$$[0] = (0.008856 < $x3$$ ? $x3$$ : ($a$$4_x$$ - 16 / 116) / 7.787) * ColorUtilities.whitePoint[0];
  $result$$[1] = (0.008856 < $y3$$ ? $y3$$ : ($L_y$$ - 16 / 116) / 7.787) * ColorUtilities.whitePoint[1];
  $result$$[2] = (0.008856 < $z3$$ ? $z3$$ : ($b$$7_z$$ - 16 / 116) / 7.787) * ColorUtilities.whitePoint[2];
  return $result$$
};
ColorUtilities.convertXYZToRGB = function $ColorUtilities$convertXYZToRGB$($X$$1_b$$8_x$$, $Y$$1_y$$, $Z$$1_r$$) {
  var $result$$ = [];
  $X$$1_b$$8_x$$ /= 100;
  $Y$$1_y$$ /= 100;
  var $z$$ = $Z$$1_r$$ / 100;
  $Z$$1_r$$ = $X$$1_b$$8_x$$ * ColorUtilities.Mi[0][0] + $Y$$1_y$$ * ColorUtilities.Mi[0][1] + $z$$ * ColorUtilities.Mi[0][2];
  var $g$$ = $X$$1_b$$8_x$$ * ColorUtilities.Mi[1][0] + $Y$$1_y$$ * ColorUtilities.Mi[1][1] + $z$$ * ColorUtilities.Mi[1][2];
  $X$$1_b$$8_x$$ = $X$$1_b$$8_x$$ * ColorUtilities.Mi[2][0] + $Y$$1_y$$ * ColorUtilities.Mi[2][1] + $z$$ * ColorUtilities.Mi[2][2];
  $Z$$1_r$$ = 0.0031308 < $Z$$1_r$$ ? 1.055 * Math.pow($Z$$1_r$$, 1 / 2.4) - 0.055 : 12.92 * $Z$$1_r$$;
  $g$$ = 0.0031308 < $g$$ ? 1.055 * Math.pow($g$$, 1 / 2.4) - 0.055 : 12.92 * $g$$;
  $X$$1_b$$8_x$$ = 0.0031308 < $X$$1_b$$8_x$$ ? 1.055 * Math.pow($X$$1_b$$8_x$$, 1 / 2.4) - 0.055 : 12.92 * $X$$1_b$$8_x$$;
  $result$$[0] = Math.floor(255 * (0 > $Z$$1_r$$ ? 0 : 1 < $Z$$1_r$$ ? 1 : $Z$$1_r$$));
  $result$$[1] = Math.floor(255 * (0 > $g$$ ? 0 : 1 < $g$$ ? 1 : $g$$));
  $result$$[2] = Math.floor(255 * (0 > $X$$1_b$$8_x$$ ? 0 : 1 < $X$$1_b$$8_x$$ ? 1 : $X$$1_b$$8_x$$));
  return $result$$
};
ColorUtilities.combineRGB = function $ColorUtilities$combineRGB$($r$$, $g$$, $b$$) {
  return $r$$ << 16 | $g$$ << 8 | $b$$
};
ColorUtilities.convertLABToRGB = function $ColorUtilities$convertLABToRGB$($l$$3_xyz$$, $a$$, $b$$) {
  $l$$3_xyz$$ = ColorUtilities.convertLABToXYZ($l$$3_xyz$$, $a$$, $b$$);
  return ColorUtilities.convertXYZToRGB($l$$3_xyz$$[0], $l$$3_xyz$$[1], $l$$3_xyz$$[2])
};
ColorUtilities.getRandomColor = function $ColorUtilities$getRandomColor$() {
  var $c$$ = ColorUtilities;
  if(void 0 == $c$$.colorLookupIndex) {
    $c$$.colorLookupIndex = [];
    var $index$$44_r$$ = 0, $i$$;
    for($i$$ in colorLookup) {
      $c$$.colorLookupIndex[$index$$44_r$$++] = $i$$
    }
  }
  $index$$44_r$$ = Math.floor(Math.random() * $c$$.colorLookupIndex.length);
  return colorLookup[$c$$.colorLookupIndex[$index$$44_r$$]]
};
ColorUtilities._getRandomColorsFor = function $ColorUtilities$_getRandomColorsFor$($color$$, $count$$) {
  $color$$ instanceof ColorDef || ($color$$ = colorLookup[$color$$]);
  if($color$$) {
    var $c$$ = ColorUtilities;
    if(void 0 == $c$$.colorLookupIndex) {
      $c$$.colorLookupIndex = [];
      var $dec_index$$ = 0, $i$$;
      for($i$$ in colorLookup) {
        $c$$.colorLookupIndex[$dec_index$$++] = $i$$
      }
    }
    var $c$$ = $c$$.colorLookupIndex, $dec_index$$ = parseInt($color$$.rgb.replace("#", ""), 16), $dec_index$$ = parseInt($dec_index$$ / 16777215 * ($c$$.length - $count$$)), $colors$$ = [];
    for($i$$ = 0;$i$$ < $count$$;$i$$++) {
      $colors$$.push(colorLookup[$c$$[$dec_index$$ + $i$$]].id)
    }
    return $colors$$
  }
};
function startsWith($key$$, $str$$) {
  return $str$$.slice(0, $key$$.length) == $key$$
}
function isExcludeFromSearch($colorId$$) {
  var $rtnBoolean$$ = !1;
  $colorId$$ in {"PPU1-1":"PPU1-1", "PPU1-2":"PPU1-2", "PPU1-3":"PPU1-3", "PPU1-4":"PPU1-4", "PPU1-04":"PPU1-04", "PPU1-4A":"PPU1-4A", "PPU1-5":"PPU1-5", "PPU1-05":"PPU1-05", "PPU1-5A":"PPU1-5A", "PPU1-6":"PPU1-6", "PPU1-7":"PPU1-7", "PPU1-8":"PPU1-8", "PPU1-9":"PPU1-9", "PPU2-1":"PPU2-1", "PPU2-2":"PPU2-2", "PPU2-3":"PPU2-3", "PPU2-4":"PPU2-4", "PPU2-5":"PPU2-5", "PPU2-6":"PPU2-6", "PPU2-7":"PPU2-7", "PPU2-8":"PPU2-8", "PPU2-9":"PPU2-9", "PPU3-1":"PPU3-1", "PPU3-2":"PPU3-2", "PPU3-3":"PPU3-3", "PPU3-4":"PPU3-4", 
  "PPU3-5":"PPU3-5", "PPU3-6":"PPU3-6", "PPU3-7":"PPU3-7", "PPU3-8":"PPU3-8", "PPU3-9":"PPU3-9", "PPU4-1":"PPU4-1", "PPU4-2":"PPU4-2", "PPU4-3":"PPU4-3", "PPU4-4":"PPU4-4", "PPU4-5":"PPU4-5", "PPU4-6":"PPU4-6", "PPU4-7":"PPU4-7", "PPU4-8":"PPU4-8", "PPU4-9":"PPU4-9", "PPU5-1":"PPU5-1", "PPU5-2":"PPU5-2", "PPU5-3":"PPU5-3", "PPU5-4":"PPU5-4", "PPU5-5":"PPU5-5", "PPU5-6":"PPU5-6", "PPU5-7":"PPU5-7", "PPU5-8":"PPU5-8", "PPU5-9":"PPU5-9", "PPU6-1":"PPU6-1", "PPU6-2":"PPU6-2", "PPU6-3":"PPU6-3", "PPU6-4":"PPU6-4", 
  "PPU6-5":"PPU6-5", "PPU6-6":"PPU6-6", "PPU6-7":"PPU6-7", "PPU6-8":"PPU6-8", "PPU6-9":"PPU6-9", "PPU7-1":"PPU7-1", "PPU7-2":"PPU7-2", "PPU7-03":"PPU7-03", "PPU7-3":"PPU7-3", "PPU7-3A":"PPU7-3A", "PPU7-4":"PPU7-4", "PPU7-5":"PPU7-5", "PPU7-6":"PPU7-6", "PPU7-7":"PPU7-7", "PPU7-8":"PPU7-8", "PPU7-9":"PPU7-9", "PPU8-1":"PPU8-1", "PPU8-2":"PPU8-2", "PPU8-3":"PPU8-3", "PPU8-4":"PPU8-4", "PPU8-5":"PPU8-5", "PPU8-6":"PPU8-6", "PPU8-7":"PPU8-7", "PPU8-8":"PPU8-8", "PPU8-9":"PPU8-9", "PPU9-1":"PPU9-1", "PPU9-2":"PPU9-2", 
  "PPU9-3":"PPU9-3", "PPU9-4":"PPU9-4", "PPU9-5":"PPU9-5", "PPU9-6":"PPU9-6", "PPU9-7":"PPU9-7", "PPU9-8":"PPU9-8", "PPU9-9":"PPU9-9", "PPU10-1":"PPU10-1", "PPU10-2":"PPU10-2", "PPU10-3":"PPU10-3", "PPU10-4":"PPU10-4", "PPU10-5":"PPU10-5", "PPU10-6":"PPU10-6", "PPU10-7":"PPU10-7", "PPU10-8":"PPU10-8", "PPU10-9":"PPU10-9", "PPU11-1":"PPU11-1", "PPU11-2":"PPU11-2", "PPU11-3":"PPU11-3", "PPU11-4":"PPU11-4", "PPU11-5":"PPU11-5", "PPU11-6":"PPU11-6", "PPU11-7":"PPU11-7", "PPU11-8":"PPU11-8", "PPU11-9":"PPU11-9", 
  "PPU12-1":"PPU12-1", "PPU12-2":"PPU12-2", "PPU12-3":"PPU12-3", "PPU12-4":"PPU12-4", "PPU12-5":"PPU12-5", "PPU12-6":"PPU12-6", "PPU12-7":"PPU12-7", "PPU12-8":"PPU12-8", "PPU12-9":"PPU12-9", "PPU13-1":"PPU13-1", "PPU13-2":"PPU13-2", "PPU13-3":"PPU13-3", "PPU13-4":"PPU13-4", "PPU13-5":"PPU13-5", "PPU13-6":"PPU13-6", "PPU13-7":"PPU13-7", "PPU13-8":"PPU13-8", "PPU13-9":"PPU13-9", "PPU14-1":"PPU14-1", "PPU14-2":"PPU14-2", "PPU14-3":"PPU14-3", "PPU14-4":"PPU14-4", "PPU14-5":"PPU14-5", "PPU14-6":"PPU14-6", 
  "PPU14-7":"PPU14-7", "PPU14-8":"PPU14-8", "PPU14-9":"PPU14-9", "PPU15-1":"PPU15-1", "PPU15-2":"PPU15-2", "PPU15-3":"PPU15-3", "PPU15-4":"PPU15-4", "PPU15-5":"PPU15-5", "PPU15-6":"PPU15-6", "PPU15-7":"PPU15-7", "PPU15-8":"PPU15-8", "PPU15-9":"PPU15-9", "PPU16-1":"PPU16-1", "PPU16-2":"PPU16-2", "PPU16-3":"PPU16-3", "PPU16-4":"PPU16-4", "PPU16-5":"PPU16-5", "PPU16-6":"PPU16-6", "PPU16-7":"PPU16-7", "PPU16-8":"PPU16-8", "PPU16-9":"PPU16-9", "PPU17-1":"PPU17-1", "PPU17-2":"PPU17-2", "PPU17-3":"PPU17-3", 
  "PPU17-4":"PPU17-4", "PPU17-5":"PPU17-5", "PPU17-6":"PPU17-6", "PPU17-7":"PPU17-7", "PPU17-8":"PPU17-8", "PPU17-9":"PPU17-9", "PPU18-1":"PPU18-1", "PPU18-2":"PPU18-2", "PPU18-3":"PPU18-3", "PPU18-4":"PPU18-4", "PPU18-5":"PPU18-5", "PPU18-6":"PPU18-6", "PPU18-7":"PPU18-7", "PPU18-8":"PPU18-8", "PPU18-9":"PPU18-9", "MQ1-1":"MQ1-1", "MQ1-2":"MQ1-2", "MQ1-3":"MQ1-3", "MQ1-4":"MQ1-4", "MQ1-5":"MQ1-5", "MQ1-6":"MQ1-6", "MQ1-7":"MQ1-7", "MQ1-8":"MQ1-8", "MQ1-9":"MQ1-9", "MQ2-1":"MQ2-1", "MQ2-2":"MQ2-2", 
  "MQ2-3":"MQ2-3", "MQ2-4":"MQ2-4", "MQ2-5":"MQ2-5", "MQ2-6":"MQ2-6", "MQ2-7":"MQ2-7", "MQ2-8":"MQ2-8", "MQ2-9":"MQ2-9", "MQ3-1":"MQ3-1", "MQ3-2":"MQ3-2", "MQ3-3":"MQ3-3", "MQ3-4":"MQ3-4", "MQ3-5":"MQ3-5", "MQ3-6":"MQ3-6", "MQ3-7":"MQ3-7", "MQ3-8":"MQ3-8", "MQ3-9":"MQ3-9", "MQ4-1":"MQ4-1", "MQ4-2":"MQ4-2", "MQ4-3":"MQ4-3", "MQ4-4":"MQ4-4", "MQ4-5":"MQ4-5", "MQ4-6":"MQ4-6", "MQ4-7":"MQ4-7", "MQ4-8":"MQ4-8", "MQ4-9":"MQ4-9", "MQ5-1":"MQ5-1", "MQ5-2":"MQ5-2", "MQ5-3":"MQ5-3", "MQ5-4":"MQ5-4", "MQ5-5":"MQ5-5", 
  "MQ5-6":"MQ5-6", "MQ5-7":"MQ5-7", "MQ5-8":"MQ5-8", "MQ5-9":"MQ5-9", "MQ6-1":"MQ6-1", "MQ6-2":"MQ6-2", "MQ6-3":"MQ6-3", "MQ6-4":"MQ6-4", "MQ6-5":"MQ6-5", "MQ6-6":"MQ6-6", "MQ6-7":"MQ6-7", "MQ6-8":"MQ6-8", "MQ6-9":"MQ6-9", "BL-W1":"BL-W1", "BL-W2":"BL-W2", "BL-W3":"BL-W3", "BL-W4":"BL-W4", "BL-W5":"BL-W5", "BL-W6":"BL-W6", "BL-W7":"BL-W7", "BL-W8":"BL-W8", "BL-W9":"BL-W9", "GR-W1":"GR-W1", "GR-W2":"GR-W2", "GR-W3":"GR-W3", "GR-W4":"GR-W4", "GR-W5":"GR-W5", "GR-W6":"GR-W6", "GR-W7":"GR-W7", "GR-W8":"GR-W8", 
  "GR-W9":"GR-W9", "OR-W1":"OR-W1", "OR-W2":"OR-W2", "OR-W3":"OR-W3", "OR-W4":"OR-W4", "OR-W5":"OR-W5", "OR-W6":"OR-W6", "OR-W7":"OR-W7", "OR-W8":"OR-W8", "OR-W9":"OR-W9", "PR-W1":"PR-W1", "PR-W2":"PR-W2", "PR-W3":"PR-W3", "PR-W4":"PR-W4", "PR-W5":"PR-W5", "PR-W6":"PR-W6", "PR-W7":"PR-W7", "PR-W8":"PR-W8", "PR-W9":"PR-W9", "RD-W1":"RD-W1", "RD-W2":"RD-W2", "RD-W3":"RD-W3", "RD-W4":"RD-W4", "RD-W5":"RD-W5", "RD-W6":"RD-W6", "RD-W7":"RD-W7", "RD-W8":"RD-W8", "RD-W9":"RD-W9", "YL-W1":"YL-W1", "YL-W2":"YL-W2", 
  "YL-W3":"YL-W3", "YL-W4":"YL-W4", "YL-W5":"YL-W5", "YL-W6":"YL-W6", "YL-W7":"YL-W7", "YL-W8":"YL-W8", "YL-W9":"YL-W9"} && ($rtnBoolean$$ = !0);
  startsWith("UL", $colorId$$) && ($rtnBoolean$$ = !0);
  startsWith("PPQ", $colorId$$) && ($rtnBoolean$$ = !0);
  null != RegExp("((?:[a-z][a-z]+))(-)(\\d)(\\d)( )(\\(HISP\\))", ["i"]).exec($colorId$$) && ($rtnBoolean$$ = !0);
  return $rtnBoolean$$
}
var whtArray = {"PR-W12":"PR-W12", "N220-1":"N22-01", "S260-1":"S260-1", "RD-W16":"RD-W16", "YL-W03":"YL-W03", 70:"70", "GR-W13":"GR-W13", "M320-1":"M320-1", 12:"12", 75:"75", "GR-W09":"GR-W09", 1850:"1850", 52:"52", 57:"57", "N140-2":"N140-2", "N200-1":"N200-1", "N230-2":"N230-2", "S240-1":"S240-1", "N240-2":"N240-2", "OR-W11":"OR-W11", 13:"13", "YL-W01":"YL-W01", 73:"73", "OR-W13":"OR-W13", "N320-1":"N320-1", "N350-2":"N350-2", "N370-2":"N370-2", "N360-2":"N360-2", "GR-W06":"GR-W06", "N460-2":"N460-2", 
"N530-1":"N530-1", "N140-5":"N140-5", "N180-5":"N180-5", "N190-4":"N190-4", "N200-3":"N200-3", "N260-3":"N260-3", "N300-3":"N300-3", 23:"23", 22:"22", "YL-W13":"YL-W13", "N320-3":"N320-3", "N360-3":"N360-3", "N500-3":"N500-3", "N360-5":"N360-5", "N520-3":"N520-3", "N140-7":"N140-7", "N180-7":"N180-7", "N200-6":"N200-6", "N210-7":"N210-7", "N210-5":"N210-5", "N220-4":"N220-4", "N230-4":"N230-4", "N260-6":"N260-6", "N300-5":"N300-5", "N310-4":"N310-4", "N320-6":"N320-6", "N510-5":"N510-5", "N470-6":"N470-6", 
"N460-6":"N460-6", "N520-7":"N520-7"}, gryArray = {"PPU18-12":"PPU18-12", "PPU18-09":"PPU18-09", "790C-1":"790C-1", "790C-2":"790C-2", "BL-W13":"BL-W13", "BNC-07":"BNC-07", "780E-3":"780E-3", "N510-1":"N510-1", "N510-2":"N510-2", "790E-1":"790E-1", "PPU18-08":"PPU18-08", "PPU18-10":"PPU18-10", "PPU18-15":"PPU18-15", "790E-2":"790E-2", "790C-3":"790C-3", "790D-4":"790D-4", "770E-2":"770E-2", "N460-3":"N460-3", "N500-3":"N500-3", "PPU18-04":"PPU18-04", "N500-4":"N500-4", "N520-1":"N520-1", "N520-2":"N520-2", 
"N520-3":"N520-3", "790F-4":"790F-4", "PPU18-16":"PPU18-16", "BNC-17":"BNC-17", "N360-4":"N360-4", "PPU18-11":"PPU18-11", "N500-5":"N500-5", "770F-5":"770F-5", "N490-6":"N490-6", "PPU18-03":"PPU18-03", "770E-3":"770E-3", "780F-5":"780F-5", "N530-5":"N530-5", "790F-5":"790F-5", "790F-6":"790F-6", "PPU18-19":"PPU18-19", "PPU18-18":"PPU18-18", "N460-6":"N460-6", "N450-6":"N450-6", "N500-6":"N500-6", "N500-7":"N500-7", "N510-7":"N510-7", "N520-5":"N520-5", "PPU18-01":"PPU18-01", "N520-7":"N520-7"}, extArray = 
{12:"12", "M270-3":"M270-3", "N310-3":"N310-3", "N220-4":"N220-4", "N220-4":"N220-4", "N190-3":"N190-3", "N140-3":"N140-3", "N320-3":"N320-3", "N330-4":"N330-4", "N520-3":"N520-3", "N470-74":"N470-74", "N520-7":"N520-7", "OR-W12":"OR-W12", "N300-7":"N300-7", "S220-6":"S220-6", "S330-1":"S330-1", "YL-W07":"YL-W07", "N520-6":"N520-6", "N370-6":"N370-6", "N530-7":"N530-7", "M500-7":"M500-7", "M310-1":"M310-1", "M150-7":"M150-7", "M430-7":"M430-7", "N390-7":"N390-7", "N550-7":"N550-7", "N420-7":"N420-7", 
"S450-7":"S450-7", "S160-7":"S160-7", "N150-7":"N150-7", "M490-7":"M490-7", "M140-7":"M140-7", "N500-7":"N500-7", "M270-3":"M270-3", "S290-4":"S290-4", "M250-2":"M250-2", "S260-3":"S260-3", "N190-4":"N190-4", "S210-4":"S210-4", "N230-5":"N230-5", "N150-5":"N150-5", "N370-5":"N370-5", "N400-3":"N400-3", "N520-5":"N520-5", "OR-W12":"OR-W12", "M320-1":"M320-1", "N420-3":"N420-3", "N460-6":"N460-6", "N350-6":"N350-6", "S310-1":"S310-1", "N290-3":"N290-3", "M280-2":"M280-2", "N340-2":"N340-2", "YL-W09":"YL-W09", 
"N200-2":"N200-2", "M430-7":"M430-7", "S470-5":"S470-5", "M200-7":"M200-7", "S250-7":"S250-7", "S190-7":"S190-7", "N490-5":"N490-5", "M100-7":"M100-7", "N200-4":"N200-4", "S210-7":"S210-7", "N110-7":"N110-7", "N400-7":"N400-7", "M290-4":"M290-4", "S270-2":"S270-2", "S270-4":"S270-4", "S270-5":"S270-5", "N160-6":"N160-6", "N140-3":"N140-3", "S130-7":"S130-7", "N210-6":"N210-6", "N350-4":"N350-4", "N400-3":"N400-3", "N490-4":"N490-4", 73:"73", "S200-7":"S200-7", "YL-W08":"YL-W08", "N140-7":"N140-7", 
"S270-1":"S270-1", "N520-6":"N520-6", "S240-3":"S240-3", "N290-4":"N290-4", "N290-2":"N290-2", "YL-W09":"YL-W09", "BL-W12":"BL-W12", "N500-6":"N500-6", "N460-4":"N460-4", "S150-7":"S150-7", "N410-6":"N410-6", "S520-6":"S520-6", "S160-7":"S160-7", "N170-7":"N170-7", "S450-6":"S450-6", "N240-6":"N240-6", "N110-7":"N110-7", "M130-7":"M130-7"}, intArray = {"BIC-03":"BIC-03", 23:"23", "BIC-01":"BIC-01", "BIC-02":"BIC-02", "BIC-03":"BIC-03", "BIC-04":"BIC-04", "BIC-02":"BIC-02", "BIC-06":"BIC-06", "BIC-07":"BIC-07", 
"BIC-08":"BIC-08", "BIC-09":"BIC-09", "BIC-10":"BIC-10", "BIC-10":"BIC-10", "BIC-11":"BIC-11", "BIC-12":"BIC-12", "BIC-13":"BIC-13", 70:"70", 12:"12", "BIC-14":"BIC-14", "BIC-15":"BIC-15", "BIC-16":"BIC-16", "BIC-17":"BIC-17", "BIC-18":"BIC-18", "BIC-48":"BIC-48", "BIC-19":"BIC-19", "BIC-20":"BIC-20", "BIC-21":"BIC-21", "BIC-22":"BIC-22", "BIC-23":"BIC-23", "BIC-24":"BIC-24", "BIC-25":"BIC-25", "BIC-26":"BIC-26", "BIC-27":"BIC-27", "BIC-28":"BIC-28", "BIC-29":"BIC-29", "BIC-30":"BIC-30", "BIC-29":"BIC-29", 
"BIC-31":"BIC-31", "BIC-32":"BIC-32", "BIC-32":"BIC-32", "BIC-34":"BIC-34", "BIC-35":"BIC-35", "BIC-36":"BIC-36", "BIC-37":"BIC-37", "BIC-38":"BIC-38", "BIC-39":"BIC-39", "BIC-40":"BIC-40", "BIC-25":"BIC-25", "BIC-41":"BIC-41", "BIC-42":"BIC-42", "BIC-43":"BIC-43", "BIC-44":"BIC-44", "BIC-45":"BIC-45", "BIC-46":"BIC-46", "BIC-47":"BIC-47", "BIC-48":"BIC-48", "BIC-49":"BIC-49", "BIC-50":"BIC-50", "BIC-51":"BIC-51", "BIC-35":"BIC-35", "BIC-52":"BIC-52", "BIC-53":"BIC-53", "BIC-54":"BIC-54", "BIC-55":"BIC-55", 
"BIC-56":"BIC-56", "BIC-57":"BIC-57"};
ColorUtilities.brochure = function $ColorUtilities$brochure$($type$$, $lookup$$) {
  var $rtn$$ = [], $chkArray$$;
  switch($type$$) {
    case "BehrWhtNeu":
      $chkArray$$ = whtArray;
      break;
    case "BehrGry":
      $chkArray$$ = gryArray;
      break;
    case "BehrExt":
      $chkArray$$ = extArray;
      break;
    case "BehrInt":
      $chkArray$$ = intArray
  }
  for(var $c$$ in $lookup$$) {
    var $color$$ = $lookup$$[$c$$];
    $color$$.id.toUpperCase() in $chkArray$$ && $rtn$$.push($color$$)
  }
  return $rtn$$
};
ColorUtilities.search = function $ColorUtilities$search$($term$$, $lookup$$) {
  if(!$lookup$$ || 0 == $lookup$$.length) {
    $lookup$$ = colorLookup
  }
  var $r$$ = [];
  if(null != $term$$ && 0 < $term$$.length) {
    var $r1$$ = [], $r2$$ = [], $r3$$ = [], $c$$;
    for($c$$ in $lookup$$) {
      var $color$$ = $lookup$$[$c$$];
      if(!$color$$.islegacycolor) {
        var $i$$ = $color$$.name.toLowerCase().search($term$$.toLowerCase());
        0 > $i$$ && ($i$$ = String($color$$.id).search($term$$.toUpperCase()));
        var $cid$$ = $color$$.id.toLowerCase(), $d$$ = $cid$$.substring(0, $cid$$.lastIndexOf("-") + 1), $d2$$ = $cid$$.substring(0, $cid$$.lastIndexOf("-"));
        if(0 <= $i$$ || $term$$ == $d$$ || $term$$ == $cid$$ || $term$$ == $d2$$) {
          isExcludeFromSearch($color$$.id) || ($color$$.israck || $color$$.isultra ? 0 == $i$$ ? $r1$$.push($color$$) : $r3$$.push($color$$) : $r2$$.push($color$$))
        }
      }
    }
    $c$$ = function $$c$$$($a$$, $b$$) {
      var $x$$ = $a$$.name.toLowerCase(), $y$$ = $b$$.name.toLowerCase();
      return $x$$ < $y$$ ? -1 : $x$$ > $y$$ ? 1 : 0
    };
    $color$$ = function $$color$$$($a$$, $b$$) {
      if("PPU" === $term$$.toUpperCase()) {
        var $x$$ = parseInt($a$$.id.substr(3).replace("-", "")), $y$$ = parseInt($b$$.id.substr(3).replace("-", ""))
      }else {
        $x$$ = $a$$.id.toLowerCase(), $y$$ = $b$$.id.toLowerCase()
      }
      return $x$$ < $y$$ ? -1 : $x$$ > $y$$ ? 1 : 0
    };
    if(0 < $r1$$.length || 0 < $r2$$.length || 0 < $r3$$.length) {
      void 0 !== $('input:radio[name="sortby"]:checked').val() && "name" === $('input:radio[name="sortby"]:checked').val() ? ($r1$$.sort($c$$), $r2$$.sort($c$$), $r3$$.sort($c$$)) : ($r1$$.sort($color$$), $r2$$.sort($color$$), $r3$$.sort($color$$)), $r$$ = "PPU" === $term$$.toUpperCase() ? $r$$.concat($r1$$).concat($r2$$) : $r$$.concat($r1$$).concat($r2$$).concat($r3$$)
    }
  }
  return $r$$
};
function printColor($id$$) {
  console.info(colorLookup[$id$$])
}
;if(!window.console) {
  var console = {}
}
console.log || (console.log = function $console$log$() {
});
console.info || (console.info = function $console$info$() {
});
var repaintIsTurnedOn = !0, doBilateralSmoothing = !0, showPYPTooltips = !0, ignorePaintClick = !1, edgeData, checked, drawing, drawingContext, canMain, context, canEdge, context2, mainCanvas, mainContext, imgMain, imgEdge, preDrawingCanvas, preDrawingContext, colorCanvas, colorContext, newImageCanvas, newImageCanvasContext, colorCanvasImage, newColorCanvas, newColorCanvasContext, cannyCanvas, cannyCanvasContext, segmentCanvas, segmentCanvasContext, thumbnailCanvas, thumbnailCanvasContext, paintEntireImageData, 
sessionUserImages = [], processingInterval, processingPercent = 0, maskingLines = [], maskingDrag = !1, maskStartX = null, maskStartY = null, maskEndX = null, maskEndY = null, maskingCircleX = null, maskingCircleY = null, maskingPolyArray = null, eraserRadius = 8, paintRadius = 8, eraserSelected = 5, paintSelected = 0, resizedPhotoPositionOffsetX = 0, resizedPhotoPositionOffsetY = 0, photoPositionOffsetX = 0, photoPositionOffsetY = 0, photoPositionStartX = 0, photoPositionStartY = 0, imageSmallerThanCanvas = 
!0, whRatio = 0, originalPhotoWidth = 0, originalPhotoHeight = 0, resizedPhotoWidth = 0, resizedPhotoHeight = 0, originalResizeRatio = 0, dragging = !1, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, originalPhotoObj = new Image, drawingCanvasWidth = 706, drawingCanvasHeight = 508, reader, userHasSavedPYPImages = !1, hidePaintSlider, superLuminMap;
"undefined" == typeof Uint8ClampedArray && (Uint8ClampedArray = "undefined" == typeof Uint8Array ? Array : Uint8Array);
function floodfill_hexToR($h$$) {
  $h$$ = parseInt(floodfill_cutHex($h$$).substring(0, 2), 16);
  2 > $h$$ && ($h$$ = 2);
  return $h$$
}
function floodfill_hexToG($h$$) {
  return parseInt(floodfill_cutHex($h$$).substring(2, 4), 16)
}
function floodfill_hexToB($h$$) {
  return parseInt(floodfill_cutHex($h$$).substring(4, 6), 16)
}
function floodfill_cutHex($h$$) {
  return"#" == $h$$.charAt(0) ? $h$$.substring(1, 7) : $h$$
}
function floodfill_matchTolerance($b$$, $color$$, $tolerance$$, $ex_rMax$$, $ey_gMax$$) {
  $ex_rMax$$ = startR + startR * ($tolerance$$ / 100);
  $ey_gMax$$ = startG + startG * ($tolerance$$ / 100);
  var $bMax$$ = startB + startB * ($tolerance$$ / 100), $gMin$$ = startG - startG * ($tolerance$$ / 100), $bMin$$ = startB - startB * ($tolerance$$ / 100), $r$$ = imageData.data[$b$$], $g$$ = imageData.data[$b$$ + 1];
  $b$$ = imageData.data[$b$$ + 2];
  return $r$$ >= startR - startR * ($tolerance$$ / 100) && $r$$ <= $ex_rMax$$ && ($g$$ >= $gMin$$ && $g$$ <= $ey_gMax$$ && $b$$ >= $bMin$$ && $b$$ <= $bMax$$) && !($r$$ == floodfill_hexToR($color$$) && $g$$ == floodfill_hexToG($color$$) && $b$$ == floodfill_hexToB($color$$))
}
var maxTol = 50, selectionData = Array(maxTol), merged = null, colorMerged = null;
drawingContext = null;
var lumins = 70, cLumins = 0, selectionDataBoundingRectMinX, selectionDataBoundingRectMaxX, selectionDataBoundingRectMinY, selectionDataBoundingRectMaxY, tempBoundingRectangleY, tempBoundingRectangleX;
function tool_magic_wand($context$$, $W$$, $H$$, $sliderLeft_x$$, $y$$, $imgData_sensitivity$$, $maskContext$$, $isBrushRepaint$$, $color$$) {
  $imgData_sensitivity$$ = $context$$.getImageData(0, 0, $W$$, $H$$).data;
  ogSmoothData = document.getElementById("smooth").getContext("2d").getImageData(0, 0, $W$$, $H$$).data;
  var $W4$$ = 4 * $W$$;
  selectionDataBoundingRectMinX = 707;
  selectionDataBoundingRectMaxX = 0;
  selectionDataBoundingRectMinY = 509;
  selectionDataBoundingRectMaxY = 0;
  var $paintedData$$ = document.getElementById("canColor").getContext("2d").getImageData(0, 0, $W$$, $H$$).data, $maskLineData$$ = document.getElementById("maskingTop").getContext("2d").getImageData(0, 0, $W$$, $H$$).data, $cannyData$$ = document.getElementById("canny").getContext("2d").getImageData(0, 0, $W$$, $H$$).data;
  for(cx = 0;cx < maxTol;cx++) {
    selectionData[cx] = $context$$.createImageData($W$$, $H$$)
  }
  $context$$.createImageData($W$$, $H$$);
  $maskContext$$ = $maskContext$$.getImageData(0, 0, $W$$, $H$$).data;
  var $k$$ = $y$$ * $W4$$ + 4 * $sliderLeft_x$$, $dx$$ = [0, -1, 1, 0], $dy$$ = [-1, 0, 0, 1], $JSCompiler_object_inline_r_0$$ = floodfill_hexToR(currentColor.rgb), $JSCompiler_object_inline_g_1$$ = floodfill_hexToG(currentColor.rgb), $JSCompiler_object_inline_b_2$$ = floodfill_hexToB(currentColor.rgb), $JSCompiler_object_inline_r_4$$ = $maskContext$$[$k$$ + 0], $JSCompiler_object_inline_g_5_newImage$$ = $maskContext$$[$k$$ + 1], $JSCompiler_object_inline_b_6_iLumins$$ = $maskContext$$[$k$$ + 2], 
  $JSCompiler_object_inline_a_7_iCount$$ = $maskContext$$[$k$$ + 3], $isPainted$$ = !1, $paintedRGB$$ = [];
  0 < $paintedData$$[$k$$ + 3] && ($isPainted$$ = !0, $paintedRGB$$[0] = $paintedData$$[$k$$ + 0], $paintedRGB$$[1] = $paintedData$$[$k$$ + 1], $paintedRGB$$[2] = $paintedData$$[$k$$ + 2]);
  var $drawimgData_tol$$ = document.getElementById("drawing").getContext("2d").getImageData(0, 0, $W$$, $H$$).data;
  ColorUtilities.convertRGBToLAB($drawimgData_tol$$[$k$$ + 0], $drawimgData_tol$$[$k$$ + 1], $drawimgData_tol$$[$k$$ + 2]);
  if($JSCompiler_object_inline_r_4$$ == $JSCompiler_object_inline_r_0$$ && $JSCompiler_object_inline_g_5_newImage$$ == $JSCompiler_object_inline_g_1$$ && $JSCompiler_object_inline_b_6_iLumins$$ == $JSCompiler_object_inline_b_2$$ && 255 == $JSCompiler_object_inline_a_7_iCount$$) {
    return!1
  }
  $context$$.createImageData($W$$, $H$$);
  $JSCompiler_object_inline_g_5_newImage$$ = $context$$.getImageData(0, 0, $W$$, $H$$).data;
  $JSCompiler_object_inline_a_7_iCount$$ = $JSCompiler_object_inline_b_6_iLumins$$ = 0;
  for($drawimgData_tol$$ = 1;$drawimgData_tol$$ < maxTol;$drawimgData_tol$$ += 2) {
    var $stack$$ = [];
    $stack$$.push($sliderLeft_x$$);
    $stack$$.push($y$$);
    for(var $usedImage$$ = $context$$.getImageData(0, 0, $W$$, $H$$).data;0 < $stack$$.length;) {
      for(var $curPointY$$ = $stack$$.pop(), $curPointX$$ = $stack$$.pop(), $i$$ = 0;4 > $i$$;$i$$++) {
        var $nearby_nextPointX$$ = $curPointX$$ + $dx$$[$i$$], $nextPointY$$ = $curPointY$$ + $dy$$[$i$$];
        if(!(0 > $nearby_nextPointX$$ || 0 > $nextPointY$$ || $nearby_nextPointX$$ >= $W$$ || $nextPointY$$ >= $H$$)) {
          if($k$$ = 4 * ($nextPointY$$ * $W$$ + $nearby_nextPointX$$), 1 != $usedImage$$[$k$$]) {
            if($usedImage$$[$k$$] = 1, 255 == $JSCompiler_object_inline_g_5_newImage$$[$k$$]) {
              $stack$$.push($nearby_nextPointX$$), $stack$$.push($nextPointY$$)
            }else {
              if(ColorUtilities.convertRGBToLAB($imgData_sensitivity$$[$k$$ + 0], $imgData_sensitivity$$[$k$$ + 1], $imgData_sensitivity$$[$k$$ + 2]), !(!1 == $isPainted$$ && 0 != $paintedData$$[$k$$])) {
                if((!1 == $isPainted$$ && Math.abs($maskContext$$[$k$$ + 0] - $JSCompiler_object_inline_r_4$$) < $drawimgData_tol$$ || !0 == $isPainted$$ && $paintedRGB$$[0] == $paintedData$$[$k$$] && $paintedRGB$$[1] == $paintedData$$[$k$$ + 1]) && 0 == $maskLineData$$[$k$$ + 0]) {
                  Math.abs($maskContext$$[$k$$ + 0] - $JSCompiler_object_inline_r_4$$), 255 == ALPHA ? (30 > $drawimgData_tol$$ && ($JSCompiler_object_inline_b_6_iLumins$$ += luminMap.data[$k$$], $JSCompiler_object_inline_a_7_iCount$$++), selectionData[$drawimgData_tol$$].data[$k$$ + 0] = 255, selectionData[$drawimgData_tol$$].data[$k$$ + 3] = 255, $JSCompiler_object_inline_g_5_newImage$$[$k$$] = 255, tempBoundingRectangleY = Math.floor($k$$ / $W4$$), tempBoundingRectangleX = ($k$$ - tempBoundingRectangleY * 
                  $W4$$) / 4, tempBoundingRectangleY < selectionDataBoundingRectMinY ? selectionDataBoundingRectMinY = tempBoundingRectangleY : tempBoundingRectangleY > selectionDataBoundingRectMaxY && (selectionDataBoundingRectMaxY = tempBoundingRectangleY), tempBoundingRectangleX < selectionDataBoundingRectMinX ? selectionDataBoundingRectMinX = tempBoundingRectangleX : tempBoundingRectangleX > selectionDataBoundingRectMaxX && (selectionDataBoundingRectMaxX = tempBoundingRectangleX)) : $imgData_sensitivity$$[$k$$ + 
                  3] = ALPHA, $stack$$.push($nearby_nextPointX$$), $stack$$.push($nextPointY$$)
                }else {
                  if($nearby_nextPointX$$ = isNearbyPixel($paintedData$$, $JSCompiler_object_inline_r_0$$, $JSCompiler_object_inline_g_1$$, $JSCompiler_object_inline_b_2$$, 6, $nearby_nextPointX$$, $nextPointY$$, $cannyData$$), !1 == $isPainted$$ && (Math.abs($maskContext$$[$k$$ + 0] - $JSCompiler_object_inline_r_4$$) < $drawimgData_tol$$ + 155 || 0 < $nearby_nextPointX$$)) {
                    Math.abs($maskContext$$[$k$$ + 0] - $JSCompiler_object_inline_r_4$$), 255 == ALPHA ? (30 > $drawimgData_tol$$ && ($JSCompiler_object_inline_b_6_iLumins$$ += luminMap.data[$k$$], $JSCompiler_object_inline_a_7_iCount$$++), selectionData[$drawimgData_tol$$].data[$k$$ + 0] = 255, selectionData[$drawimgData_tol$$].data[$k$$ + 3] = 255, 2 == $nearby_nextPointX$$ && ($JSCompiler_object_inline_g_5_newImage$$[$k$$] = 255), tempBoundingRectangleY = Math.floor($k$$ / $W4$$), tempBoundingRectangleX = 
                    ($k$$ - tempBoundingRectangleY * $W4$$) / 4, tempBoundingRectangleY < selectionDataBoundingRectMinY ? selectionDataBoundingRectMinY = tempBoundingRectangleY : tempBoundingRectangleY > selectionDataBoundingRectMaxY && (selectionDataBoundingRectMaxY = tempBoundingRectangleY), tempBoundingRectangleX < selectionDataBoundingRectMinX ? selectionDataBoundingRectMinX = tempBoundingRectangleX : tempBoundingRectangleX > selectionDataBoundingRectMaxX && (selectionDataBoundingRectMaxX = tempBoundingRectangleX)) : 
                    $imgData_sensitivity$$[$k$$ + 3] = ALPHA
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  cLumins = $JSCompiler_object_inline_b_6_iLumins$$ / $JSCompiler_object_inline_a_7_iCount$$;
  $color$$ ? getFullMerge(10, $color$$, $isPainted$$, cLumins) : getFullMerge(20, !1, $isPainted$$, cLumins);
  !$isBrushRepaint$$ && !$isPainted$$ ? ($context$$ = $y$$ + 75, 5 > $context$$ && ($context$$ = 5), 403 < $context$$ && ($context$$ = 403), $sliderLeft_x$$ -= 75, 5 > $sliderLeft_x$$ && ($sliderLeft_x$$ = 5), 551 < $sliderLeft_x$$ && ($sliderLeft_x$$ = 551), $(".pyptools_slider").addClass("active"), $(".pyptools_slider").css("top", $context$$ + "px"), $(".pyptools_slider").css("left", $sliderLeft_x$$ + "px"), $(".pyptools_slider .small_triangle").css("width", "54px")) : ($(".pyptools_slider").removeClass("active"), 
  mergeImageDataOntoCanvas())
}
function isNearbyPixel($colorData$$, $r$$, $g$$, $b$$, $minY_tolerance$$, $curi_x$$, $curY_y$$, $cannyData$$) {
  var $maxX$$ = $curi_x$$ + $minY_tolerance$$;
  $maxX$$ > W && ($maxX$$ = W - 1);
  var $curX_minX$$ = $curi_x$$ - $minY_tolerance$$;
  0 > $curX_minX$$ && ($curX_minX$$ = 0);
  var $maxY$$ = $curY_y$$ + $minY_tolerance$$;
  $maxY$$ > H && ($maxY$$ = H - 1);
  $minY_tolerance$$ = $curY_y$$ - $minY_tolerance$$;
  0 > $minY_tolerance$$ && ($minY_tolerance$$ = 0);
  for($curi_x$$ = $curY_y$$ * 4 * W + 4 * $curi_x$$;$curX_minX$$ <= $maxX$$;$curX_minX$$++) {
    for($curY_y$$ = $minY_tolerance$$;$curY_y$$ <= $maxY$$;$curY_y$$++) {
      var $i$$ = $curY_y$$ * 4 * W + 4 * $curX_minX$$;
      if($colorData$$[$i$$] == $r$$ && $colorData$$[$i$$ + 1] == $g$$ && $colorData$$[$i$$ + 2] == $b$$ || 125 < $cannyData$$[$i$$]) {
        return $curX_minX$$ < $maxX$$ && $curY_y$$ < $maxY$$ && 125 > $cannyData$$[$curi_x$$] ? 125 > $cannyData$$[$i$$] ? 2 : 1 : !0
      }
    }
  }
  return!1
}
function getFullMerge($prevLumin_tol$$, $color$$10_color_to$$, $lastFoundColor_skipDilation$$, $compLumins$$) {
  var $W4$$ = 4 * W;
  canMain = document.getElementById("drawing");
  context2 = canMain.getContext("2d");
  merged = context2.createImageData(W, H);
  ogMain = document.getElementById("predrawing");
  ogContext = ogMain.getContext("2d");
  ogData = ogContext.getImageData(0, 0, W, H);
  var $newImageData$$ = newImageCanvasContext.createImageData(W, H), $segData$$ = document.getElementById("segmentCanvas").getContext("2d").getImageData(0, 0, W, H).data;
  colorCanvasImage = newColorCanvasContext.createImageData(W, H);
  $color$$10_color_to$$ = $color$$10_color_to$$ ? $color$$10_color_to$$ : {r:floodfill_hexToR(currentColor.rgb), g:floodfill_hexToG(currentColor.rgb), b:floodfill_hexToB(currentColor.rgb), a:255};
  2 > $color$$10_color_to$$.r && ($color$$10_color_to$$.r = 2);
  var $toColorLCH$$ = ColorUtilities.convertRGBToLAB($color$$10_color_to$$.r, $color$$10_color_to$$.g, $color$$10_color_to$$.b);
  colorMap = context.createImageData(W, H);
  for(var $i$$ = 0, $topRow$$ = selectionDataBoundingRectMinY * $W4$$, $rowLength$$ = $W4$$, $ix$$ = selectionDataBoundingRectMinX;$ix$$ < selectionDataBoundingRectMaxX;$ix$$++) {
    for(var $i$$ = $topRow$$ + 4 * $ix$$, $iy$$ = selectionDataBoundingRectMinY;$iy$$ < selectionDataBoundingRectMaxY;$iy$$++) {
      for(cx = $prevLumin_tol$$;-1 < cx;cx--) {
        255 == colorMap.data[$i$$] || $color$$10_color_to$$.r == colorMap.data[$i$$] || (10 < selectionData[cx].data[$i$$] ? (colorMap.data[$i$$] = 255, colorMap.data[$i$$ + 1] = 255, colorMap.data[$i$$ + 2] = 255) : (colorMap.data[$i$$] = 1, colorMap.data[$i$$ + 1] = 1, colorMap.data[$i$$ + 2] = 1), colorMap.data[$i$$ + 3] = 255)
      }
      $i$$ += $rowLength$$
    }
  }
  $lastFoundColor_skipDilation$$ || (colorMap = dilatation(erosion(dilatation(colorMap))));
  $topRow$$ = selectionDataBoundingRectMinY * $W4$$;
  $rowLength$$ = $W4$$;
  $lastFoundColor_skipDilation$$ = $prevLumin_tol$$ = 0;
  for($ix$$ = selectionDataBoundingRectMinX;$ix$$ < selectionDataBoundingRectMaxX;$ix$$++) {
    $i$$ = $topRow$$ + 4 * $ix$$;
    for($iy$$ = selectionDataBoundingRectMinY;$iy$$ < selectionDataBoundingRectMaxY;$iy$$++) {
      if(10 < colorMap.data[$i$$]) {
        $W4$$ = cLumins;
        if(255 == superLuminMap[$i$$ + 3]) {
          $W4$$ = superLuminMap[$i$$]
        }else {
          0 < cLuminData[$i$$ + 3] && 255 > cLuminData[$i$$ + 3] && ($W4$$ = cLuminData[$i$$ + 3]);
          var $cachedLumins_toLab$$ = 0, $deltaE_foundIt$$ = !1, $lowestDelta_newLumin$$ = 31, $lowestLuminosity_modifier$$ = 0, $fc_lastFoundLab$$ = null;
          if(0 != foundColors.length) {
            if(0 < $segData$$[$i$$]) {
              for($fc_lastFoundLab$$ = 0;$fc_lastFoundLab$$ < foundColors.length;$fc_lastFoundLab$$++) {
                if(foundColors[$fc_lastFoundLab$$].r == $segData$$[$i$$] && foundColors[$fc_lastFoundLab$$].g == $segData$$[$i$$ + 1] && foundColors[$fc_lastFoundLab$$].b == $segData$$[$i$$ + 2]) {
                  $cachedLumins_toLab$$ = foundLumins[$fc_lastFoundLab$$];
                  $deltaE_foundIt$$ = !0;
                  if(0 != $lastFoundColor_skipDilation$$ && $lastFoundColor_skipDilation$$.r != foundColors[$fc_lastFoundLab$$].r) {
                    var $foundLab$$ = ColorUtilities.convertRGBToLAB(foundColors[$fc_lastFoundLab$$].r, foundColors[$fc_lastFoundLab$$].g, foundColors[$fc_lastFoundLab$$].b), $fc_lastFoundLab$$ = ColorUtilities.convertRGBToLAB($lastFoundColor_skipDilation$$.r, $lastFoundColor_skipDilation$$.g, $lastFoundColor_skipDilation$$.b);
                    deltaEE = ColorUtilities.colorCompareDE1994($foundLab$$[0], $foundLab$$[1], $foundLab$$[2], $fc_lastFoundLab$$[0], $fc_lastFoundLab$$[1], $fc_lastFoundLab$$[2]);
                    35 > deltaEE && ($cachedLumins_toLab$$ = $fc_lastFoundLab$$[0])
                  }else {
                    $lastFoundColor_skipDilation$$ = foundColors[$fc_lastFoundLab$$]
                  }
                  break
                }
              }
            }
            if(!$deltaE_foundIt$$) {
              $cachedLumins_toLab$$ = ColorUtilities.convertRGBToLAB(ogData.data[$i$$], ogData.data[$i$$ + 1], ogData.data[$i$$ + 2]);
              for($fc_lastFoundLab$$ = 0;$fc_lastFoundLab$$ < foundColors.length;$fc_lastFoundLab$$++) {
                var $foundLab$$ = ColorUtilities.convertRGBToLAB(foundColors[$fc_lastFoundLab$$].r, foundColors[$fc_lastFoundLab$$].g, foundColors[$fc_lastFoundLab$$].b), $deltaE_foundIt$$ = ColorUtilities.colorCompareDE1994($foundLab$$[0], $foundLab$$[1], $foundLab$$[2], $cachedLumins_toLab$$[0], $cachedLumins_toLab$$[1], $cachedLumins_toLab$$[2]), $comboFoundRgb$$ = ColorUtilities.combineRGB(foundColors[$fc_lastFoundLab$$].r, foundColors[$fc_lastFoundLab$$].g, foundColors[$fc_lastFoundLab$$].b);
                -1 == $lowestDelta_newLumin$$ ? ($lowestDelta_newLumin$$ = $deltaE_foundIt$$ - colorWeights[$comboFoundRgb$$], $lowestLuminosity_modifier$$ = $foundLab$$[0]) : $deltaE_foundIt$$ < $lowestDelta_newLumin$$ && ($lowestDelta_newLumin$$ = $deltaE_foundIt$$, $lowestLuminosity_modifier$$ = $foundLab$$[0])
              }
              $cachedLumins_toLab$$ = 10 > $lowestDelta_newLumin$$ ? $lowestLuminosity_modifier$$ : 0 != $compLumins$$ ? $compLumins$$ : $cachedLumins_toLab$$[0]
            }
          }
          0 < $cachedLumins_toLab$$ && ($W4$$ = $cachedLumins_toLab$$);
          15 > $W4$$ && ($W4$$ = 15);
          0 == superLuminMap[$i$$ + 3] && (superLuminMap[$i$$] = $W4$$, superLuminMap[$i$$ + 3] = 255)
        }
        $lowestLuminosity_modifier$$ = $W4$$ - $toColorLCH$$[0];
        $lowestLuminosity_modifier$$ = 0 > $lowestLuminosity_modifier$$ ? (100 + $lowestLuminosity_modifier$$) / 100 : 0 < $lowestLuminosity_modifier$$ ? 100 / (100 - $lowestLuminosity_modifier$$) : 1;
        $lowestDelta_newLumin$$ = luminMap.data[$i$$] / $W4$$ * $toColorLCH$$[0];
        $lowestDelta_newLumin$$ = $lowestDelta_newLumin$$ * $lowestLuminosity_modifier$$ - ($W4$$ - $toColorLCH$$[0]) / 1.5;
        100 < $lowestDelta_newLumin$$ && ($lowestDelta_newLumin$$ = 100);
        if(0 != $ix$$) {
          var $leftLumin_leftLuminI$$ = $iy$$ * 4 * W + 4 * ($ix$$ - 1), $leftLumin_leftLuminI$$ = ColorUtilities.convertRGBToLAB($newImageData$$.data[$leftLumin_leftLuminI$$], $newImageData$$.data[$leftLumin_leftLuminI$$ + 1], $newImageData$$.data[$leftLumin_leftLuminI$$ + 2])[0]
        }
        if(0 < $prevLumin_tol$$ && $iy$$ != selectionDataBoundingRectMinY && $ix$$ != selectionDataBoundingRectMinX && 5 < (10 > $cachedLumins_toLab$$ || 5 < Math.abs($prevLumin_tol$$ - $lowestDelta_newLumin$$) || Math.abs($leftLumin_leftLuminI$$ - $lowestDelta_newLumin$$))) {
          $lowestDelta_newLumin$$ = 0 < $leftLumin_leftLuminI$$ && 0 != $ix$$ ? (2 * $prevLumin_tol$$ + 2 * $leftLumin_leftLuminI$$ + $lowestDelta_newLumin$$) / 5 : (4 * $prevLumin_tol$$ + $lowestDelta_newLumin$$) / 5
        }
        $prevLumin_tol$$ = $lowestDelta_newLumin$$;
        $W4$$ = ColorUtilities.convertLABToRGB($lowestDelta_newLumin$$, $toColorLCH$$[1], $toColorLCH$$[2]);
        $newImageData$$.data[$i$$] = $W4$$[0];
        $newImageData$$.data[$i$$ + 1] = $W4$$[1];
        $newImageData$$.data[$i$$ + 2] = $W4$$[2];
        $newImageData$$.data[$i$$ + 3] = 255;
        colorCanvasImage.data[$i$$] = $color$$10_color_to$$.r;
        colorCanvasImage.data[$i$$ + 1] = $color$$10_color_to$$.g;
        colorCanvasImage.data[$i$$ + 2] = $color$$10_color_to$$.b;
        colorCanvasImage.data[$i$$ + 3] = 255;
        0 == cLuminData[$i$$ + 3] && (cLuminData[$i$$ + 3] = cLumins)
      }
      $i$$ += $rowLength$$
    }
  }
  merged.data.set($newImageData$$.data);
  newImageCanvasContext.putImageData(merged, 0, 0);
  newColorCanvasContext.putImageData(colorCanvasImage, 0, 0)
}
function mergeImageDataOntoCanvas() {
  null != drawingContext && (drawingContext.drawImage(newImageCanvas, 0, 0), newImageCanvas.width = newImageCanvas.width, null != colorCanvasImage && (colorContext.drawImage(newColorCanvas, 0, 0), newColorCanvas.width = newColorCanvas.width), saveCanvasStates())
}
function merge($layers$$, $mode$$) {
  var $tmpc$$ = $("<canvas>")[0];
  $mode$$ = $mode$$ || "normal";
  var $dstc$$, $dstd$$, $dstpx$$, $dsta$$, $tmpm$$, $len$$, $srcpx$$, $alppx$$, $h$$ = $layers$$[0].height, $w$$ = $layers$$[0].width, $i$$, $l$$, $cnt$$, $srca$$, $outa$$, $srcr$$, $srcg$$, $srcb$$, $dstr$$, $dstg$$, $dstb$$, $newr$$, $newg$$, $newb$$;
  $tmpc$$.height = $h$$;
  $tmpc$$.width = $w$$;
  $dstc$$ = $tmpc$$.getContext("2d");
  $dstc$$.createImageData($w$$, $h$$);
  $dstd$$ = $dstc$$.getImageData(0, 0, $w$$, $h$$);
  $dstpx$$ = $dstd$$.data;
  $len$$ = $dstpx$$.length;
  $tmpm$$ = Array(4);
  $cnt$$ = $layers$$.length;
  $srcpx$$ = Array($cnt$$);
  $alppx$$ = Array($cnt$$);
  $layers$$.each(function($idx$$) {
    var $imd$$ = this.getContext("2d").getImageData(0, 0, $w$$, $h$$);
    $srcpx$$[$idx$$] = $imd$$.data;
    $alppx$$[$idx$$] = +$(this).css("opacity")
  });
  for($i$$ = 0;$i$$ < $len$$;$i$$ += 4) {
    $tmpm$$[0] = $srcpx$$[0][$i$$];
    $tmpm$$[1] = $srcpx$$[0][$i$$ + 1];
    $tmpm$$[2] = $srcpx$$[0][$i$$ + 2];
    $tmpm$$[3] = $srcpx$$[0][$i$$ + 3] * $alppx$$[0];
    for($l$$ = 1;$l$$ < $cnt$$;$l$$++) {
      $srca$$ = $srcpx$$[$l$$][$i$$ + 3] / 255 * $alppx$$[$l$$];
      $dsta$$ = $tmpm$$[3] / 255 * (1 - $srca$$);
      $outa$$ = $srca$$ + $tmpm$$[3] * (1 - $srca$$) / 255;
      $srcr$$ = $srcpx$$[$l$$][$i$$];
      $srcg$$ = $srcpx$$[$l$$][$i$$ + 1];
      $srcb$$ = $srcpx$$[$l$$][$i$$ + 2];
      $dstr$$ = $tmpm$$[0];
      $dstg$$ = $tmpm$$[1];
      $dstb$$ = $tmpm$$[2];
      switch($mode$$) {
        case "normal":
          $newr$$ = $srcr$$;
          $newg$$ = $srcg$$;
          $newb$$ = $srcb$$;
          break;
        case "multiply":
          $newr$$ = $srcr$$ * $dstr$$ / 255;
          $newg$$ = $srcg$$ * $dstg$$ / 255;
          $newb$$ = $srcb$$ * $dstb$$ / 255;
          break;
        case "screen":
          $newr$$ = 255 - (255 - $srcr$$) * (255 - $dstr$$) / 255;
          $newg$$ = 255 - (255 - $srcg$$) * (255 - $dstg$$) / 255;
          $newb$$ = 255 - (255 - $srcb$$) * (255 - $dstb$$) / 255;
          break;
        case "overlay":
          $newr$$ = 128 > $dstr$$ ? 2 * $srcr$$ * $dstr$$ / 255 : 255 - 2 * (255 - $srcr$$) * (255 - $dstr$$) / 255;
          $newg$$ = 128 > $dstg$$ ? 2 * $srcg$$ * $dstg$$ / 255 : 255 - 2 * (255 - $srcg$$) * (255 - $dstg$$) / 255;
          $newb$$ = 128 > $dstb$$ ? 2 * $srcb$$ * $dstb$$ / 255 : 255 - 2 * (255 - $srcb$$) * (255 - $dstb$$) / 255;
          break;
        case "soft light":
          $newr$$ = 128 > $dstr$$ ? 2 * ($srcr$$ >> 65) * $dstr$$ / 255 : 255 - 2 * (255 - ($srcr$$ >> 65)) * (255 - $dstr$$) / 255;
          $newg$$ = 128 > $dstg$$ ? 2 * ($srcg$$ >> 65) * $dstg$$ / 255 : 255 - 2 * (255 - ($srcg$$ >> 65)) * (255 - $dstg$$) / 255;
          $newb$$ = 128 > $dstb$$ ? 2 * ($srcb$$ >> 65) * $dstb$$ / 255 : 255 - 2 * (255 - ($srcb$$ >> 65)) * (255 - $dstb$$) / 255;
          break;
        case "hard light":
          $newr$$ = 128 > $srcr$$ ? 2 * $srcr$$ * $dstr$$ / 255 : 255 - 2 * (255 - $srcr$$) * (255 - $dstr$$) / 255;
          $newg$$ = 128 > $srcg$$ ? 2 * $srcg$$ * $dstg$$ / 255 : 255 - 2 * (255 - $srcg$$) * (255 - $dstg$$) / 255;
          $newb$$ = 128 > $srcb$$ ? 2 * $srcb$$ * $dstb$$ / 255 : 255 - 2 * (255 - $srcb$$) * (255 - $dstb$$) / 255;
          break;
        case "dodge":
          $newr$$ = $srcr$$ + $dstr$$;
          $newg$$ = $srcg$$ + $dstg$$;
          $newb$$ = $srcb$$ + $dstb$$;
          break;
        case "burn":
          $newr$$ = $srcr$$ + $dstr$$ - 255;
          $newg$$ = $srcg$$ + $dstg$$ - 255;
          $newb$$ = $srcb$$ + $dstb$$ - 255;
          break;
        case "difference":
          $newr$$ = Math.abs($srcr$$ - $dstr$$), $newg$$ = Math.abs($srcg$$ - $dstg$$), $newb$$ = Math.abs($srcb$$ - $dstb$$)
      }
      $newr$$ = $newr$$ * $srca$$ + $dstr$$ * $dsta$$;
      $newg$$ = $newg$$ * $srca$$ + $dstg$$ * $dsta$$;
      $newb$$ = $newb$$ * $srca$$ + $dstb$$ * $dsta$$;
      $newr$$ = 0 == $outa$$ ? 0 : $newr$$ / $outa$$;
      $newg$$ = 0 == $outa$$ ? 0 : $newg$$ / $outa$$;
      $newb$$ = 0 == $outa$$ ? 0 : $newb$$ / $outa$$;
      $tmpm$$[0] = 255 < $newr$$ ? 255 : (0 > $newr$$ ? 0 : $newr$$) | 0;
      $tmpm$$[1] = 255 < $newg$$ ? 255 : (0 > $newg$$ ? 0 : $newg$$) | 0;
      $tmpm$$[2] = 255 < $newb$$ ? 255 : (0 > $newb$$ ? 0 : $newb$$) | 0;
      $tmpm$$[3] = 255 * $outa$$ | 0
    }
    $dstpx$$[$i$$] = $tmpm$$[0];
    $dstpx$$[$i$$ + 1] = $tmpm$$[1];
    $dstpx$$[$i$$ + 2] = $tmpm$$[2];
    $dstpx$$[$i$$ + 3] = $tmpm$$[3]
  }
  $dstc$$.putImageData($dstd$$, 0, 0);
  return $tmpc$$
}
function blur($img$$, $passes$$) {
  var $i$$, $j$$, $k$$, $n$$, $w$$ = W, $h$$ = H, $rounds$$ = $passes$$ || 0, $pos$$ = step = jump = inner = outer = arr = 0;
  if($img$$) {
    for($n$$ = 0;$n$$ < $rounds$$;$n$$++) {
      for(var $m$$ = 0;2 > $m$$;$m$$++) {
        $m$$ ? (outer = $w$$, inner = $h$$, step = 4 * $w$$) : (outer = $h$$, inner = $w$$, step = 4);
        for($i$$ = 0;$i$$ < outer;$i$$++) {
          jump = 0 === $m$$ ? 4 * $i$$ * $w$$ : 4 * $i$$;
          for($k$$ = 0;3 > $k$$;$k$$++) {
            $pos$$ = jump + $k$$;
            arr = 0;
            arr = $img$$[$pos$$] + $img$$[$pos$$ + step] + $img$$[$pos$$ + 2 * step];
            $img$$[$pos$$] = Math.floor(arr / 3);
            arr += $img$$[$pos$$ + 3 * step];
            $img$$[$pos$$ + step] = Math.floor(arr / 4);
            arr += $img$$[$pos$$ + 4 * step];
            $img$$[$pos$$ + 2 * step] = Math.floor(arr / 5);
            for($j$$ = 3;$j$$ < inner - 2;$j$$++) {
              arr = Math.max(0, arr - $img$$[$pos$$ + ($j$$ - 2) * step] + $img$$[$pos$$ + ($j$$ + 2) * step]), $img$$[$pos$$ + $j$$ * step] = Math.floor(arr / 5)
            }
            arr -= $img$$[$pos$$ + ($j$$ - 2) * step];
            $img$$[$pos$$ + $j$$ * step] = Math.floor(arr / 4);
            arr -= $img$$[$pos$$ + ($j$$ - 1) * step];
            $img$$[$pos$$ + ($j$$ + 1) * step] = Math.floor(arr / 3)
          }
        }
      }
    }
    return $img$$
  }
}
var ALPHA = 255, W = 706, H = 508;
function getPixelColor($img$$3_offset$$, $result$$4_x$$, $y$$) {
  var $data$$ = $img$$3_offset$$.data;
  $img$$3_offset$$ = $y$$ * 4 * $img$$3_offset$$.width + 4 * $result$$4_x$$;
  $result$$4_x$$ = $data$$[$img$$3_offset$$ + 0] << 24;
  $result$$4_x$$ |= $data$$[$img$$3_offset$$ + 1] << 16;
  return $result$$4_x$$ |= $data$$[$img$$3_offset$$ + 2] << 8
}
function setPixelColor($img$$4_offset$$, $x$$, $y$$, $color$$) {
  var $data$$ = $img$$4_offset$$.data;
  $img$$4_offset$$ = $y$$ * 4 * $img$$4_offset$$.width + 4 * $x$$;
  $data$$[$img$$4_offset$$ + 0] = $color$$ >> 24 & 255;
  $data$$[$img$$4_offset$$ + 1] = $color$$ >> 16 & 255;
  $data$$[$img$$4_offset$$ + 2] = $color$$ >> 8 & 255
}
function intval($name$$) {
  return parseInt(document.getElementById($name$$).value)
}
var foundColors = [], foundLumins = [];
function paintEntireImage() {
  var $dfd$$ = $.Deferred();
  setTimeout(function() {
    var $segmentCanvas$$ = document.getElementById("segmentCanvas");
    $segmentCanvas$$.width = $segmentCanvas$$.width;
    canMain = document.getElementById("canMain");
    context = canMain.getContext("2d");
    canMask = document.getElementById("canEdge");
    maskContext = canMask.getContext("2d");
    canMaskData = maskContext.getImageData(0, 0, W, H).data;
    paintEntireImageData = document.getElementById("segmentCanvas").getContext("2d").getImageData(0, 0, W, H).data;
    var $cx$$ = 0, $cy$$ = 0, $offset$$ = 0, $W4$$ = 4 * W, $paintEnitreImageInterval$$ = setInterval(function() {
      if($cx$$ >= W) {
        try {
          processingPercent = 100;
          $dfd$$.notify(processingPercent);
          clearInterval($paintEnitreImageInterval$$);
          var $tempData$$ = document.getElementById("segmentCanvas").getContext("2d").getImageData(0, 0, W, H);
          $tempData$$.data.set(paintEntireImageData);
          for(var $tempData$$ = dilatation($tempData$$), $ix$$ = 0;$ix$$ < W;$ix$$++) {
            for(var $iy$$ = 0;$iy$$ < H;$iy$$++) {
              var $i$$ = $iy$$ * $W4$$ + 4 * $ix$$, $fromSegLCH$$ = ColorUtilities.convertRGBToLAB($tempData$$.data[$i$$], $tempData$$.data[$i$$ + 1], $tempData$$.data[$i$$ + 2]);
              superLuminMap[$i$$] = $fromSegLCH$$[0]
            }
          }
          document.getElementById("segmentCanvas").getContext("2d").putImageData($tempData$$, 0, 0);
          saveCanvasStates();
          addNewImageToSessionImages();
          switchFromVisualizerToPYP();
          $("div#pypCurtain").hide();
          $("div#overlay_processing_image").hide();
          hideModal();
          clearAllPYPButtons()
        }catch($err$$) {
          alert($err$$.message)
        }
      }else {
        $cy$$ >= H ? (processingPercent += 2.6, 0 == $cx$$ % 2 && $dfd$$.notify(processingPercent), $cx$$ += 20, $cy$$ = 0) : ($offset$$ = $cy$$ * 4 * W + 4 * $cx$$, 27 > canMaskData[$offset$$] && 0 == paintEntireImageData[$offset$$] && tool_magic_wand_custom(context, W, H, $cx$$, $cy$$, 3, maskContext, !1, 27), $cy$$ += 12)
      }
    }, 1)
  }, 1);
  return $dfd$$.promise()
}
var colorWeights = [];
function tool_magic_wand_custom($context$$2_i$$, $W$$2_ix$$, $H$$, $usedImage$$1_x$$, $totalR_y$$, $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$, $color_to$$2_maskContext$$, $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$, $iy$$2_tol$$) {
  $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$ = $context$$2_i$$.getImageData(0, 0, $W$$2_ix$$, $H$$).data;
  selectionDataBoundingRectMinX = 707;
  selectionDataBoundingRectMaxX = 0;
  selectionDataBoundingRectMinY = 509;
  selectionDataBoundingRectMaxY = 0;
  var $cannyData$$2_lowestDelta$$ = document.getElementById("canny").getContext("2d").getImageData(0, 0, $W$$2_ix$$, $H$$).data, $lowestLuminosity$$1_paintedData$$ = document.getElementById("canColor").getContext("2d").getImageData(0, 0, $W$$2_ix$$, $H$$).data, $lowestDeltaFCLumin_maskLineData$$ = document.getElementById("maskingTop").getContext("2d").getImageData(0, 0, $W$$2_ix$$, $H$$).data;
  selectionData[$iy$$2_tol$$] = $context$$2_i$$.createImageData($W$$2_ix$$, $H$$);
  var $maskData$$1_toLab$$ = $color_to$$2_maskContext$$.getImageData(0, 0, $W$$2_ix$$, $H$$).data, $colorCount_k$$ = $totalR_y$$ * 4 * $W$$2_ix$$ + 4 * $usedImage$$1_x$$, $dx$$5_fc$$ = [0, -1, 1, 0], $dy$$5_foundLab$$ = [-1, 0, 0, 1];
  $color_to$$2_maskContext$$ = {r:floodfill_hexToR(currentColor.rgb), g:floodfill_hexToG(currentColor.rgb), b:floodfill_hexToB(currentColor.rgb), a:255};
  var $JSCompiler_object_inline_r_8_comboFoundRgb$$ = $maskData$$1_toLab$$[$colorCount_k$$ + 0], $JSCompiler_object_inline_g_9_colorCombo$$ = $maskData$$1_toLab$$[$colorCount_k$$ + 1], $JSCompiler_object_inline_b_10_stack$$ = $maskData$$1_toLab$$[$colorCount_k$$ + 2];
  $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ = $maskData$$1_toLab$$[$colorCount_k$$ + 3];
  var $deltaE$$1_isPainted$$ = !1, $paintedRGB$$ = [];
  0 < $lowestLuminosity$$1_paintedData$$[$colorCount_k$$ + 3] && ($deltaE$$1_isPainted$$ = !0, $paintedRGB$$[0] = $lowestLuminosity$$1_paintedData$$[$colorCount_k$$ + 0], $paintedRGB$$[1] = $lowestLuminosity$$1_paintedData$$[$colorCount_k$$ + 1], $paintedRGB$$[2] = $lowestLuminosity$$1_paintedData$$[$colorCount_k$$ + 2]);
  var $drawimgData$$1_newImage$$ = document.getElementById("drawing").getContext("2d").getImageData(0, 0, $W$$2_ix$$, $H$$).data;
  ColorUtilities.convertRGBToLAB($drawimgData$$1_newImage$$[$colorCount_k$$ + 0], $drawimgData$$1_newImage$$[$colorCount_k$$ + 1], $drawimgData$$1_newImage$$[$colorCount_k$$ + 2]);
  if($JSCompiler_object_inline_r_8_comboFoundRgb$$ == $color_to$$2_maskContext$$.r && $JSCompiler_object_inline_g_9_colorCombo$$ == $color_to$$2_maskContext$$.g && $JSCompiler_object_inline_b_10_stack$$ == $color_to$$2_maskContext$$.b && $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ == $color_to$$2_maskContext$$.a) {
    return!1
  }
  $context$$2_i$$.createImageData($W$$2_ix$$, $H$$);
  var $drawimgData$$1_newImage$$ = $context$$2_i$$.getImageData(0, 0, $W$$2_ix$$, $H$$).data, $iLumins$$ = 0;
  $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ = 0;
  $JSCompiler_object_inline_g_9_colorCombo$$ = ($JSCompiler_object_inline_r_8_comboFoundRgb$$ + $JSCompiler_object_inline_b_10_stack$$ + $JSCompiler_object_inline_g_9_colorCombo$$) / 3;
  $JSCompiler_object_inline_b_10_stack$$ = [];
  $JSCompiler_object_inline_b_10_stack$$.push($usedImage$$1_x$$);
  $JSCompiler_object_inline_b_10_stack$$.push($totalR_y$$);
  $usedImage$$1_x$$ = $context$$2_i$$.getImageData(0, 0, $W$$2_ix$$, $H$$).data;
  for(var $totalG$$ = $totalR_y$$ = 0, $totalB$$ = 0;0 < $JSCompiler_object_inline_b_10_stack$$.length;) {
    var $curPointY$$ = $JSCompiler_object_inline_b_10_stack$$.pop(), $curPointX$$ = $JSCompiler_object_inline_b_10_stack$$.pop();
    for($context$$2_i$$ = 0;4 > $context$$2_i$$;$context$$2_i$$++) {
      var $nearby$$1_nextPointX$$ = $curPointX$$ + $dx$$5_fc$$[$context$$2_i$$], $nextPointY$$ = $curPointY$$ + $dy$$5_foundLab$$[$context$$2_i$$];
      if(!(0 > $nearby$$1_nextPointX$$ || 0 > $nextPointY$$ || $nearby$$1_nextPointX$$ >= $W$$2_ix$$ || $nextPointY$$ >= $H$$)) {
        if($colorCount_k$$ = 4 * ($nextPointY$$ * $W$$2_ix$$ + $nearby$$1_nextPointX$$), 1 != $usedImage$$1_x$$[$colorCount_k$$]) {
          if($usedImage$$1_x$$[$colorCount_k$$] = 1, 255 == $drawimgData$$1_newImage$$[$colorCount_k$$]) {
            $JSCompiler_object_inline_b_10_stack$$.push($nearby$$1_nextPointX$$), $JSCompiler_object_inline_b_10_stack$$.push($nextPointY$$)
          }else {
            if(ColorUtilities.convertRGBToLAB($imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 0], $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 1], $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 2]), !(!1 == $deltaE$$1_isPainted$$ && 0 != $lowestLuminosity$$1_paintedData$$[$colorCount_k$$])) {
              if((!1 == $deltaE$$1_isPainted$$ && Math.abs($maskData$$1_toLab$$[$colorCount_k$$ + 0] - $JSCompiler_object_inline_g_9_colorCombo$$) < $iy$$2_tol$$ || !0 == $deltaE$$1_isPainted$$ && $paintedRGB$$[0] == $lowestLuminosity$$1_paintedData$$[$colorCount_k$$]) && 0 == $lowestDeltaFCLumin_maskLineData$$[$colorCount_k$$ + 0]) {
                Math.abs($maskData$$1_toLab$$[$colorCount_k$$ + 0] - $JSCompiler_object_inline_g_9_colorCombo$$), 255 == ALPHA ? (30 > $iy$$2_tol$$ && ($iLumins$$ += luminMap.data[$colorCount_k$$], $totalR_y$$ += $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$], $totalG$$ += $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 1], $totalB$$ += $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 2], $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$++), 
                selectionData[$iy$$2_tol$$].data[$colorCount_k$$ + 0] = 255, selectionData[$iy$$2_tol$$].data[$colorCount_k$$ + 3] = 255, $drawimgData$$1_newImage$$[$colorCount_k$$] = 255, tempBoundingRectangleY = Math.floor($colorCount_k$$ / (4 * $W$$2_ix$$)), tempBoundingRectangleX = ($colorCount_k$$ - tempBoundingRectangleY * 4 * $W$$2_ix$$) / 4, tempBoundingRectangleY < selectionDataBoundingRectMinY ? selectionDataBoundingRectMinY = tempBoundingRectangleY : tempBoundingRectangleY > selectionDataBoundingRectMaxY && 
                (selectionDataBoundingRectMaxY = tempBoundingRectangleY), tempBoundingRectangleX < selectionDataBoundingRectMinX ? selectionDataBoundingRectMinX = tempBoundingRectangleX : tempBoundingRectangleX > selectionDataBoundingRectMaxX && (selectionDataBoundingRectMaxX = tempBoundingRectangleX)) : $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 3] = ALPHA, $JSCompiler_object_inline_b_10_stack$$.push($nearby$$1_nextPointX$$), $JSCompiler_object_inline_b_10_stack$$.push($nextPointY$$)
              }else {
                if($nearby$$1_nextPointX$$ = isNearbyPixel($lowestLuminosity$$1_paintedData$$, $color_to$$2_maskContext$$.r, $color_to$$2_maskContext$$.g, $color_to$$2_maskContext$$.b, 6, $nearby$$1_nextPointX$$, $nextPointY$$, $cannyData$$2_lowestDelta$$), !1 == $deltaE$$1_isPainted$$ && (Math.abs($maskData$$1_toLab$$[$colorCount_k$$ + 0] - $JSCompiler_object_inline_r_8_comboFoundRgb$$) < $iy$$2_tol$$ + 155 || 0 < $nearby$$1_nextPointX$$)) {
                  Math.abs($maskData$$1_toLab$$[$colorCount_k$$ + 0] - $JSCompiler_object_inline_r_8_comboFoundRgb$$), 255 == ALPHA ? (30 > $iy$$2_tol$$ && ($iLumins$$ += luminMap.data[$colorCount_k$$], $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$++), selectionData[$iy$$2_tol$$].data[$colorCount_k$$ + 0] = 255, selectionData[$iy$$2_tol$$].data[$colorCount_k$$ + 3] = 255, 2 == $nearby$$1_nextPointX$$ && ($drawimgData$$1_newImage$$[$colorCount_k$$] = 255), tempBoundingRectangleY = 
                  Math.floor($colorCount_k$$ / (4 * $W$$2_ix$$)), tempBoundingRectangleX = ($colorCount_k$$ - tempBoundingRectangleY * 4 * $W$$2_ix$$) / 4, tempBoundingRectangleY < selectionDataBoundingRectMinY ? selectionDataBoundingRectMinY = tempBoundingRectangleY : tempBoundingRectangleY > selectionDataBoundingRectMaxY && (selectionDataBoundingRectMaxY = tempBoundingRectangleY), tempBoundingRectangleX < selectionDataBoundingRectMinX ? selectionDataBoundingRectMinX = tempBoundingRectangleX : tempBoundingRectangleX > 
                  selectionDataBoundingRectMaxX && (selectionDataBoundingRectMaxX = tempBoundingRectangleX)) : $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$[$colorCount_k$$ + 3] = ALPHA
                }
              }
            }
          }
        }
      }
    }
  }
  cLumins = $iLumins$$ / $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$;
  $color_to$$2_maskContext$$ = {r:Math.floor($totalR_y$$ / $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$), g:Math.floor($totalG$$ / $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$), b:Math.floor($totalB$$ / $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$), a:255};
  $H$$ = ColorUtilities.combineRGB($color_to$$2_maskContext$$.r, $color_to$$2_maskContext$$.g, $color_to$$2_maskContext$$.b);
  $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$ = 0;
  $cannyData$$2_lowestDelta$$ = -1;
  $lowestDeltaFCLumin_maskLineData$$ = $lowestLuminosity$$1_paintedData$$ = 0;
  $maskData$$1_toLab$$ = ColorUtilities.convertRGBToLAB($color_to$$2_maskContext$$.r, $color_to$$2_maskContext$$.g, $color_to$$2_maskContext$$.b);
  0 == foundColors.length && ($lowestLuminosity$$1_paintedData$$ = $maskData$$1_toLab$$[0]);
  $colorCount_k$$ = [];
  colorWeights = [];
  $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ /= 800;
  15 < $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ && ($JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ = 15);
  for($dx$$5_fc$$ = 0;$dx$$5_fc$$ < foundColors.length;$dx$$5_fc$$++) {
    $dy$$5_foundLab$$ = ColorUtilities.convertRGBToLAB(foundColors[$dx$$5_fc$$].r, foundColors[$dx$$5_fc$$].g, foundColors[$dx$$5_fc$$].b), $JSCompiler_object_inline_r_8_comboFoundRgb$$ = ColorUtilities.combineRGB(foundColors[$dx$$5_fc$$].r, foundColors[$dx$$5_fc$$].g, foundColors[$dx$$5_fc$$].b), $deltaE$$1_isPainted$$ = ColorUtilities.colorCompareDE1994($dy$$5_foundLab$$[0], $dy$$5_foundLab$$[1], $dy$$5_foundLab$$[2], $maskData$$1_toLab$$[0], $maskData$$1_toLab$$[1], $maskData$$1_toLab$$[2]), -1 == 
    $cannyData$$2_lowestDelta$$ ? ($imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$ = $dx$$5_fc$$, $cannyData$$2_lowestDelta$$ = $deltaE$$1_isPainted$$ - colorWeights[$JSCompiler_object_inline_r_8_comboFoundRgb$$], $lowestLuminosity$$1_paintedData$$ = $maskData$$1_toLab$$[0], $lowestDeltaFCLumin_maskLineData$$ = $dy$$5_foundLab$$[0]) : $deltaE$$1_isPainted$$ < $cannyData$$2_lowestDelta$$ && ($cannyData$$2_lowestDelta$$ = $deltaE$$1_isPainted$$, $imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$ = $dx$$5_fc$$, 
    $lowestLuminosity$$1_paintedData$$ = $maskData$$1_toLab$$[0], $lowestDeltaFCLumin_maskLineData$$ = $dy$$5_foundLab$$[0])
  }
  5 > $cannyData$$2_lowestDelta$$ && -1 != $cannyData$$2_lowestDelta$$ ? ($color_to$$2_maskContext$$ = foundColors[$imgData$$1_isBrushRepaint$$1_lowestDeltaFC$$], 0 != $lowestDeltaFCLumin_maskLineData$$ ? (foundColors.push($color_to$$2_maskContext$$), $lowestDeltaFCLumin_maskLineData$$ = ($lowestDeltaFCLumin_maskLineData$$ * $colorCount_k$$[$H$$] + $lowestLuminosity$$1_paintedData$$) / $colorCount_k$$[$H$$] + 1, $colorCount_k$$[$H$$]++, colorWeights[$H$$] < $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$ && 
  (colorWeights[$H$$] = $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$), foundLumins.push($lowestDeltaFCLumin_maskLineData$$)) : (foundColors.push($color_to$$2_maskContext$$), $colorCount_k$$[$H$$] = 1, colorWeights[$H$$] = $JSCompiler_object_inline_a_11_colorWeight_iCount$$1_sensitivity$$, foundLumins.push($lowestLuminosity$$1_paintedData$$))) : (foundColors.push($color_to$$2_maskContext$$), foundLumins.push($lowestLuminosity$$1_paintedData$$));
  topRow = 4 * selectionDataBoundingRectMinY * $W$$2_ix$$;
  rowLength = 4 * $W$$2_ix$$;
  cx = $iy$$2_tol$$;
  for($W$$2_ix$$ = selectionDataBoundingRectMinX;$W$$2_ix$$ < selectionDataBoundingRectMaxX;$W$$2_ix$$++) {
    $context$$2_i$$ = topRow + 4 * $W$$2_ix$$;
    for($iy$$2_tol$$ = selectionDataBoundingRectMinY;$iy$$2_tol$$ < selectionDataBoundingRectMaxY;$iy$$2_tol$$++) {
      10 < selectionData[cx].data[$context$$2_i$$] && (paintEntireImageData[$context$$2_i$$] = $color_to$$2_maskContext$$.r, paintEntireImageData[$context$$2_i$$ + 1] = $color_to$$2_maskContext$$.g, paintEntireImageData[$context$$2_i$$ + 2] = $color_to$$2_maskContext$$.b, paintEntireImageData[$context$$2_i$$ + 3] = 255), $context$$2_i$$ += rowLength
    }
  }
}
function rgbToInt($r$$, $g$$, $b$$) {
  return decColor = ($r$$ << 16) + ($g$$ << 8) + $b$$
}
function handleClick($e$$, $ele$$) {
  mergeImageDataOntoCanvas();
  var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  mouseX = Math.round($e$$.pageX - $ele$$.getBoundingClientRect().left - $xScroll$$);
  mouseY = Math.round($e$$.pageY - $ele$$.getBoundingClientRect().top - $yScroll$$);
  canMain = document.getElementById("canMain");
  context = canMain.getContext("2d");
  canMask = document.getElementById("canEdge");
  maskContext = canMask.getContext("2d");
  $("#help div.help.tsh_firstPaint").remove();
  tool_magic_wand(context, W, H, mouseX, mouseY, 5, maskContext, !1);
  setPaintClick()
}
function handleClickMouse($mouseX$$, $mouseY$$) {
  canMain = document.getElementById("canMain");
  context = canMain.getContext("2d");
  canMask = document.getElementById("canEdge");
  maskContext = canMask.getContext("2d");
  $("#help div.help.tsh_firstPaint").remove();
  tool_magic_wand(context, W, H, $mouseX$$, $mouseY$$, 5, maskContext, !1)
}
function readImageUrl($e$$1$$) {
  var $fileToUploadName$$ = $e$$1$$.target.files[0].name, $roomPicker$$ = $(".RoomPicker").filter(":visible");
  $roomPicker$$.find(".pyp.pyp_select").hide();
  var $pypUploadOverlay$$ = $roomPicker$$.find(".pyp.pyp_upload");
  $pypUploadOverlay$$.show();
  $pypUploadOverlay$$.find(".progess_bar .photo_name").each(function() {
    $(this).text($fileToUploadName$$)
  });
  reader = new FileReader;
  reader.onload = function $reader$onload$($e$$0$$) {
    "image" != $e$$0$$.target.result.split("/")[0].split(":")[1] ? ($pypUploadOverlay$$.find(".upload_progress").hide(), $pypUploadOverlay$$.find(".upload_error_file-type").show(), $pypUploadOverlay$$.find("a.orange_button.upload_progress_choose_new_photo").on("click", function($e$$) {
      $e$$.preventDefault();
      $pypUploadOverlay$$.find(".upload_error_file").hide();
      $pypUploadOverlay$$.find(".upload_progress").show();
      $roomPicker$$.find(".pyp.pyp_upload").hide();
      $roomPicker$$.find(".pyp.pyp_select").show()
    }), $pypUploadOverlay$$.find(".cancel_upload a.button").on("click", function($e$$) {
      $e$$.preventDefault();
      $pypUploadOverlay$$.find(".upload_error_file").hide();
      $pypUploadOverlay$$.find(".upload_progress").show();
      hideModal()
    })) : (originalPhotoObj.src = $e$$0$$.target.result, originalPhotoObj.onload = function $originalPhotoObj$onload$() {
      var $uploadedPhotoHeight$$ = originalPhotoObj.height;
      200 > originalPhotoObj.width || 200 > $uploadedPhotoHeight$$ ? ($pypUploadOverlay$$.find(".upload_progress").hide(), $pypUploadOverlay$$.find(".upload_error_file-dimensions").show(), $pypUploadOverlay$$.find("a.orange_button.upload_progress_choose_new_photo").on("click", function($e$$) {
        $e$$.preventDefault();
        $pypUploadOverlay$$.find(".upload_error_file").hide();
        $pypUploadOverlay$$.find(".upload_progress").show();
        $roomPicker$$.find(".pyp.pyp_upload").hide();
        $roomPicker$$.find(".pyp.pyp_select").show()
      }), $pypUploadOverlay$$.find(".cancel_upload a.button").on("click", function($e$$) {
        $e$$.preventDefault();
        $pypUploadOverlay$$.find(".upload_error_file").hide();
        $pypUploadOverlay$$.find(".upload_progress").show();
        hideModal()
      })) : ($pypUploadOverlay$$.find(".upload_progress").hide(), $pypUploadOverlay$$.find(".upload_success").show(), $pypUploadOverlay$$.find("a.orange_button.upload_progress_continue").on("click", function() {
        var $pypPositionOverlay$$ = $roomPicker$$.find(".pyp.pyp_position"), $pypPositionOverlayCanvasContainer$$ = $pypPositionOverlay$$.find(".position_photo_container");
        $pypPositionOverlayCanvasContainer$$.html("");
        $pypPositionOverlayCanvasContainer$$.append('<canvas id="positionPhotoCanvas" name="positionPhotoCanvas" class="positionPhotoCanvas" width="392" height="282"></canvas>');
        $pypUploadOverlay$$.hide();
        $pypUploadOverlay$$.find(".upload_success").hide();
        $pypUploadOverlay$$.find(".upload_progress").show();
        $pypPositionOverlay$$.show();
        scalePhoto()
      }))
    })
  };
  reader.onprogress = function $reader$onprogress$($e$$) {
    $e$$.lengthComputable && ($e$$ = Math.round(100 * ($e$$.loaded / $e$$.total)), 100 > $e$$ && $pypUploadOverlay$$.find(".upload_progress .progess_bar .progess").css("width", $e$$ + "%"))
  };
  reader.readAsDataURL($e$$1$$.target.files[0])
}
function cancelPYPUpload($e$$) {
  $e$$.preventDefault();
  reader.abort()
}
function scalePhoto() {
  originalPhotoWidth = originalPhotoObj.width;
  originalPhotoHeight = originalPhotoObj.height;
  whRatio = originalPhotoObj.width / originalPhotoObj.height;
  1.39 > whRatio ? (resizedPhotoWidth = 706, resizedPhotoHeight = 706 / whRatio) : (resizedPhotoHeight = 508, resizedPhotoWidth = 508 * whRatio);
  originalResizeRatio = originalPhotoWidth / resizedPhotoWidth;
  $("body").append('<canvas id="scaleCanvas" width="' + resizedPhotoWidth + '" height="' + resizedPhotoHeight + '"></canvas>');
  var $scaleCanvas$$ = document.getElementById("scaleCanvas"), $scaleContext$$ = $scaleCanvas$$.getContext("2d");
  navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ? drawImageIOSFix($scaleContext$$, originalPhotoObj, 0, 0, originalPhotoWidth, originalPhotoHeight, 0, 0, resizedPhotoWidth, resizedPhotoHeight) : $scaleContext$$.drawImage(originalPhotoObj, 0, 0, originalPhotoWidth, originalPhotoHeight, 0, 0, resizedPhotoWidth, resizedPhotoHeight);
  originalPhotoObj = new Image;
  originalPhotoObj.onload = function $originalPhotoObj$onload$() {
    positionPhotoInit(!1);
    $("canvas#scaleCanvas").remove()
  };
  originalPhotoObj.src = $scaleCanvas$$.toDataURL()
}
function rotatePhoto() {
  var $canvas$$ = document.getElementById("positionPhotoCanvas");
  $canvas$$.width = $canvas$$.width;
  $canvas$$.getContext("2d").clearRect(0, 0, $canvas$$.width, $canvas$$.height);
  var $rotatedImageData_widthAndHeight$$ = 0, $getX$$ = 0;
  originalPhotoObj.width >= originalPhotoObj.height ? ($rotatedImageData_widthAndHeight$$ = originalPhotoObj.width, $getX$$ = originalPhotoObj.width - originalPhotoObj.height) : $rotatedImageData_widthAndHeight$$ = originalPhotoObj.height;
  $("body").append('<canvas id="rotateCanvas1" width="' + $rotatedImageData_widthAndHeight$$ + '" height="' + $rotatedImageData_widthAndHeight$$ + '"></canvas>');
  $("body").append('<canvas id="rotateCanvas2" width="' + originalPhotoObj.height + '" height="' + originalPhotoObj.width + '"></canvas>');
  var $rotateCanvas$$ = document.getElementById("rotateCanvas1"), $rotateContext$$ = $rotateCanvas$$.getContext("2d"), $canvas$$ = document.getElementById("rotateCanvas2"), $rotateContext2$$ = $canvas$$.getContext("2d");
  $rotateContext$$.translate($rotateCanvas$$.width / 2, $rotateCanvas$$.height / 2);
  $rotateContext$$.rotate(Math.PI / 2);
  $rotateContext$$.drawImage(originalPhotoObj, $rotatedImageData_widthAndHeight$$ / -2, $rotatedImageData_widthAndHeight$$ / -2);
  $rotatedImageData_widthAndHeight$$ = $rotateContext$$.getImageData($getX$$, 0, originalPhotoObj.height, originalPhotoObj.width);
  $rotateContext2$$.putImageData($rotatedImageData_widthAndHeight$$, 0, 0);
  originalPhotoObj = new Image;
  originalPhotoObj.onload = function $originalPhotoObj$onload$() {
    positionPhotoInit(!0)
  };
  originalPhotoObj.src = $canvas$$.toDataURL();
  $("canvas#rotateCanvas1").remove();
  $("canvas#rotateCanvas2").remove()
}
function positionPhotoInit($isRotate_pypPositionOverlay$$) {
  var $canvas$$ = document.getElementById("positionPhotoCanvas");
  $canvas$$.width = $canvas$$.width;
  var $context$$ = $canvas$$.getContext("2d");
  $isRotate_pypPositionOverlay$$ = $(".pyp.pyp_position").filter(":visible");
  $isRotate_pypPositionOverlay$$.find(".position_photo_arrow").each(function($index$$) {
    $(this).removeClass("position_photo_arrow_display")
  });
  originalPhotoWidth = originalPhotoObj.width;
  originalPhotoHeight = originalPhotoObj.height;
  whRatio = originalPhotoObj.width / originalPhotoObj.height;
  1.39 > whRatio ? (resizedPhotoWidth = 392, resizedPhotoHeight = 392 / whRatio, $isRotate_pypPositionOverlay$$.find(".position_photo_arrow.position_photo_arrow_up").addClass("position_photo_arrow_display"), $isRotate_pypPositionOverlay$$.find(".position_photo_arrow.position_photo_arrow_down").addClass("position_photo_arrow_display")) : (resizedPhotoHeight = 282, resizedPhotoWidth = 282 * whRatio, $isRotate_pypPositionOverlay$$.find(".position_photo_arrow.position_photo_arrow_left").addClass("position_photo_arrow_display"), 
  $isRotate_pypPositionOverlay$$.find(".position_photo_arrow.position_photo_arrow_right").addClass("position_photo_arrow_display"));
  originalResizeRatio = originalPhotoWidth / resizedPhotoWidth;
  actualPhotoPositionOffsetY = actualPhotoPositionOffsetX = 0;
  actualPhotoPositionOffsetXEnd = $canvas$$.width * originalResizeRatio;
  actualPhotoPositionOffsetYEnd = $canvas$$.height * originalResizeRatio;
  $context$$.clearRect(0, 0, $canvas$$.width, $canvas$$.height);
  actualPhotoPositionOffsetX = Math.floor(actualPhotoPositionOffsetX);
  actualPhotoPositionOffsetY = Math.floor(actualPhotoPositionOffsetY);
  actualPhotoPositionOffsetXEnd = Math.floor(actualPhotoPositionOffsetXEnd);
  actualPhotoPositionOffsetYEnd = Math.floor(actualPhotoPositionOffsetYEnd);
  $context$$.drawImage(originalPhotoObj, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, $canvas$$.width, $canvas$$.height);
  $($canvas$$).bind("mousedown touchstart", function($e$$) {
    positionPhotoStart($e$$, $canvas$$);
    $e$$.originalEvent.preventDefault()
  });
  $($canvas$$).bind("mousemove touchmove", function($e$$) {
    dragging && positionPhotoDragging($e$$, $canvas$$, $context$$, originalPhotoObj);
    $e$$.stopPropagation();
    return!1
  });
  $($canvas$$).bind("mouseup mouseout touchend", function($e$$) {
    positionPhotoEnd($e$$, $canvas$$)
  });
  var $roomPickerDiv$$ = $(".RoomPicker").filter(":visible");
  $roomPickerDiv$$.find(".pyp.pyp_position").find("a.orange_button.paint_your_place").unbind("click");
  $roomPickerDiv$$.find(".pyp.pyp_position").find("a.orange_button.paint_your_place").on("click", function($e$$) {
    handlePaintYourPlaceClick($canvas$$);
    googleAnalyticsTagEvents("Medium Value-Preview", "Paint Your Place", "Painted")
  });
  $roomPickerDiv$$.find(".pyp.pyp_position").find("a.save_and_return").unbind("click");
  $roomPickerDiv$$.find(".pyp.pyp_position").find("a.save_and_return").on("click", function($e$$) {
    $e$$.preventDefault();
    $roomPickerDiv$$.find(".pyp.pyp_position").hide();
    $roomPickerDiv$$.find(".pyp.pyp_select").show()
  })
}
function positionPhotoStart($e$$, $canvas$$) {
  var $canvasX_getX$$, $canvasY_getY$$;
  $e$$.originalEvent.touches ? ($canvasX_getX$$ = $e$$.originalEvent.touches[0].pageX, $canvasY_getY$$ = $e$$.originalEvent.touches[0].pageY) : $e$$.pageX ? ($canvasX_getX$$ = $e$$.pageX, $canvasY_getY$$ = $e$$.pageY) : $canvasY_getY$$ = $canvasX_getX$$ = 0;
  $canvasX_getX$$ -= $canvas$$.getBoundingClientRect().left;
  $canvasY_getY$$ -= $canvas$$.getBoundingClientRect().top;
  photoPositionStartX = photoPositionOffsetX + $canvasX_getX$$;
  photoPositionStartY = photoPositionOffsetY + $canvasY_getY$$;
  dragging = !0;
  $($canvas$$).addClass("dragging")
}
function positionPhotoByClick($direction$$) {
  var $mcanvas$$ = document.getElementById("positionPhotoCanvas"), $mcontext$$ = $mcanvas$$.getContext("2d"), $imageObj$$ = originalPhotoObj, $moveX_newPhotoPositionOffsetXEnd_stopX$$ = 0, $moveY_newPhotoPositionOffsetY$$ = 0;
  0 == $direction$$ ? $moveY_newPhotoPositionOffsetY$$ = -20 : 1 == $direction$$ ? $moveY_newPhotoPositionOffsetY$$ = 20 : 2 == $direction$$ ? $moveX_newPhotoPositionOffsetXEnd_stopX$$ = -20 : 3 == $direction$$ && ($moveX_newPhotoPositionOffsetXEnd_stopX$$ = 20);
  $direction$$ = photoPositionOffsetX + $moveX_newPhotoPositionOffsetXEnd_stopX$$;
  var $moveY_newPhotoPositionOffsetY$$ = photoPositionOffsetY + $moveY_newPhotoPositionOffsetY$$, $moveX_newPhotoPositionOffsetXEnd_stopX$$ = resizedPhotoWidth - $mcanvas$$.width, $newPhotoPositionOffsetYEnd_stopY$$ = resizedPhotoHeight - $mcanvas$$.height;
  1.39 > whRatio ? $moveX_newPhotoPositionOffsetXEnd_stopX$$ = 0 : $newPhotoPositionOffsetYEnd_stopY$$ = 0;
  0 > $direction$$ && ($direction$$ = 0);
  0 > $moveY_newPhotoPositionOffsetY$$ && ($moveY_newPhotoPositionOffsetY$$ = 0);
  $direction$$ > $moveX_newPhotoPositionOffsetXEnd_stopX$$ && ($direction$$ = $moveX_newPhotoPositionOffsetXEnd_stopX$$);
  $moveY_newPhotoPositionOffsetY$$ > $newPhotoPositionOffsetYEnd_stopY$$ && ($moveY_newPhotoPositionOffsetY$$ = $newPhotoPositionOffsetYEnd_stopY$$);
  photoPositionOffsetX = $direction$$;
  photoPositionOffsetY = $moveY_newPhotoPositionOffsetY$$;
  $moveX_newPhotoPositionOffsetXEnd_stopX$$ = $mcanvas$$.width;
  $newPhotoPositionOffsetYEnd_stopY$$ = $mcanvas$$.height;
  actualPhotoPositionOffsetX = Math.floor($direction$$ * originalResizeRatio);
  actualPhotoPositionOffsetY = Math.floor($moveY_newPhotoPositionOffsetY$$ * originalResizeRatio);
  actualPhotoPositionOffsetXEnd = Math.floor($moveX_newPhotoPositionOffsetXEnd_stopX$$ * originalResizeRatio);
  actualPhotoPositionOffsetYEnd = Math.floor($newPhotoPositionOffsetYEnd_stopY$$ * originalResizeRatio);
  $mcontext$$.clearRect(0, 0, $mcanvas$$.width, $mcanvas$$.height);
  navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ? drawImageIOSFix($mcontext$$, $imageObj$$, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, $mcanvas$$.width, $mcanvas$$.height) : $mcontext$$.drawImage($imageObj$$, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, $mcanvas$$.width, $mcanvas$$.height)
}
function positionPhotoDragging($canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$, $mcanvas$$, $mcontext$$, $imageObj$$) {
  var $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$;
  $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$.originalEvent.touches ? ($canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ = $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$.originalEvent.touches[0].pageX, $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ = $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$.originalEvent.touches[0].pageY) : $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$.pageX ? ($canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ = $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$.pageX, 
  $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ = $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$.pageY) : $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ = $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ = 0;
  $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ -= $mcanvas$$.getBoundingClientRect().left;
  $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ -= $mcanvas$$.getBoundingClientRect().top;
  $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ = photoPositionStartX - $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$;
  $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ = photoPositionStartY - $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$;
  var $newPhotoPositionOffsetXEnd$$1_stopX$$ = resizedPhotoWidth - $mcanvas$$.width, $newPhotoPositionOffsetYEnd$$1_stopY$$ = resizedPhotoHeight - $mcanvas$$.height;
  1.39 > whRatio ? $newPhotoPositionOffsetXEnd$$1_stopX$$ = 0 : $newPhotoPositionOffsetYEnd$$1_stopY$$ = 0;
  0 > $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ && ($canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ = 0);
  0 > $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ && ($canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ = 0);
  $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ > $newPhotoPositionOffsetXEnd$$1_stopX$$ && ($canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ = $newPhotoPositionOffsetXEnd$$1_stopX$$);
  $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ > $newPhotoPositionOffsetYEnd$$1_stopY$$ && ($canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ = $newPhotoPositionOffsetYEnd$$1_stopY$$);
  photoPositionOffsetX = $canvasX$$1_getX$$2_newPhotoPositionOffsetX$$;
  photoPositionOffsetY = $canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$;
  $newPhotoPositionOffsetXEnd$$1_stopX$$ = $mcanvas$$.width;
  $newPhotoPositionOffsetYEnd$$1_stopY$$ = $mcanvas$$.height;
  actualPhotoPositionOffsetX = Math.floor($canvasX$$1_getX$$2_newPhotoPositionOffsetX$$ * originalResizeRatio);
  actualPhotoPositionOffsetY = Math.floor($canvasY$$1_e$$29_getY$$2_newPhotoPositionOffsetY$$ * originalResizeRatio);
  actualPhotoPositionOffsetXEnd = Math.floor($newPhotoPositionOffsetXEnd$$1_stopX$$ * originalResizeRatio);
  actualPhotoPositionOffsetYEnd = Math.floor($newPhotoPositionOffsetYEnd$$1_stopY$$ * originalResizeRatio);
  $mcontext$$.clearRect(0, 0, $mcanvas$$.width, $mcanvas$$.height);
  navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ? drawImageIOSFix($mcontext$$, $imageObj$$, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, $mcanvas$$.width, $mcanvas$$.height) : $mcontext$$.drawImage($imageObj$$, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, $mcanvas$$.width, $mcanvas$$.height)
}
function positionPhotoEnd($e$$, $canvas$$) {
  dragging = !1;
  $($canvas$$).removeClass("dragging")
}
function sendUserImageToProcessing($url$$) {
  originalPhotoObj.src = $url$$;
  originalPhotoObj.onload = function $originalPhotoObj$onload$() {
    var $pypSelectOverlay_roomPicker$$ = $(".RoomPicker").filter(":visible"), $pypPositionOverlay$$ = $pypSelectOverlay_roomPicker$$.find(".pyp.pyp_position"), $pypSelectOverlay_roomPicker$$ = $pypSelectOverlay_roomPicker$$.find(".pyp.pyp_select"), $pypPositionOverlayCanvasContainer$$ = $pypPositionOverlay$$.find(".position_photo_container");
    $pypPositionOverlayCanvasContainer$$.html("");
    $pypPositionOverlayCanvasContainer$$.append('<canvas id="positionPhotoCanvas" name="positionPhotoCanvas" class="positionPhotoCanvas" width="392" height="282"></canvas>');
    $pypSelectOverlay_roomPicker$$.hide();
    $pypPositionOverlay$$.show();
    positionPhotoInit(!1)
  }
}
var luminMap, cLuminDataCanvas = document.createElement("canvas"), cLuminData = null;
function handlePaintYourPlaceClick($canvas$$) {
  processingPercent = 1;
  doImageProcessing().progress(function($processingPixels_prog$$) {
    $processingPixels_prog$$ = Math.floor(3.5 * processingPercent);
    $("div.image_processing_bar_progress").css("width", $processingPixels_prog$$ + "px");
    $("div.progess_percent").html("<h4>" + Math.floor(processingPercent) + "%</h4>")
  })
}
function doImageProcessing() {
  var $dfd$$ = $.Deferred();
  processingPercent = 0;
  $("div.image_processing_bar_progress").css("width", "0px");
  $("div.progess_percent").html("<h4>0%</h4>");
  $("div#pypCurtain").show();
  $("div#overlay_processing_image").show();
  setTimeout(function() {
    setCanvasVariables();
    drawingContext.clearRect(0, 0, drawing.width, drawing.height);
    navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ? drawImageIOSFix(preDrawingContext, originalPhotoObj, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, drawing.width, drawing.height) : preDrawingContext.drawImage(originalPhotoObj, actualPhotoPositionOffsetX, actualPhotoPositionOffsetY, actualPhotoPositionOffsetXEnd, actualPhotoPositionOffsetYEnd, 0, 0, drawing.width, 
    drawing.height);
    var $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = preDrawingContext.getImageData(0, 0, drawingCanvasWidth, drawingCanvasHeight), $grayscaleImage_smoothedImage$$;
    $grayscaleImage_smoothedImage$$ = doBilateralSmoothing ? bilateral_smoothing($canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$, 3, 3, 2, 15, 2) : $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$;
    drawingContext.putImageData($grayscaleImage_smoothedImage$$, 0, 0);
    context.putImageData($grayscaleImage_smoothedImage$$, 0, 0);
    var $smoothCanvas$$ = document.getElementById("smooth").getContext("2d"), $grayscaleCanvas_sobelImage$$ = document.getElementById("grayscale").getContext("2d"), $cannyImage_fromColorLCH_sobelCanvas$$ = document.getElementById("sobel").getContext("2d"), $cannyCanvas$$1_dilatatedImage_i$$ = document.getElementById("canny").getContext("2d"), $dilatationCanvas_erosionImage_iy$$ = document.getElementById("dilatation").getContext("2d"), $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = document.getElementById("erosion").getContext("2d");
    $smoothCanvas$$.putImageData($grayscaleImage_smoothedImage$$, 0, 0);
    $grayscaleImage_smoothedImage$$ = image_desaturate($grayscaleImage_smoothedImage$$);
    $grayscaleCanvas_sobelImage$$.putImageData($grayscaleImage_smoothedImage$$, 0, 0);
    $grayscaleCanvas_sobelImage$$ = image_sobel($grayscaleImage_smoothedImage$$);
    $cannyImage_fromColorLCH_sobelCanvas$$.putImageData($grayscaleCanvas_sobelImage$$, 0, 0);
    $cannyImage_fromColorLCH_sobelCanvas$$ = image_canny($grayscaleImage_smoothedImage$$, 0, 1, 0.5);
    $cannyCanvas$$1_dilatatedImage_i$$.putImageData($cannyImage_fromColorLCH_sobelCanvas$$, 0, 0);
    $cannyCanvas$$1_dilatatedImage_i$$ = dilatation($grayscaleCanvas_sobelImage$$);
    $dilatationCanvas_erosionImage_iy$$.putImageData($cannyCanvas$$1_dilatatedImage_i$$, 0, 0);
    $dilatationCanvas_erosionImage_iy$$ = erosion($cannyCanvas$$1_dilatatedImage_i$$);
    $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$.putImageData($dilatationCanvas_erosionImage_iy$$, 0, 0);
    context2.putImageData($dilatationCanvas_erosionImage_iy$$, 0, 0);
    $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = drawing.toDataURL("image/png");
    $dilatationCanvas_erosionImage_iy$$ = canEdge.toDataURL("image/png");
    imgMain.src = $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$;
    imgEdge.src = $dilatationCanvas_erosionImage_iy$$;
    image = new Image;
    image.src = $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$;
    image2 = new Image;
    image2.src = $dilatationCanvas_erosionImage_iy$$;
    $("div.canvas").hide();
    $("div.pypCanvas").show();
    $("div.editButtons.editButtonsViz").hide();
    $("div.editButtons.editButtonsPYP").show();
    $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = document.getElementById("maskingTop");
    canvasMaskingTopContext = $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$.getContext("2d");
    canvasMaskingTopContext.clearRect(0, 0, $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$.width, $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$.height);
    maskingLines = [];
    $(".show_hide .show_hide_wrapper").text("Hide Masking");
    maskingIsShowing = !0;
    luminMap = context2.createImageData(706, 508);
    contextData = context.getImageData(0, 0, 706, 508);
    for($canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = 0;$canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ < drawingCanvasWidth;$canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$++) {
      for($dilatationCanvas_erosionImage_iy$$ = 0;$dilatationCanvas_erosionImage_iy$$ < drawingCanvasHeight;$dilatationCanvas_erosionImage_iy$$++) {
        $cannyCanvas$$1_dilatatedImage_i$$ = $dilatationCanvas_erosionImage_iy$$ * 4 * drawingCanvasWidth + 4 * $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$, $cannyImage_fromColorLCH_sobelCanvas$$ = ColorUtilities.convertRGBToLAB(contextData.data[$cannyCanvas$$1_dilatatedImage_i$$], contextData.data[$cannyCanvas$$1_dilatatedImage_i$$ + 1], contextData.data[$cannyCanvas$$1_dilatatedImage_i$$ + 2]), luminMap.data[$cannyCanvas$$1_dilatatedImage_i$$] = $cannyImage_fromColorLCH_sobelCanvas$$[0]
      }
    }
    cLuminDataCanvas.width = W;
    cLuminDataCanvas.height = H;
    cLuminData = cLuminDataCanvas.getContext("2d").createImageData(706, 508).data;
    document.getElementById("canColor").getContext("2d").clearRect(0, 0, 706, 508);
    processingPercent = 5;
    $dfd$$.notify(processingPercent);
    $dilatationCanvas_erosionImage_iy$$ = $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = $dilatationCanvas_erosionImage_iy$$ = $cannyCanvas$$1_dilatatedImage_i$$ = $cannyImage_fromColorLCH_sobelCanvas$$ = $grayscaleCanvas_sobelImage$$ = $grayscaleImage_smoothedImage$$ = $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = $dilatationCanvas_erosionImage_iy$$ = $cannyCanvas$$1_dilatatedImage_i$$ = $cannyImage_fromColorLCH_sobelCanvas$$ = $grayscaleCanvas_sobelImage$$ = $smoothCanvas$$ = 
    $grayscaleImage_smoothedImage$$ = $canvasMaskingTop_drawingCanvasURL_erosionCanvas_ix$$ = null;
    foundColors = [];
    foundLumins = [];
    superLuminMap = new Uint8ClampedArray(context2.createImageData(706, 508).data);
    paintEntireImage().progress(function($processingPixels$$1_prog$$) {
      $processingPixels$$1_prog$$ = Math.floor(3.5 * processingPercent);
      $("div.image_processing_bar_progress").css("width", $processingPixels$$1_prog$$ + "px");
      $("div.progess_percent").html("<h4>" + Math.floor(processingPercent) + "%</h4>")
    })
  }, 1);
  return $dfd$$.promise()
}
function setCanvasVariables() {
  drawing = document.getElementById("drawing");
  drawingContext = drawing.getContext("2d");
  canMain = document.getElementById("canMain");
  context = canMain.getContext("2d");
  canEdge = document.getElementById("canEdge");
  context2 = canEdge.getContext("2d");
  mainCanvas = $(".RoomVisualizer .canvas .PaintRoom canvas")[0];
  mainContext = mainCanvas.getContext("2d");
  imgMain = document.getElementsByClassName("imgMain")[0];
  imgEdge = document.getElementsByClassName("imgEdge")[0];
  preDrawingCanvas = document.getElementById("predrawing");
  preDrawingContext = preDrawingCanvas.getContext("2d");
  colorCanvas = document.getElementById("canColor");
  colorContext = colorCanvas.getContext("2d");
  newImageCanvas = document.getElementById("newImage");
  newImageCanvasContext = newImageCanvas.getContext("2d");
  newColorCanvas = document.getElementById("colorImage");
  newColorCanvasContext = newColorCanvas.getContext("2d");
  cannyCanvas = document.getElementById("canny");
  cannyCanvasContext = cannyCanvas.getContext("2d");
  segmentCanvas = document.getElementById("segmentCanvas");
  segmentCanvasContext = segmentCanvas.getContext("2d");
  thumbnailCanvas = document.getElementById("thumbnail");
  thumbnailCanvasContext = thumbnailCanvas.getContext("2d");
  maskingLines = ""
}
function get_pixel_from_image($theImage$$, $x$$, $y$$, $channel$$) {
  return 0 > $x$$ || $x$$ >= drawingCanvasWidth || 0 > $y$$ || $y$$ >= drawingCanvasHeight ? 0 : $theImage$$.data[$y$$ * 4 * drawingCanvasWidth + 4 * $x$$ + $channel$$] / 255
}
function get_pixel_from_image_int($theImage$$, $x$$, $y$$, $channel$$) {
  return 0 > $x$$ || $x$$ >= drawingCanvasWidth || 0 > $y$$ || $y$$ >= drawingCanvasHeight ? 0 : $theImage$$.data[$y$$ * 4 * drawingCanvasWidth + 4 * $x$$ + $channel$$]
}
function calculate_i_from_coordinates($x$$, $y$$) {
  return $y$$ * 4 * drawingCanvasWidth + 4 * $x$$
}
function image_desaturate($imgData$$) {
  for(var $i$$ = 0, $y$$ = 0;$y$$ < drawingCanvasHeight;$y$$++) {
    for(var $x$$ = 0;$x$$ < drawingCanvasWidth;$x$$++) {
      var $out$$ = 0.5 * $imgData$$.data[$i$$] + 0.419 * $imgData$$.data[$i$$ + 1] + 0.081 * $imgData$$.data[$i$$ + 2];
      $imgData$$.data[$i$$] = $out$$;
      $imgData$$.data[$i$$ + 1] = $out$$;
      $imgData$$.data[$i$$ + 2] = $out$$;
      $i$$ += 4
    }
  }
  return $imgData$$
}
function image_sobel($factor$$) {
  for(var $dstData$$ = document.getElementById("smooth").getContext("2d").createImageData(drawingCanvasWidth, drawingCanvasHeight), $g$$, $gy$$, $max$$ = 0, $i$$ = 0, $y$$ = 0;$y$$ < drawingCanvasHeight;$y$$++) {
    for(var $x$$ = 0;$x$$ < drawingCanvasWidth;$x$$++) {
      $g$$ = 1 * get_pixel_from_image_int($factor$$, $x$$ + 1, $y$$ - 1, 0) - 1 * get_pixel_from_image_int($factor$$, $x$$ - 1, $y$$ - 1, 0) + 2 * get_pixel_from_image_int($factor$$, $x$$ + 1, $y$$, 0) - 2 * get_pixel_from_image_int($factor$$, $x$$ - 1, $y$$, 0) + 1 * get_pixel_from_image_int($factor$$, $x$$ + 1, $y$$ + 1, 0) - 1 * get_pixel_from_image_int($factor$$, $x$$ - 1, $y$$ + 1, 0), $gy$$ = 1 * get_pixel_from_image_int($factor$$, $x$$ - 1, $y$$ - 1, 0) - 1 * get_pixel_from_image_int($factor$$, 
      $x$$ - 1, $y$$ + 1, 0) + 2 * get_pixel_from_image_int($factor$$, $x$$, $y$$ - 1, 0) - 2 * get_pixel_from_image_int($factor$$, $x$$, $y$$ + 1, 0) + 1 * get_pixel_from_image_int($factor$$, $x$$ + 1, $y$$ - 1, 0) - 1 * get_pixel_from_image_int($factor$$, $x$$ + 1, $y$$ + 1, 0), $g$$ = Math.min(255, Math.abs($g$$) + Math.abs($gy$$)), $g$$ > $max$$ && ($max$$ = $g$$), $dstData$$.data[$i$$] = $g$$, $dstData$$.data[$i$$ + 1] = $g$$, $dstData$$.data[$i$$ + 2] = $g$$, $dstData$$.data[$i$$ + 3] = 255, 
      $i$$ += 4
    }
  }
  if(255 != $max$$) {
    $factor$$ = 255 / $max$$;
    for($y$$ = $i$$ = 0;$y$$ < drawingCanvasHeight;$y$$++) {
      for($x$$ = 0;$x$$ < drawingCanvasWidth;$x$$++) {
        $dstData$$.data[$i$$] *= $factor$$, $dstData$$.data[$i$$ + 1] *= $factor$$, $dstData$$.data[$i$$ + 2] *= $factor$$, $i$$ += 4
      }
    }
  }
  return $dstData$$
}
function dilatation($recievedImageDataObj$$) {
  for(var $tempDilatationDataObj$$ = document.getElementById("drawing").getContext("2d").createImageData(drawingCanvasWidth, drawingCanvasHeight), $se$$ = Array(3), $x$$ = 0;$x$$ < $se$$.length;$x$$++) {
    $se$$[$x$$] = Array(3)
  }
  for($x$$ = 0;$x$$ < $se$$.length;$x$$++) {
    for(var $superI_z$$ = 0;$superI_z$$ < $se$$.length;$superI_z$$++) {
      $se$$[$x$$][$superI_z$$] = 1
    }
  }
  for(var $superI_z$$ = 0, $p3_superX$$, $jr_p1_v$$, $p2_t$$, $y$$ = 0;$y$$ < drawingCanvasHeight;$y$$++) {
    for(var $maxR$$, $maxG$$, $maxB$$, $foundSomething$$ = !1, $ir$$, $i$$, $j$$, $x$$ = 0;$x$$ < drawingCanvasWidth;$x$$++) {
      $superI_z$$ = $y$$ * 4 * drawingCanvasWidth + 4 * $x$$;
      $maxB$$ = $maxG$$ = $maxR$$ = 0;
      $foundSomething$$ = !1;
      for($i$$ = 0;3 > $i$$;$i$$++) {
        if($ir$$ = $i$$ - 1, $p2_t$$ = $y$$ + $ir$$, !(0 > $p2_t$$)) {
          if($p2_t$$ >= drawingCanvasHeight) {
            break
          }
          for($j$$ = 0;3 > $j$$;$j$$++) {
            $jr_p1_v$$ = $j$$ - 1, $p2_t$$ = $x$$ + $jr_p1_v$$, !(0 > $p2_t$$) && ($p2_t$$ < drawingCanvasWidth && 1 == $se$$[$i$$][$j$$]) && ($foundSomething$$ = !0, $p3_superX$$ = $superI_z$$ + 4 * $ir$$ * drawingCanvasWidth + 4 * $jr_p1_v$$, $jr_p1_v$$ = $recievedImageDataObj$$.data[$p3_superX$$], $p2_t$$ = $recievedImageDataObj$$.data[$p3_superX$$ + 1], $p3_superX$$ = $recievedImageDataObj$$.data[$p3_superX$$ + 2], $jr_p1_v$$ > $maxR$$ && ($maxR$$ = $jr_p1_v$$), $jr_p1_v$$ = $p2_t$$, $jr_p1_v$$ > 
            $maxG$$ && ($maxG$$ = $jr_p1_v$$), $jr_p1_v$$ = $p3_superX$$, $jr_p1_v$$ > $maxB$$ && ($maxB$$ = $jr_p1_v$$))
          }
        }
      }
      $foundSomething$$ ? ($tempDilatationDataObj$$.data[$superI_z$$] = $maxR$$, $tempDilatationDataObj$$.data[$superI_z$$ + 1] = $maxG$$, $tempDilatationDataObj$$.data[$superI_z$$ + 2] = $maxB$$) : ($tempDilatationDataObj$$.data[$superI_z$$] = $recievedImageDataObj$$.data[$superI_z$$], $tempDilatationDataObj$$.data[$superI_z$$ + 1] = $recievedImageDataObj$$.data[$superI_z$$ + 1], $tempDilatationDataObj$$.data[$superI_z$$ + 2] = $recievedImageDataObj$$.data[$superI_z$$ + 2]);
      $tempDilatationDataObj$$.data[$superI_z$$ + 3] = 255;
      0 == $tempDilatationDataObj$$.data[$superI_z$$] && (0 == $tempDilatationDataObj$$.data[$superI_z$$ + 1] && 0 == $tempDilatationDataObj$$.data[$superI_z$$ + 2]) && ($tempDilatationDataObj$$.data[$superI_z$$ + 3] = 0)
    }
  }
  return $tempDilatationDataObj$$
}
function erosion($recievedImageDataObj$$) {
  for(var $tempErosionDataObj$$ = document.getElementById("drawing").getContext("2d").createImageData(drawingCanvasWidth, drawingCanvasHeight), $se$$ = Array(3), $x$$ = 0;$x$$ < $se$$.length;$x$$++) {
    $se$$[$x$$] = Array(3)
  }
  for($x$$ = 0;$x$$ < $se$$.length;$x$$++) {
    for(var $superI$$1_z$$ = 0;$superI$$1_z$$ < $se$$.length;$superI$$1_z$$++) {
      $se$$[$x$$][$superI$$1_z$$] = 1
    }
  }
  for(var $superI$$1_z$$ = 0, $p3$$1_superX$$, $jr$$1_p1$$1_v$$, $p2$$1_t$$, $y$$ = 0;$y$$ < drawingCanvasHeight;$y$$++) {
    for(var $minR$$, $minG$$, $minB$$, $foundSomething$$ = !1, $ir$$, $i$$, $j$$, $x$$ = 0;$x$$ < drawingCanvasWidth;$x$$++) {
      $superI$$1_z$$ = $y$$ * 4 * drawingCanvasWidth + 4 * $x$$;
      $minB$$ = $minG$$ = $minR$$ = 255;
      $foundSomething$$ = !1;
      for($i$$ = 0;3 > $i$$;$i$$++) {
        if($ir$$ = $i$$ - 1, $p2$$1_t$$ = $y$$ + $ir$$, !(0 > $p2$$1_t$$)) {
          if($p2$$1_t$$ >= drawingCanvasHeight) {
            break
          }
          for($j$$ = 0;3 > $j$$;$j$$++) {
            $jr$$1_p1$$1_v$$ = $j$$ - 1, $p2$$1_t$$ = $x$$ + $jr$$1_p1$$1_v$$, !(0 > $p2$$1_t$$) && ($p2$$1_t$$ < drawingCanvasWidth && 1 == $se$$[$i$$][$j$$]) && ($foundSomething$$ = !0, $p3$$1_superX$$ = $superI$$1_z$$ + 4 * $ir$$ * drawingCanvasWidth + 4 * $jr$$1_p1$$1_v$$, $jr$$1_p1$$1_v$$ = $recievedImageDataObj$$.data[$p3$$1_superX$$], $p2$$1_t$$ = $recievedImageDataObj$$.data[$p3$$1_superX$$ + 1], $p3$$1_superX$$ = $recievedImageDataObj$$.data[$p3$$1_superX$$ + 2], $jr$$1_p1$$1_v$$ < $minR$$ && 
            ($minR$$ = $jr$$1_p1$$1_v$$), $jr$$1_p1$$1_v$$ = $p2$$1_t$$, $jr$$1_p1$$1_v$$ < $minG$$ && ($minG$$ = $jr$$1_p1$$1_v$$), $jr$$1_p1$$1_v$$ = $p3$$1_superX$$, $jr$$1_p1$$1_v$$ < $minB$$ && ($minB$$ = $jr$$1_p1$$1_v$$))
          }
        }
      }
      $foundSomething$$ ? ($tempErosionDataObj$$.data[$superI$$1_z$$] = $minR$$, $tempErosionDataObj$$.data[$superI$$1_z$$ + 1] = $minG$$, $tempErosionDataObj$$.data[$superI$$1_z$$ + 2] = $minB$$) : ($tempErosionDataObj$$.data[$superI$$1_z$$] = $recievedImageDataObj$$.data[$superI$$1_z$$], $tempErosionDataObj$$.data[$superI$$1_z$$ + 1] = $recievedImageDataObj$$.data[$superI$$1_z$$ + 1], $tempErosionDataObj$$.data[$superI$$1_z$$ + 2] = $recievedImageDataObj$$.data[$superI$$1_z$$ + 2]);
      $tempErosionDataObj$$.data[$superI$$1_z$$ + 3] = 255
    }
  }
  return $tempErosionDataObj$$
}
function bilateral_smoothing($srcData$$, $kernelRadius$$, $colorMatrix_spatialFactor$$, $d$$3_e$$, $colorFactor_tx$$, $colorPower_ty$$) {
  var $dstData$$ = document.getElementById("drawing").getContext("2d").createImageData(706, 508), $kernelSize$$ = 2 * $kernelRadius$$, $spatialMatrix$$;
  $spatialMatrix$$ = Array($kernelSize$$);
  for(var $a$$8_b$$16_f$$ = 0;$a$$8_b$$16_f$$ < $spatialMatrix$$.length;$a$$8_b$$16_f$$++) {
    $spatialMatrix$$[$a$$8_b$$16_f$$] = Array($kernelSize$$)
  }
  for($a$$8_b$$16_f$$ = 0;$a$$8_b$$16_f$$ < $kernelSize$$;$a$$8_b$$16_f$$++) {
    for(var $superY_tb_tb2$$ = $a$$8_b$$16_f$$ - $kernelRadius$$, $superY_tb_tb2$$ = $superY_tb_tb2$$ * $superY_tb_tb2$$, $c$$ = 0;$c$$ < $kernelSize$$;$c$$++) {
      var $rFromImageAtI_tc$$ = $c$$ - $kernelRadius$$;
      $spatialMatrix$$[$a$$8_b$$16_f$$][$c$$] = Math.exp(-0.5 * Math.pow(Math.sqrt(($superY_tb_tb2$$ + $rFromImageAtI_tc$$ * $rFromImageAtI_tc$$) / $colorMatrix_spatialFactor$$), $d$$3_e$$))
    }
  }
  $colorMatrix_spatialFactor$$ = Array(256);
  for($d$$3_e$$ = 0;$d$$3_e$$ < $colorMatrix_spatialFactor$$.length;$d$$3_e$$++) {
    $colorMatrix_spatialFactor$$[$d$$3_e$$] = Array(256)
  }
  for($d$$3_e$$ = 0;256 > $d$$3_e$$;$d$$3_e$$++) {
    for($a$$8_b$$16_f$$ = 0;256 > $a$$8_b$$16_f$$;$a$$8_b$$16_f$$++) {
      $colorMatrix_spatialFactor$$[$d$$3_e$$][$a$$8_b$$16_f$$] = Math.exp(-0.5 * Math.pow(Math.abs($d$$3_e$$ - $a$$8_b$$16_f$$) / $colorFactor_tx$$, $colorPower_ty$$))
    }
  }
  for(var $rFromImageAtKernel_superX$$, $c$$ = 0, $gFromImageAtKernel$$, $gFromImageAtI$$, $bFromImageAtKernel_imageSuperI$$, $bFromImageAtI$$, $sCoefR$$, $sCoefG$$, $sCoefB$$, $sMembR$$, $sMembG$$, $sMembB$$, $coefR$$, $coefG$$, $coefB$$, $y$$ = 0;508 > $y$$;$y$$++) {
    for(var $x$$ = 0;706 > $x$$;$x$$++) {
      $sMembB$$ = $sMembG$$ = $sMembR$$ = $sCoefB$$ = $sCoefG$$ = $sCoefR$$ = 0;
      $rFromImageAtI_tc$$ = $srcData$$.data[$c$$];
      $gFromImageAtI$$ = $srcData$$.data[$c$$ + 1];
      $bFromImageAtI$$ = $srcData$$.data[$c$$ + 2];
      $colorPower_ty$$ = $kernelSize$$;
      for($a$$8_b$$16_f$$ = $kernelRadius$$;0 != $colorPower_ty$$;) {
        if($colorPower_ty$$--, $a$$8_b$$16_f$$--, $superY_tb_tb2$$ = $y$$ + $a$$8_b$$16_f$$, 0 <= $superY_tb_tb2$$ && 508 > $superY_tb_tb2$$) {
          $colorFactor_tx$$ = $kernelSize$$;
          for($d$$3_e$$ = $kernelRadius$$;0 != $colorFactor_tx$$;) {
            $colorFactor_tx$$--, $d$$3_e$$--, $rFromImageAtKernel_superX$$ = $x$$ + $d$$3_e$$, 0 <= $rFromImageAtKernel_superX$$ && 706 > $rFromImageAtKernel_superX$$ && ($bFromImageAtKernel_imageSuperI$$ = 4 * (706 * $superY_tb_tb2$$ + $rFromImageAtKernel_superX$$), $rFromImageAtKernel_superX$$ = $srcData$$.data[$bFromImageAtKernel_imageSuperI$$ + 0], $gFromImageAtKernel$$ = $srcData$$.data[$bFromImageAtKernel_imageSuperI$$ + 1], $bFromImageAtKernel_imageSuperI$$ = $srcData$$.data[$bFromImageAtKernel_imageSuperI$$ + 
            2], $coefR$$ = $spatialMatrix$$[$colorFactor_tx$$][$colorPower_ty$$] * $colorMatrix_spatialFactor$$[$rFromImageAtKernel_superX$$][$rFromImageAtI_tc$$], $coefG$$ = $spatialMatrix$$[$colorFactor_tx$$][$colorPower_ty$$] * $colorMatrix_spatialFactor$$[$gFromImageAtKernel$$][$gFromImageAtI$$], $coefB$$ = $spatialMatrix$$[$colorFactor_tx$$][$colorPower_ty$$] * $colorMatrix_spatialFactor$$[$bFromImageAtKernel_imageSuperI$$][$bFromImageAtI$$], $sCoefR$$ += $coefR$$, $sCoefG$$ += $coefG$$, $sCoefB$$ += 
            $coefB$$, $sMembR$$ += $coefR$$ * $rFromImageAtKernel_superX$$, $sMembG$$ += $coefG$$ * $gFromImageAtKernel$$, $sMembB$$ += $coefB$$ * $bFromImageAtKernel_imageSuperI$$)
          }
        }
      }
      $dstData$$.data[$c$$] = $sMembR$$ / $sCoefR$$;
      $dstData$$.data[$c$$ + 1] = $sMembG$$ / $sCoefG$$;
      $dstData$$.data[$c$$ + 2] = $sMembB$$ / $sCoefB$$;
      $dstData$$.data[$c$$ + 3] = 255;
      $c$$ += 4
    }
  }
  return $dstData$$
}
function gaussian_blur($imgData$$, $sigma$$) {
  var $kernel$$, $kernelSize$$, $kernelSum_ss$$;
  $kernelSum_ss$$ = $sigma$$ * $sigma$$;
  var $factor$$2_r$$ = 2 * Math.PI * $kernelSum_ss$$;
  $kernel$$ = [];
  $kernel$$.push([]);
  for(var $i$$ = 0, $j$$, $i$$ = 0;7 > $i$$;$i$$++) {
    var $g$$ = Math.exp(-($i$$ * $i$$) / (2 * $kernelSum_ss$$)) / $factor$$2_r$$;
    if(0.001 > $g$$) {
      break
    }
    $kernel$$[0].push($g$$)
  }
  $kernelSize$$ = $i$$;
  for($j$$ = 1;$j$$ < $kernelSize$$;++$j$$) {
    $kernel$$.push([]);
    for($i$$ = 0;$i$$ < $kernelSize$$;++$i$$) {
      $g$$ = Math.exp(-($i$$ * $i$$ + $j$$ * $j$$) / (2 * $kernelSum_ss$$)) / $factor$$2_r$$, $kernel$$[$j$$].push($g$$)
    }
  }
  $kernelSum_ss$$ = 0;
  for($j$$ = 1 - $kernelSize$$;$j$$ < $kernelSize$$;++$j$$) {
    for($i$$ = 1 - $kernelSize$$;$i$$ < $kernelSize$$;++$i$$) {
      $kernelSum_ss$$ += $kernel$$[Math.abs($j$$)][Math.abs($i$$)]
    }
  }
  for(var $b$$, $a$$, $superI$$, $y$$ = 0;508 > $y$$;++$y$$) {
    for(var $x$$ = 0;706 > $x$$;++$x$$) {
      $a$$ = $b$$ = $g$$ = $factor$$2_r$$ = 0;
      for($j$$ = 1 - $kernelSize$$;$j$$ < $kernelSize$$;++$j$$) {
        if(!(0 > $y$$ + $j$$ || 508 <= $y$$ + $j$$)) {
          for($i$$ = 1 - $kernelSize$$;$i$$ < $kernelSize$$;++$i$$) {
            0 > $x$$ + $i$$ || 706 <= $x$$ + $i$$ || ($superI$$ = 4 * (706 * ($y$$ + $j$$) + ($x$$ + $i$$)), $factor$$2_r$$ += $imgData$$.data[$superI$$ + 0] * $kernel$$[Math.abs($j$$)][Math.abs($i$$)], $g$$ += $imgData$$.data[$superI$$ + 1] * $kernel$$[Math.abs($j$$)][Math.abs($i$$)], $b$$ += $imgData$$.data[$superI$$ + 2] * $kernel$$[Math.abs($j$$)][Math.abs($i$$)], $a$$ += $imgData$$.data[$superI$$ + 3] * $kernel$$[Math.abs($j$$)][Math.abs($i$$)])
          }
        }
      }
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 0] = $factor$$2_r$$ / $kernelSum_ss$$;
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 1] = $g$$ / $kernelSum_ss$$;
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 2] = $b$$ / $kernelSum_ss$$;
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 3] = $a$$ / $kernelSum_ss$$
    }
  }
  return $imgData$$
}
function gaussian_blur_with_layer($imgData$$, $kernel$$1_sigma$$, $layerData$$) {
  var $kernelSize$$, $kernelSum$$1_ss$$;
  $kernelSum$$1_ss$$ = $kernel$$1_sigma$$ * $kernel$$1_sigma$$;
  var $factor$$3_r$$ = 2 * Math.PI * $kernelSum$$1_ss$$;
  $kernel$$1_sigma$$ = [];
  $kernel$$1_sigma$$.push([]);
  for(var $i$$ = 0, $j$$, $i$$ = 0;7 > $i$$;$i$$++) {
    var $g$$ = Math.exp(-($i$$ * $i$$) / (2 * $kernelSum$$1_ss$$)) / $factor$$3_r$$;
    if(0.001 > $g$$) {
      break
    }
    $kernel$$1_sigma$$[0].push($g$$)
  }
  $kernelSize$$ = $i$$;
  for($j$$ = 1;$j$$ < $kernelSize$$;++$j$$) {
    $kernel$$1_sigma$$.push([]);
    for($i$$ = 0;$i$$ < $kernelSize$$;++$i$$) {
      $g$$ = Math.exp(-($i$$ * $i$$ + $j$$ * $j$$) / (2 * $kernelSum$$1_ss$$)) / $factor$$3_r$$, $kernel$$1_sigma$$[$j$$].push($g$$)
    }
  }
  $kernelSum$$1_ss$$ = 0;
  for($j$$ = 1 - $kernelSize$$;$j$$ < $kernelSize$$;++$j$$) {
    for($i$$ = 1 - $kernelSize$$;$i$$ < $kernelSize$$;++$i$$) {
      $kernelSum$$1_ss$$ += $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)]
    }
  }
  for(var $b$$, $a$$, $superI$$, $y$$ = 0;508 > $y$$;++$y$$) {
    for(var $x$$ = 0;706 > $x$$;++$x$$) {
      $a$$ = $b$$ = $g$$ = $factor$$3_r$$ = 0;
      for($j$$ = 1 - $kernelSize$$;$j$$ < $kernelSize$$;++$j$$) {
        if(!(0 > $y$$ + $j$$ || 508 <= $y$$ + $j$$)) {
          for($i$$ = 1 - $kernelSize$$;$i$$ < $kernelSize$$;++$i$$) {
            0 > $x$$ + $i$$ || 706 <= $x$$ + $i$$ || ($superI$$ = 4 * (706 * ($y$$ + $j$$) + ($x$$ + $i$$)), 255 > $imgData$$.data[$superI$$ + 3] ? ($factor$$3_r$$ += $layerData$$.data[$superI$$ + 0] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)], $g$$ += $layerData$$.data[$superI$$ + 1] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)], $b$$ += $layerData$$.data[$superI$$ + 2] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)]) : ($factor$$3_r$$ += $imgData$$.data[$superI$$ + 0] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)], 
            $g$$ += $imgData$$.data[$superI$$ + 1] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)], $b$$ += $imgData$$.data[$superI$$ + 2] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)]), $a$$ += $imgData$$.data[$superI$$ + 3] * $kernel$$1_sigma$$[Math.abs($j$$)][Math.abs($i$$)])
          }
        }
      }
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 0] = $factor$$3_r$$ / $kernelSum$$1_ss$$;
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 1] = $g$$ / $kernelSum$$1_ss$$;
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 2] = $b$$ / $kernelSum$$1_ss$$;
      $imgData$$.data[4 * (706 * $y$$ + $x$$) + 3] = $a$$ / $kernelSum$$1_ss$$
    }
  }
  return $imgData$$
}
function image_canny($srcImage$$, $canvasToUse$$, $highThreshold_superI$$, $blurSigma_orients$$) {
  $canvasToUse$$ = document.getElementById("canny").getContext("2d");
  $canvasToUse$$.fillStyle = "#000000";
  $canvasToUse$$.fillRect(0, 0, 706, 508);
  $canvasToUse$$ = $canvasToUse$$.getImageData(0, 0, 706, 508);
  $highThreshold_superI$$ = 0;
  var $div_gx$$, $gy$$;
  $div_gx$$ = 180 / Math.PI;
  var $toAngle$$ = 180 / Math.PI, $leftPixel$$ = 0, $rightPixel$$ = 0;
  $srcImage$$ = gaussian_blur($srcImage$$, $blurSigma_orients$$);
  $blurSigma_orients$$ = Array(358648);
  for(var $gradients$$ = Array(706), $x$$ = 0;$x$$ < $gradients$$.length;$x$$++) {
    $gradients$$[$x$$] = Array(508)
  }
  var $maxGradient$$ = 0;
  $highThreshold_superI$$ = 2828;
  for(var $p$$ = 0, $y$$ = 1;507 > $y$$;$y$$++) {
    for($x$$ = 1;705 > $x$$;$x$$++) {
      $div_gx$$ = 1 * $srcImage$$.data[$highThreshold_superI$$ + 4 - 2824] - 1 * $srcImage$$.data[$highThreshold_superI$$ - 4 - 2824] + 2 * $srcImage$$.data[$highThreshold_superI$$ + 4] - 2 * $srcImage$$.data[$highThreshold_superI$$ - 4] + 1 * $srcImage$$.data[$highThreshold_superI$$ + 4 + 2824] - 1 * $srcImage$$.data[$highThreshold_superI$$ - 4 + 2824], $gy$$ = 1 * $srcImage$$.data[$highThreshold_superI$$ - 4 - 2824] - 1 * $srcImage$$.data[$highThreshold_superI$$ - 4 + 2824] + 2 * $srcImage$$.data[$highThreshold_superI$$ - 
      2824] - 2 * $srcImage$$.data[$highThreshold_superI$$ + 2824] + 1 * $srcImage$$.data[$highThreshold_superI$$ + 4 - 2824] - 1 * $srcImage$$.data[$highThreshold_superI$$ + 4 + 2824], $gradients$$[$x$$][$y$$] = Math.sqrt($div_gx$$ * $div_gx$$ + $gy$$ * $gy$$), $gradients$$[$x$$][$y$$] > $maxGradient$$ && ($maxGradient$$ = $gradients$$[$x$$][$y$$]), 0 == $div_gx$$ ? $div_gx$$ = 0 == $gy$$ ? 0 : 90 : ($div_gx$$ = $gy$$ / $div_gx$$, $div_gx$$ = 0 > $div_gx$$ ? 180 - Math.atan(-1 * $div_gx$$) * $toAngle$$ : 
      Math.atan($div_gx$$) * $toAngle$$, $div_gx$$ = 22.5 > $div_gx$$ ? 0 : 67.5 > $div_gx$$ ? 45 : 112.5 > $div_gx$$ ? 90 : 157.5 > $div_gx$$ ? 135 : 0), $blurSigma_orients$$[$p$$] = $div_gx$$, $highThreshold_superI$$ += 4, $p$$++
    }
  }
  $highThreshold_superI$$ = 2828;
  $p$$ = 0;
  for($y$$ = 1;507 > $y$$;$y$$++) {
    for($x$$ = 1;705 > $x$$;$x$$++) {
      switch($blurSigma_orients$$[$p$$]) {
        case 0:
          $leftPixel$$ = $gradients$$[$x$$ - 1][$y$$];
          $rightPixel$$ = $gradients$$[$x$$ + 1][$y$$];
          break;
        case 45:
          $leftPixel$$ = $gradients$$[$x$$ - 1][$y$$ + 1];
          $rightPixel$$ = $gradients$$[$x$$ + 1][$y$$ - 1];
          break;
        case 90:
          $leftPixel$$ = $gradients$$[$x$$][$y$$ + 1];
          $rightPixel$$ = $gradients$$[$x$$][$y$$ - 1];
          break;
        case 135:
          $leftPixel$$ = $gradients$$[$x$$ + 1][$y$$ + 1], $rightPixel$$ = $gradients$$[$x$$ - 1][$y$$ - 1]
      }
      $gradients$$[$x$$][$y$$] < $leftPixel$$ || $gradients$$[$x$$][$y$$] < $rightPixel$$ ? ($canvasToUse$$.data[$highThreshold_superI$$ + 0] = 0, $canvasToUse$$.data[$highThreshold_superI$$ + 1] = 0, $canvasToUse$$.data[$highThreshold_superI$$ + 2] = 0) : ($canvasToUse$$.data[$highThreshold_superI$$ + 0] = 255 * ($gradients$$[$x$$][$y$$] / $maxGradient$$), $canvasToUse$$.data[$highThreshold_superI$$ + 1] = 255 * ($gradients$$[$x$$][$y$$] / $maxGradient$$), $canvasToUse$$.data[$highThreshold_superI$$ + 
      2] = 255 * ($gradients$$[$x$$][$y$$] / $maxGradient$$));
      $highThreshold_superI$$ += 4;
      $p$$++
    }
  }
  return $canvasToUse$$
}
function detectVerticalSquash($data$$24_img$$) {
  var $ih_ratio$$ = $data$$24_img$$.naturalHeight, $canvas$$6_ctx$$1_sy$$ = document.createElement("canvas");
  $canvas$$6_ctx$$1_sy$$.width = 1;
  $canvas$$6_ctx$$1_sy$$.height = $ih_ratio$$;
  $canvas$$6_ctx$$1_sy$$ = $canvas$$6_ctx$$1_sy$$.getContext("2d");
  $canvas$$6_ctx$$1_sy$$.drawImage($data$$24_img$$, 0, 0);
  $data$$24_img$$ = $canvas$$6_ctx$$1_sy$$.getImageData(0, 0, 1, $ih_ratio$$).data;
  for(var $canvas$$6_ctx$$1_sy$$ = 0, $ey$$ = $ih_ratio$$, $py$$ = $ih_ratio$$;$py$$ > $canvas$$6_ctx$$1_sy$$;) {
    0 === $data$$24_img$$[4 * ($py$$ - 1) + 3] ? $ey$$ = $py$$ : $canvas$$6_ctx$$1_sy$$ = $py$$, $py$$ = $ey$$ + $canvas$$6_ctx$$1_sy$$ >> 1
  }
  $ih_ratio$$ = $py$$ / $ih_ratio$$;
  return 0 === $ih_ratio$$ ? 1 : $ih_ratio$$
}
function drawImageIOSFix($ctx$$, $img$$, $sx$$, $sy$$, $sw$$, $sh$$, $dx$$, $dy$$, $dw$$, $dh$$) {
  var $vertSquashRatio$$ = detectVerticalSquash($img$$);
  $ctx$$.drawImage($img$$, $sx$$ * $vertSquashRatio$$, $sy$$ * $vertSquashRatio$$, $sw$$ * $vertSquashRatio$$, $sh$$ * $vertSquashRatio$$, $dx$$, $dy$$, $dw$$, $dh$$)
}
var paintSliderElement;
function startSliderMove($e$$0$$, $ele$$) {
  paintSliderElement = $ele$$;
  $(window).bind("mousemove touchmove", function($e$$) {
    movePaintSlider($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(window).bind("mouseup touchend", function($e$$) {
    endSliderMove($e$$, paintSliderElement)
  });
  movePaintSlider($e$$0$$, $ele$$)
}
function endSliderMove($e$$, $ele$$) {
  $(window).unbind("mousemove");
  $(window).unbind("touchmove");
  $(window).unbind("mouseup touchend")
}
function movePaintSlider($e$$, $ele$$) {
  var $getX$$3_mouseX$$, $getY$$3_mouseY$$;
  $e$$.originalEvent.touches ? ($getX$$3_mouseX$$ = $e$$.originalEvent.touches[0].pageX, $getY$$3_mouseY$$ = $e$$.originalEvent.touches[0].pageY) : $e$$.pageX ? ($getX$$3_mouseX$$ = $e$$.pageX, $getY$$3_mouseY$$ = $e$$.pageY) : $getY$$3_mouseY$$ = $getX$$3_mouseX$$ = 0;
  var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  $getX$$3_mouseX$$ = $getX$$3_mouseX$$ - document.getElementById("drawing").getBoundingClientRect().left - $xScroll$$;
  $getY$$3_mouseY$$ = $getY$$3_mouseY$$ - document.getElementById("drawing").getBoundingClientRect().top - $yScroll$$;
  0 > $getX$$3_mouseX$$ && ($getX$$3_mouseX$$ = 0);
  552 < $getX$$3_mouseX$$ && ($getX$$3_mouseX$$ = 552);
  0 > $getY$$3_mouseY$$ && ($getY$$3_mouseY$$ = 0);
  396 < $getY$$3_mouseY$$ && ($getY$$3_mouseY$$ = 396);
  $(".pyptools_slider").css("top", $getY$$3_mouseY$$);
  $(".pyptools_slider").css("left", $getX$$3_mouseX$$)
}
var paintSliderTriangle;
function startPYPSlider($e$$0$$, $ele$$) {
  paintSliderTriangle = $ele$$;
  $(".pyptools_slider .main_triangle").bind("mousemove touchmove", function($e$$) {
    movePYPSlider($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(".pyptools_slider .small_triangle").bind("mousemove touchmove", function($e$$) {
    movePYPSlider($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(window).bind("mouseup touchend", function($e$$) {
    endPYPSlider($e$$, paintSliderTriangle)
  });
  movePYPSlider($e$$0$$, $ele$$)
}
function endPYPSlider($e$$, $ele$$) {
  $(".pyptools_slider .main_triangle").unbind("mousemove");
  $(".pyptools_slider .small_triangle").unbind("mousemove");
  $(".pyptools_slider .main_triangle").unbind("touchmove");
  $(".pyptools_slider .small_triangle").unbind("touchmove");
  $(".pyptools_slider .main_triangle").removeClass("dragging");
  $(".pyptools_slider .small_triangle").removeClass("dragging");
  $(window).unbind("mouseup touchend");
  var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $mouseX$$ = ($e$$.originalEvent.touches ? $e$$.originalEvent.touches[0].pageX : $e$$.pageX ? $e$$.pageX : 0) - $ele$$.getBoundingClientRect().left - $xScroll$$;
  0 > $mouseX$$ ? $mouseX$$ = 0 : 107 < $mouseX$$ && ($mouseX$$ = 108);
  document.getElementById("overlaySpread").style.visibility = "hidden";
  document.getElementById("newImage").style.visibility = "visible";
  showBusyOverlay();
  setTimeout(function() {
    getFullMerge(Math.floor(50 * ($mouseX$$ / 107)) - 1);
    hideBusyOverlay()
  }, 1500)
}
function movePYPSlider($e$$, $ele$$) {
  var $colorMapTemp_getX$$5_mouseX$$;
  $colorMapTemp_getX$$5_mouseX$$ = $e$$.originalEvent.touches ? $e$$.originalEvent.touches[0].pageX : $e$$.pageX ? $e$$.pageX : 0;
  var $i$$24_xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $newTriangleX$$ = $colorMapTemp_getX$$5_mouseX$$ - $ele$$.getBoundingClientRect().left - $i$$24_xScroll$$;
  $colorMapTemp_getX$$5_mouseX$$ = $colorMapTemp_getX$$5_mouseX$$ - $ele$$.getBoundingClientRect().left - $i$$24_xScroll$$;
  0 > $colorMapTemp_getX$$5_mouseX$$ ? $colorMapTemp_getX$$5_mouseX$$ = 0 : 107 < $colorMapTemp_getX$$5_mouseX$$ && ($colorMapTemp_getX$$5_mouseX$$ = 108);
  tol = Math.floor(50 * ($colorMapTemp_getX$$5_mouseX$$ / 107)) - 1;
  colorMap = context.createImageData(W, H);
  $colorMapTemp_getX$$5_mouseX$$ = context.createImageData(W, H).data;
  for(var $i$$24_xScroll$$ = 0, $topRow$$ = 4 * selectionDataBoundingRectMinY * W, $rowLength$$ = 4 * W, $JSCompiler_object_inline_r_12$$ = floodfill_hexToR(currentColor.rgb), $JSCompiler_object_inline_g_13$$ = floodfill_hexToG(currentColor.rgb), $JSCompiler_object_inline_b_14$$ = floodfill_hexToB(currentColor.rgb), $ix$$ = selectionDataBoundingRectMinX;$ix$$ < selectionDataBoundingRectMaxX;$ix$$++) {
    for(var $i$$24_xScroll$$ = $topRow$$ + 4 * $ix$$, $iy$$ = selectionDataBoundingRectMinY;$iy$$ < selectionDataBoundingRectMaxY;$iy$$++) {
      for(cx = tol;-1 < cx;cx--) {
        10 < selectionData[cx].data[$i$$24_xScroll$$] && ($colorMapTemp_getX$$5_mouseX$$[$i$$24_xScroll$$] = $JSCompiler_object_inline_r_12$$, $colorMapTemp_getX$$5_mouseX$$[$i$$24_xScroll$$ + 1] = $JSCompiler_object_inline_g_13$$, $colorMapTemp_getX$$5_mouseX$$[$i$$24_xScroll$$ + 2] = $JSCompiler_object_inline_b_14$$, $colorMapTemp_getX$$5_mouseX$$[$i$$24_xScroll$$ + 3] = 255)
      }
      $i$$24_xScroll$$ += $rowLength$$
    }
  }
  colorMap.data.set($colorMapTemp_getX$$5_mouseX$$);
  document.getElementById("overlaySpread").getContext("2d").putImageData(colorMap, 0, 0);
  document.getElementById("overlaySpread").style.visibility = "visible";
  document.getElementById("newImage").style.visibility = "hidden";
  $(".pyptools_slider .small_triangle").css("width", $newTriangleX$$)
}
function clearAllPYPButtons() {
  mergeImageDataOntoCanvas();
  $(".editButtonsPYP .pyp_button").removeClass("active");
  $(".pyptools_popup").removeClass("active");
  $(".editButtonsPYP .pyp_button_help").removeClass("active");
  $(".pyptools_slider").removeClass("active");
  $(".pyptools_popup.pyptools_popup_paint .image").removeClass("active");
  $(".pyptools_popup.pyptools_popup_masking .image").removeClass("active");
  $(".pyptools_popup .circle").removeClass("active");
  paintRadius = eraserRadius = 8;
  $(".pyptools_slider").removeClass("active");
  $(".pyptools_popup.pyptools_popup_help").removeClass("active").trigger("tooltipNotActive");
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").unbind("mousedown");
  $("canvas#maskingTop").unbind("mousemove");
  $("canvas#maskingTop").unbind("mouseup");
  $("canvas#maskingTop").unbind("mouseout");
  $("canvas#maskingTop").unbind("touchstart");
  $("canvas#maskingTop").unbind("touchmove");
  $("canvas#maskingTop").unbind("touchend");
  $(".pyptools_popup.pyptools_popup_paint .image").addClass("active");
  $("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/paintCanNew.cur), pointer");
  setPaintClick()
}
function hideAllPYPButtons() {
  mergeImageDataOntoCanvas();
  $(".editButtonsPYP .pyp_button").removeClass("active");
  $(".pyptools_popup").removeClass("active");
  $(".pyptools_popup.pyptools_popup_paint .image").removeClass("active");
  $(".pyptools_popup.pyptools_popup_masking .image").removeClass("active");
  $(".pyptools_slider").removeClass("active")
}
function unbindToolClicks() {
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").unbind("mousedown");
  $("canvas#maskingTop").unbind("mousemove");
  $("canvas#maskingTop").unbind("mouseup");
  $("canvas#maskingTop").unbind("mouseout");
  $("canvas#maskingTop").unbind("touchstart");
  $("canvas#maskingTop").unbind("touchmove");
  $("canvas#maskingTop").unbind("touchend")
}
function doCircleSelect($element$$) {
  $(".pyptools_popup .circle").removeClass("active");
  $($element$$).addClass("active")
}
function doEraserCircleSelect($element$$) {
  $(".pyptools_popup.pyptools_popup_eraser .circle.circle1").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor1.cur), pointer"), eraserRadius = 4, eraserSelected = 1) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle2").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor2.cur), pointer"), eraserRadius = 5, eraserSelected = 2) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle3").hasClass("active") ? ($("canvas#maskingTop").css("cursor", 
  "url(/cma/vz/pyp/cursor3.cur), pointer"), eraserRadius = 6, eraserSelected = 3) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle4").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor4.cur), pointer"), eraserRadius = 7, eraserSelected = 4) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle5").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor5.cur), pointer"), eraserRadius = 8, eraserSelected = 5) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle6").hasClass("active") ? 
  ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor6.cur), pointer"), eraserRadius = 9, eraserSelected = 6) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle7").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor7.cur), pointer"), eraserRadius = 10, eraserSelected = 7) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle8").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor8.cur), pointer"), eraserRadius = 11, 
  eraserSelected = 8) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle9").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor9.cur), pointer"), eraserRadius = 12, eraserSelected = 9) : $(".pyptools_popup.pyptools_popup_eraser .circle.circle10").hasClass("active") && ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor10.cur), pointer"), eraserRadius = 13, eraserSelected = 10)
}
function doPaintCircleSelect($element$$) {
  mergeImageDataOntoCanvas();
  $(".pyptools_popup.pyptools_popup_paint .image").removeClass("active");
  $(".pyptools_slider").removeClass("active");
  $(".pyptools_popup .circle.circle1").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor1.cur), pointer"), paintRadius = 4, paintSelected = 1) : $(".pyptools_popup.pyptools_popup_paint .circle.circle2").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor2.cur), pointer"), paintRadius = 5, paintSelected = 2) : $(".pyptools_popup.pyptools_popup_paint .circle.circle3").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor3.cur), pointer"), 
  paintRadius = 6, paintSelected = 3) : $(".pyptools_popup.pyptools_popup_paint .circle.circle4").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor4.cur), pointer"), paintRadius = 7, paintSelected = 4) : $(".pyptools_popup.pyptools_popup_paint .circle.circle5").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor5.cur), pointer"), paintRadius = 8, paintSelected = 5) : $(".pyptools_popup.pyptools_popup_paint .circle.circle6").hasClass("active") ? 
  ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor6.cur), pointer"), paintRadius = 9, paintSelected = 6) : $(".pyptools_popup.pyptools_popup_paint .circle.circle7").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor7.cur), pointer"), paintRadius = 10, paintSelected = 7) : $(".pyptools_popup.pyptools_popup_paint .circle.circle8").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor8.cur), pointer"), paintRadius = 11, paintSelected = 
  8) : $(".pyptools_popup.pyptools_popup_paint .circle.circle9").hasClass("active") ? ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor9.cur), pointer"), paintRadius = 12, paintSelected = 9) : $(".pyptools_popup.pyptools_popup_paint .circle.circle10").hasClass("active") && ($("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/cursor10.cur), pointer"), paintRadius = 13, paintSelected = 10);
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").unbind("mousedown");
  $("canvas#maskingTop").unbind("mousemove");
  $("canvas#maskingTop").unbind("mouseup");
  $("canvas#maskingTop").unbind("touchstart");
  $("canvas#maskingTop").unbind("touchmove");
  $("canvas#maskingTop").unbind("touchend");
  $("canvas#maskingTop").unbind("mousedown touchstart").bind("mousedown touchstart", function($e$$) {
    handlePaintBrushClick($e$$, this);
    $e$$.originalEvent.preventDefault()
  })
}
function doPaintSelect($cursorInfo_element$$) {
  var $alreadyActive$$ = $($cursorInfo_element$$).hasClass("active");
  hideAllPYPButtons();
  $alreadyActive$$ || (unbindToolClicks(), $($cursorInfo_element$$).addClass("active"), $(".pyptools_popup_paint").addClass("active"), 0 == paintSelected ? ($(".pyptools_popup.pyptools_popup_paint .image").addClass("active"), showTooltips(), $("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/paintCanNew.cur), pointer"), setPaintClick()) : ($(".pyptools_popup.pyptools_popup_paint .circle.circle" + paintSelected).addClass("active"), $cursorInfo_element$$ = "url(/cma/vz/pyp/cursor" + paintSelected + 
  ".cur), pointer", $("canvas#maskingTop").css("cursor", $cursorInfo_element$$), $("canvas#maskingTop").unbind("mousedown touchstart").bind("mousedown touchstart", function($e$$) {
    handlePaintBrushClick($e$$, this);
    $e$$.originalEvent.preventDefault()
  })))
}
function doPaintCanSelect($element$$) {
  unbindToolClicks();
  var $alreadyActive$$ = $($element$$).hasClass("active");
  $(".pyptools_slider").removeClass("active");
  $alreadyActive$$ ? ($("canvas#maskingTop").unbind("click"), $("canvas#maskingTop").unbind("mousedown"), $("canvas#maskingTop").unbind("mousemove"), $("canvas#maskingTop").unbind("mouseup"), $("canvas#maskingTop").unbind("touchstart"), $("canvas#maskingTop").unbind("touchmove"), $("canvas#maskingTop").unbind("touchend"), paintSelected = 0) : ($($element$$).addClass("active"), $(".pyptools_popup_paint .circle").removeClass("active"), $("canvas#maskingTop").unbind("click"), $("canvas#maskingTop").unbind("mousedown"), 
  $("canvas#maskingTop").unbind("mousemove"), $("canvas#maskingTop").unbind("mouseup"), $("canvas#maskingTop").unbind("touchstart"), $("canvas#maskingTop").unbind("touchmove"), $("canvas#maskingTop").unbind("touchend"), paintSelected = 0, $("canvas#maskingTop").css("cursor", "url(/cma/vz/pyp/paintCanNew.cur), pointer"));
  setPaintClick()
}
function handlePaintBrushClick($e$$0$$, $ele$$) {
  doPaintBrush($e$$0$$, $ele$$);
  $("canvas#maskingTop").unbind("mousemove touchmove").bind("mousemove touchmove", function($e$$) {
    doPaintBrush($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(window).unbind("mouseup touchend").bind("mouseup touchend", function($e$$) {
    $("canvas#maskingTop").unbind("mousemove touchmove");
    $(window).unbind("mouseup touchend");
    var $dfdPaintBrushClick$$ = $.Deferred();
    $("canvas#maskingTop").css("pointer-events", "none");
    showBusyOverlay();
    setTimeout(function() {
      $dfdPaintBrushClick$$.done(doPaintBrushEnd($e$$)).done(hideBusyOverlay())
    }, 100)
  });
  hideTooltips()
}
function doPaintBrushEnd($e$$48_getY$$) {
  mergeImageDataOntoCanvas();
  console.info("rp: " + repaintIsTurnedOn);
  if(repaintIsTurnedOn) {
    var $ele$$ = document.getElementById("maskingTop"), $getX$$;
    $e$$48_getY$$.originalEvent.touches ? ($getX$$ = $e$$48_getY$$.originalEvent.touches[0].pageX, $e$$48_getY$$ = $e$$48_getY$$.originalEvent.touches[0].pageY) : $e$$48_getY$$.pageX ? ($getX$$ = $e$$48_getY$$.pageX, $e$$48_getY$$ = $e$$48_getY$$.pageY) : $e$$48_getY$$ = $getX$$ = 0;
    var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    $getX$$ = Math.round($getX$$ - $ele$$.getBoundingClientRect().left - $xScroll$$);
    $ele$$ = Math.round($e$$48_getY$$ - $ele$$.getBoundingClientRect().top - $yScroll$$);
    $getX$$ += paintRadius;
    $ele$$ += paintRadius;
    canMain = document.getElementById("canMain");
    context = canMain.getContext("2d");
    canMask = document.getElementById("canEdge");
    maskContext = canMask.getContext("2d");
    tool_magic_wand(context, W, H, $getX$$, $ele$$, 5, maskContext, !0)
  }
  saveCanvasStates()
}
function doPaintBrush($e$$, $ele$$) {
  var $getX$$7_paintLeft$$, $getY$$6_paintTop$$;
  $e$$.originalEvent.touches ? ($getX$$7_paintLeft$$ = $e$$.originalEvent.touches[0].pageX, $getY$$6_paintTop$$ = $e$$.originalEvent.touches[0].pageY) : $e$$.pageX ? ($getX$$7_paintLeft$$ = $e$$.pageX, $getY$$6_paintTop$$ = $e$$.pageY) : $getY$$6_paintTop$$ = $getX$$7_paintLeft$$ = 0;
  var $paintBrushWidth_paintRight_xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $paintBrushCircleIndices_yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  $getX$$7_paintLeft$$ = Math.round($getX$$7_paintLeft$$ - $ele$$.getBoundingClientRect().left - $paintBrushWidth_paintRight_xScroll$$);
  $getY$$6_paintTop$$ = Math.round($getY$$6_paintTop$$ - $ele$$.getBoundingClientRect().top - $paintBrushCircleIndices_yScroll$$);
  var $paintBrushWidth_paintRight_xScroll$$ = $getX$$7_paintLeft$$ + 2 * paintRadius, $paintBottom_paintBrushHeight$$ = $getY$$6_paintTop$$ + 2 * paintRadius;
  0 > $getY$$6_paintTop$$ && ($getY$$6_paintTop$$ = 0);
  0 > $getX$$7_paintLeft$$ && ($getX$$7_paintLeft$$ = 0);
  706 < $paintBrushWidth_paintRight_xScroll$$ && ($getY$$6_paintTop$$ = 706);
  508 < $paintBottom_paintBrushHeight$$ && ($paintBottom_paintBrushHeight$$ = 508);
  for(var $ogImage_paintRadiusSquared$$ = paintRadius * paintRadius, $paintBrushCircleIndices_yScroll$$ = [], $paintBrushWidth_paintRight_xScroll$$ = $paintBrushWidth_paintRight_xScroll$$ - $getX$$7_paintLeft$$, $paintBottom_paintBrushHeight$$ = $paintBottom_paintBrushHeight$$ - $getY$$6_paintTop$$, $newImage$$2_x$$ = 0;$newImage$$2_x$$ < $paintBrushWidth_paintRight_xScroll$$;$newImage$$2_x$$++) {
    for(var $colorCanvasImage$$1_y$$ = 0;$colorCanvasImage$$1_y$$ < $paintBottom_paintBrushHeight$$;$colorCanvasImage$$1_y$$++) {
      var $JSCompiler_object_inline_r_16_dx$$ = $newImage$$2_x$$ - paintRadius, $JSCompiler_object_inline_g_17_dy$$ = $colorCanvasImage$$1_y$$ - paintRadius;
      $JSCompiler_object_inline_r_16_dx$$ * $JSCompiler_object_inline_r_16_dx$$ + $JSCompiler_object_inline_g_17_dy$$ * $JSCompiler_object_inline_g_17_dy$$ <= $ogImage_paintRadiusSquared$$ && $paintBrushCircleIndices_yScroll$$.push($colorCanvasImage$$1_y$$ * 4 * $paintBrushWidth_paintRight_xScroll$$ + 4 * $newImage$$2_x$$)
    }
  }
  canMain = document.getElementById("drawing");
  context2 = canMain.getContext("2d");
  merged = context2.createImageData($paintBrushWidth_paintRight_xScroll$$, $paintBottom_paintBrushHeight$$);
  mergedColor = context2.createImageData($paintBrushWidth_paintRight_xScroll$$, $paintBottom_paintBrushHeight$$);
  ogMain = document.getElementById("canMain");
  ogContext = ogMain.getContext("2d");
  ogData = ogContext.createImageData($paintBrushWidth_paintRight_xScroll$$, $paintBottom_paintBrushHeight$$);
  for(var $ogImage_paintRadiusSquared$$ = ogContext.getImageData(0, 0, W, H).data, $newImage$$2_x$$ = context2.getImageData($getX$$7_paintLeft$$, $getY$$6_paintTop$$, $paintBrushWidth_paintRight_xScroll$$, $paintBottom_paintBrushHeight$$).data, $colorCanvasImage$$1_y$$ = colorContext.getImageData($getX$$7_paintLeft$$, $getY$$6_paintTop$$, $paintBrushWidth_paintRight_xScroll$$, $paintBottom_paintBrushHeight$$).data, $JSCompiler_object_inline_r_16_dx$$ = floodfill_hexToR(currentColor.rgb), $JSCompiler_object_inline_g_17_dy$$ = 
  floodfill_hexToG(currentColor.rgb), $JSCompiler_object_inline_b_18$$ = floodfill_hexToB(currentColor.rgb), $toColorLCH$$ = ColorUtilities.convertRGBToLAB($JSCompiler_object_inline_r_16_dx$$, $JSCompiler_object_inline_g_17_dy$$, $JSCompiler_object_inline_b_18$$), $segData$$ = document.getElementById("segmentCanvas").getContext("2d").getImageData(0, 0, W, H).data, $prevLumin$$ = 0, $z$$ = 0;$z$$ < $paintBrushCircleIndices_yScroll$$.length;$z$$++) {
    var $i$$ = $paintBrushCircleIndices_yScroll$$[$z$$], $iyy$$ = Math.floor($i$$ / (4 * $paintBrushWidth_paintRight_xScroll$$)), $ixx_newColor$$ = ($i$$ - $iyy$$ * 4 * $paintBottom_paintBrushHeight$$) / 4, $ii_newLumin$$ = ($getY$$6_paintTop$$ + $iyy$$) * 4 * W + 4 * ($getX$$7_paintLeft$$ + $ixx_newColor$$);
    if($colorCanvasImage$$1_y$$[$ii_newLumin$$] != $JSCompiler_object_inline_r_16_dx$$) {
      if(0 < superLuminMap[$i$$ + 3]) {
        $uLumins$$ = superLuminMap[$i$$]
      }else {
        var $uLumins$$ = cLumins;
        0 < cLuminData[$ii_newLumin$$ + 3] && 255 > cLuminData[$ii_newLumin$$ + 3] && ($uLumins$$ = cLuminData[$ii_newLumin$$ + 3]);
        var $cachedLumins$$1_toLab$$ = 0, $foundIt$$1_foundLab$$ = !1, $lowestDelta$$2_modifier$$ = 31, $lowestLuminosity$$ = 0;
        if(0 != foundColors.length) {
          if(0 < $segData$$[$ii_newLumin$$]) {
            for(var $fc$$ = 0;$fc$$ < foundColors.length;$fc$$++) {
              if(foundColors[$fc$$].r == $segData$$[$ii_newLumin$$]) {
                $cachedLumins$$1_toLab$$ = foundLumins[$fc$$];
                $foundIt$$1_foundLab$$ = !0;
                break
              }
            }
          }
          if(!$foundIt$$1_foundLab$$) {
            $cachedLumins$$1_toLab$$ = ColorUtilities.convertRGBToLAB($ogImage_paintRadiusSquared$$[$ii_newLumin$$], $ogImage_paintRadiusSquared$$[$ii_newLumin$$ + 1], $ogImage_paintRadiusSquared$$[$ii_newLumin$$ + 2]);
            for($fc$$ = 0;$fc$$ < foundColors.length;$fc$$++) {
              var $foundIt$$1_foundLab$$ = ColorUtilities.convertRGBToLAB(foundColors[$fc$$].r, foundColors[$fc$$].g, foundColors[$fc$$].b), $deltaE$$ = ColorUtilities.colorCompareDE1994($foundIt$$1_foundLab$$[0], $foundIt$$1_foundLab$$[1], $foundIt$$1_foundLab$$[2], $cachedLumins$$1_toLab$$[0], $cachedLumins$$1_toLab$$[1], $cachedLumins$$1_toLab$$[2]);
              -1 == $lowestDelta$$2_modifier$$ ? ($lowestDelta$$2_modifier$$ = $deltaE$$, $lowestLuminosity$$ = $foundIt$$1_foundLab$$[0]) : $deltaE$$ < $lowestDelta$$2_modifier$$ && ($lowestDelta$$2_modifier$$ = $deltaE$$, $lowestLuminosity$$ = $foundIt$$1_foundLab$$[0])
            }
            $cachedLumins$$1_toLab$$ = 10 > $lowestDelta$$2_modifier$$ ? $lowestLuminosity$$ : $cachedLumins$$1_toLab$$[0]
          }
        }
        0 < $cachedLumins$$1_toLab$$ && ($uLumins$$ = $cachedLumins$$1_toLab$$);
        15 > $uLumins$$ && ($uLumins$$ = 15)
      }
      $lowestDelta$$2_modifier$$ = $uLumins$$ - $toColorLCH$$[0];
      $lowestDelta$$2_modifier$$ = 0 > $lowestDelta$$2_modifier$$ ? (100 + $lowestDelta$$2_modifier$$) / 100 : 0 < $lowestDelta$$2_modifier$$ ? 100 / (100 - $lowestDelta$$2_modifier$$) : 1;
      $ii_newLumin$$ = luminMap.data[$ii_newLumin$$] / $uLumins$$ * $toColorLCH$$[0];
      $ii_newLumin$$ = $ii_newLumin$$ * $lowestDelta$$2_modifier$$ - ($uLumins$$ - $toColorLCH$$[0]) / 1.5;
      100 < $ii_newLumin$$ && ($ii_newLumin$$ = 100);
      if(0 != $ixx_newColor$$) {
        var $leftLumin$$1_leftLuminI$$ = $iyy$$ * 4 * W + 4 * ($ixx_newColor$$ - 1), $leftLumin$$1_leftLuminI$$ = ColorUtilities.convertRGBToLAB($newImage$$2_x$$[$leftLumin$$1_leftLuminI$$], $newImage$$2_x$$[$leftLumin$$1_leftLuminI$$ + 1], $newImage$$2_x$$[$leftLumin$$1_leftLuminI$$ + 2])[0]
      }
      if(0 < $prevLumin$$ && 5 < (10 > $cachedLumins$$1_toLab$$ || 5 < Math.abs($prevLumin$$ - $ii_newLumin$$) || Math.abs($leftLumin$$1_leftLuminI$$ - $ii_newLumin$$))) {
        $ii_newLumin$$ = 0 < $leftLumin$$1_leftLuminI$$ && 0 != $ixx_newColor$$ ? (2 * $prevLumin$$ + 2 * $leftLumin$$1_leftLuminI$$ + $ii_newLumin$$) / 5 : (4 * $prevLumin$$ + $ii_newLumin$$) / 5
      }
      $prevLumin$$ = $ii_newLumin$$;
      $ixx_newColor$$ = ColorUtilities.convertLABToRGB($ii_newLumin$$, $toColorLCH$$[1], $toColorLCH$$[2]);
      $newImage$$2_x$$[$i$$] = $ixx_newColor$$[0];
      $newImage$$2_x$$[$i$$ + 1] = $ixx_newColor$$[1];
      $newImage$$2_x$$[$i$$ + 2] = $ixx_newColor$$[2];
      $newImage$$2_x$$[$i$$ + 3] = 255;
      $colorCanvasImage$$1_y$$[$i$$] = $JSCompiler_object_inline_r_16_dx$$;
      $colorCanvasImage$$1_y$$[$i$$ + 1] = $JSCompiler_object_inline_g_17_dy$$;
      $colorCanvasImage$$1_y$$[$i$$ + 2] = $JSCompiler_object_inline_b_18$$;
      $colorCanvasImage$$1_y$$[$i$$ + 3] = 255
    }
  }
  drawing = document.getElementById("drawing");
  drawingContext = drawing.getContext("2d");
  if(merged.data.set) {
    merged.data.set($newImage$$2_x$$), mergedColor.data.set($colorCanvasImage$$1_y$$)
  }else {
    for($i$$ = 0;$i$$ < merged.data.length;++$i$$) {
      merged.data[$i$$] = $newImage$$2_x$$[$i$$], mergedColor.data[$i$$] = $colorCanvasImage$$1_y$$[$i$$]
    }
  }
  drawingContext.putImageData(merged, $getX$$7_paintLeft$$, $getY$$6_paintTop$$);
  colorContext.putImageData(mergedColor, $getX$$7_paintLeft$$, $getY$$6_paintTop$$)
}
function doEraserSelect($cursorInfo$$1_element$$) {
  var $alreadyActive$$ = $($cursorInfo$$1_element$$).hasClass("active");
  hideAllPYPButtons();
  $alreadyActive$$ ? hideAllPYPButtons() : (unbindToolClicks(), $($cursorInfo$$1_element$$).addClass("active"), $(".pyptools_popup_eraser").addClass("active"), $(".pyptools_popup.pyptools_popup_eraser .circle.circle" + eraserSelected).addClass("active"), $cursorInfo$$1_element$$ = "url(/cma/vz/pyp/cursor" + eraserSelected + ".cur), pointer", $("canvas#maskingTop").css("cursor", $cursorInfo$$1_element$$), $("canvas#maskingTop").unbind("click"), $("canvas#maskingTop").bind("mousedown touchstart", function($e$$) {
    handleEraserClick($e$$, this);
    $e$$.originalEvent.preventDefault()
  }))
}
function handleEraserClick($e$$0$$, $ele$$) {
  doEraser($e$$0$$, $ele$$);
  $("canvas#maskingTop").bind("mousemove touchmove", function($e$$) {
    doEraser($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(window).bind("mouseup touchend", function($e$$) {
    $("canvas#maskingTop").unbind("mousemove touchmove");
    $(window).unbind("mouseup touchend");
    saveCanvasStates()
  });
  hideTooltips()
}
function doEraser($e$$, $ele$$) {
  var $colorContext$$1_imgMain$$ = document.getElementsByClassName("imgMain")[0], $eraserLeft_getX$$, $eraserTop_getY$$;
  $e$$.originalEvent.touches ? ($eraserLeft_getX$$ = $e$$.originalEvent.touches[0].pageX, $eraserTop_getY$$ = $e$$.originalEvent.touches[0].pageY) : $e$$.pageX ? ($eraserLeft_getX$$ = $e$$.pageX, $eraserTop_getY$$ = $e$$.pageY) : $eraserTop_getY$$ = $eraserLeft_getX$$ = 0;
  var $eraserY_xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $eraserX_yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  $eraserLeft_getX$$ = Math.round($eraserLeft_getX$$ - $ele$$.getBoundingClientRect().left - $eraserY_xScroll$$);
  $eraserTop_getY$$ = Math.round($eraserTop_getY$$ - $ele$$.getBoundingClientRect().top - $eraserX_yScroll$$);
  var $eraserX_yScroll$$ = $eraserLeft_getX$$ + eraserRadius, $eraserY_xScroll$$ = $eraserTop_getY$$ + eraserRadius, $eraserContext$$ = document.getElementById("drawing").getContext("2d");
  $eraserContext$$.save();
  $eraserContext$$.beginPath();
  $eraserContext$$.arc($eraserX_yScroll$$, $eraserY_xScroll$$, eraserRadius, 0, 2 * Math.PI, !0);
  $eraserContext$$.closePath();
  $eraserContext$$.clip();
  $eraserContext$$.drawImage($colorContext$$1_imgMain$$, $eraserLeft_getX$$, $eraserTop_getY$$, 2 * eraserRadius, 2 * eraserRadius, $eraserLeft_getX$$, $eraserTop_getY$$, 2 * eraserRadius, 2 * eraserRadius);
  $eraserContext$$.restore();
  $colorContext$$1_imgMain$$ = document.getElementById("canColor").getContext("2d");
  $colorContext$$1_imgMain$$.save();
  $colorContext$$1_imgMain$$.beginPath();
  $colorContext$$1_imgMain$$.arc($eraserX_yScroll$$, $eraserY_xScroll$$, eraserRadius, 0, 2 * Math.PI, !0);
  $colorContext$$1_imgMain$$.closePath();
  $colorContext$$1_imgMain$$.clip();
  $colorContext$$1_imgMain$$.clearRect($eraserLeft_getX$$, $eraserTop_getY$$, 2 * eraserRadius, 2 * eraserRadius);
  $colorContext$$1_imgMain$$.restore()
}
function doUnpaintImage() {
  var $canvasContext$$ = document.getElementById("drawing").getContext("2d"), $imgMain$$ = document.getElementsByClassName("imgMain")[0];
  $canvasContext$$.drawImage($imgMain$$, 0, 0);
  document.getElementById("canColor").getContext("2d").clearRect(0, 0, 706, 508);
  cLuminData = cLuminDataCanvas.getContext("2d").createImageData(706, 508).data;
  newImageCanvas.width = newImageCanvas.width;
  newColorCanvas.width = newColorCanvas.width;
  mergeImageDataOntoCanvas();
  $(".pyptools_slider").removeClass("active");
  saveCanvasStates()
}
function doMaskingSelect($element$$) {
  var $alreadyActive$$ = $($element$$).hasClass("active");
  hideAllPYPButtons();
  $alreadyActive$$ ? hideAllPYPButtons() : (unbindToolClicks(), $($element$$).addClass("active"), $(".pyptools_popup_masking").addClass("active"), $(".pyptools_popup.pyptools_popup_masking .image.image-line").addClass("active"), $("canvas#maskingTop").css("cursor", "crosshair"), $("canvas#maskingTop").unbind("mousedown"), $("canvas#maskingTop").unbind("touchstart"), $("canvas#maskingTop").unbind("click"), $("canvas#maskingTop").bind("click", function($e$$) {
    handleMaskingTopClick($e$$, this)
  }), 0 < maskingLines.length && drawLines(), $(".show_hide .show_hide_wrapper").text("Hide Masking"), maskingIsShowing = !0)
}
function doLineMaskingSelect($element$$) {
  $(".pyptools_popup.pyptools_popup_masking .image.image-poly").removeClass("active");
  $($element$$).addClass("active");
  $("canvas#maskingTop").unbind("mousedown");
  $("canvas#maskingTop").unbind("touchstart");
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").bind("click", function($e$$) {
    handleMaskingTopClick($e$$, this)
  });
  0 < maskingLines.length && drawLines();
  $(".show_hide .show_hide_wrapper").text("Hide Masking");
  maskingIsShowing = !0
}
function doPolyMaskingSelect($element$$) {
  $(".pyptools_popup.pyptools_popup_masking .image.image-line").removeClass("active");
  $($element$$).addClass("active");
  $("canvas#maskingTop").unbind("mousedown");
  $("canvas#maskingTop").unbind("touchstart");
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").bind("click", function($e$$) {
    maskingStartPoly($e$$, this)
  });
  0 < maskingLines.length && drawLines();
  $(".show_hide .show_hide_wrapper").text("Hide Masking");
  maskingIsShowing = !0
}
function doShowHideMasking($element$$) {
  if(maskingIsShowing) {
    var $canvasMaskingTop$$ = document.getElementById("maskingTop");
    canvasMaskingTopContext = $canvasMaskingTop$$.getContext("2d");
    canvasMaskingTopContext.clearRect(0, 0, $canvasMaskingTop$$.width, $canvasMaskingTop$$.height);
    $($element$$).find(".show_hide_wrapper").text("Show Masking");
    maskingIsShowing = !1
  }else {
    0 < maskingLines.length && drawLines(), $($element$$).find(".show_hide_wrapper").text("Hide Masking"), maskingIsShowing = !0
  }
}
function removeAllMasking() {
  var $canvasMaskingTop$$2_imgEdge$$ = document.getElementsByClassName("imgEdge")[0];
  canvasEdgeContext = document.getElementById("canEdge").getContext("2d");
  canvasEdgeContext.drawImage($canvasMaskingTop$$2_imgEdge$$, 0, 0);
  $canvasMaskingTop$$2_imgEdge$$ = document.getElementById("maskingTop");
  canvasMaskingTopContext = $canvasMaskingTop$$2_imgEdge$$.getContext("2d");
  canvasMaskingTopContext.clearRect(0, 0, $canvasMaskingTop$$2_imgEdge$$.width, $canvasMaskingTop$$2_imgEdge$$.height);
  maskingLines = [];
  $(".show_hide .show_hide_wrapper").text("Hide Masking");
  maskingIsShowing = !0;
  saveCanvasStates()
}
function handleMaskingTopClick($e$$0$$, $ele$$) {
  $("canvas#maskingTop").css("cursor", "crosshair");
  $($ele$$).unbind("click");
  $(".show_hide_wrapper").text("Hide Masking");
  maskingIsShowing = !0;
  $("#maskingTop").css("cursor", "crosshair");
  var $getX$$, $getY$$;
  $e$$0$$.originalEvent.touches ? ($getX$$ = $e$$0$$.originalEvent.touches[0].pageX, $getY$$ = $e$$0$$.originalEvent.touches[0].pageY) : $e$$0$$.pageX ? ($getX$$ = $e$$0$$.pageX, $getY$$ = $e$$0$$.pageY) : $getY$$ = $getX$$ = 0;
  var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  maskStartX = Math.round($getX$$ - $ele$$.getBoundingClientRect().left - $xScroll$$);
  maskStartY = Math.round($getY$$ - $ele$$.getBoundingClientRect().top - $yScroll$$);
  maskingDrag = !0;
  $("canvas#maskingTop").bind("mousemove touchmove", function($e$$) {
    maskingMove($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").bind("click", function($e$$) {
    maskingEnd($e$$, this)
  });
  hideTooltips()
}
function maskingStartPoly($e$$0$$, $ele$$) {
  $("canvas#maskingTop").css("cursor", "crosshair");
  $(".show_hide .show_hide_wrapper").text("Hide Masking");
  maskingIsShowing = !0;
  var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  maskStartX = Math.round($e$$0$$.pageX - $ele$$.getBoundingClientRect().left - $xScroll$$);
  maskStartY = Math.round($e$$0$$.pageY - $ele$$.getBoundingClientRect().top - $yScroll$$);
  maskingCircleX = maskStartX;
  maskingCircleY = maskStartY;
  drawMaskingCircle(maskingCircleX, maskingCircleY, 4);
  maskingPolyArray = [];
  maskingPolyArray.push(maskStartX);
  maskingPolyArray.push(maskStartY);
  maskingDrag = !0;
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").bind("click", function($e$$) {
    maskingEndPoly($e$$, this)
  });
  $("canvas#maskingTop").bind("mousemove touchmove", function($e$$) {
    maskingMove($e$$, this)
  })
}
function maskingMove($e$$, $ele$$) {
  if(maskingDrag) {
    var $getX$$, $getY$$;
    $e$$.originalEvent.touches ? ($getX$$ = $e$$.originalEvent.touches[0].pageX, $getY$$ = $e$$.originalEvent.touches[0].pageY) : $e$$.pageX ? ($getX$$ = $e$$.pageX, $getY$$ = $e$$.pageY) : $getY$$ = $getX$$ = 0;
    var $xScroll$$ = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, $yScroll$$ = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    maskEndX = Math.round($getX$$ - $ele$$.getBoundingClientRect().left - $xScroll$$);
    maskEndY = Math.round($getY$$ - $ele$$.getBoundingClientRect().top - $yScroll$$);
    drawLines();
    null != maskingCircleX && null != maskingCircleY && drawMaskingCircle(maskingCircleX, maskingCircleY, 4)
  }
}
function drawLines() {
  var $canvasMaskingTop$$3_i$$ = document.getElementById("maskingTop");
  canvasMaskingTopContext = $canvasMaskingTop$$3_i$$.getContext("2d");
  canvasMaskingTopContext.clearRect(0, 0, $canvasMaskingTop$$3_i$$.width, $canvasMaskingTop$$3_i$$.height);
  for($canvasMaskingTop$$3_i$$ = 0;$canvasMaskingTop$$3_i$$ < maskingLines.length;$canvasMaskingTop$$3_i$$++) {
    drawLine(maskingLines[$canvasMaskingTop$$3_i$$], canvasMaskingTopContext, "#ffffff")
  }
  drawLine({x1:maskStartX, y1:maskStartY, x2:maskEndX, y2:maskEndY}, canvasMaskingTopContext, "#ffffff")
}
function drawLine($line$$, $lineContext$$, $lineColor$$) {
  $lineContext$$.strokeStyle = $lineColor$$;
  $lineContext$$.fillStyle = $lineColor$$;
  $lineContext$$.lineWidth = 1.5;
  $lineContext$$.beginPath();
  $lineContext$$.moveTo($line$$.x1, $line$$.y1);
  $lineContext$$.lineTo($line$$.x2, $line$$.y2);
  $lineContext$$.stroke()
}
function maskingEnd($e$$0$$, $ele$$) {
  if(null != maskEndX || null != maskEndY) {
    maskingDrag = !1;
    maskingLines.push({x1:maskStartX, y1:maskStartY, x2:maskEndX, y2:maskEndY});
    var $canvasMaskContext$$ = document.getElementById("canEdge").getContext("2d");
    $canvasMaskContext$$.strokeStyle = "#0000ff";
    $canvasMaskContext$$.fillStyle = "#0000ff";
    $canvasMaskContext$$.lineWidth = 1.5;
    $canvasMaskContext$$.beginPath();
    $canvasMaskContext$$.moveTo(maskStartX, maskStartY);
    $canvasMaskContext$$.lineTo(maskEndX, maskEndY);
    $canvasMaskContext$$.stroke()
  }
  maskEndY = maskEndX = maskStartY = maskStartX = null;
  $("canvas#maskingTop").unbind("mousemove");
  $(window).unbind("mouseup");
  $("canvas#maskingTop").unbind("touchmove");
  $(window).unbind("touchend");
  $("canvas#maskingTop").unbind("click");
  $("canvas#maskingTop").bind("click", function($e$$) {
    handleMaskingTopClick($e$$, $ele$$)
  });
  saveCanvasStates()
}
function maskingEndPoly($e$$0$$, $ele$$) {
  var $isInMaskingCircle$$ = pointIsInMaskingCircle(maskEndX, maskEndY, maskingCircleX, maskingCircleY, 4);
  maskingPolyArray.push(maskEndX);
  maskingPolyArray.push(maskEndY);
  if($isInMaskingCircle$$) {
    var $canvasMaskContext$$ = document.getElementById("canEdge").getContext("2d");
    $canvasMaskContext$$.fillStyle = "#000";
    $canvasMaskContext$$.beginPath();
    $canvasMaskContext$$.moveTo(maskingPolyArray[0], maskingPolyArray[1]);
    for(var $item$$ = 2;$item$$ < maskingPolyArray.length - 1;$item$$ += 2) {
      $canvasMaskContext$$.lineTo(maskingPolyArray[$item$$], maskingPolyArray[$item$$ + 1])
    }
    $canvasMaskContext$$.closePath();
    $canvasMaskContext$$.fill();
    maskingPolyArray = null;
    maskEndX = maskingCircleX;
    maskEndY = maskingCircleY;
    drawLines();
    maskingDrag = !1;
    maskingCircleY = maskingCircleX = null;
    $("canvas#maskingTop").unbind("click");
    $("canvas#maskingTop").unbind("mousemove");
    $("canvas#maskingTop").unbind("touchmove");
    $("canvas#maskingTop").bind("click", function($e$$) {
      maskingStartPoly($e$$, this)
    })
  }
  maskingLines.push({x1:maskStartX, y1:maskStartY, x2:maskEndX, y2:maskEndY});
  $canvasMaskContext$$ = document.getElementById("canEdge").getContext("2d");
  $canvasMaskContext$$.strokeStyle = "#0000ff";
  $canvasMaskContext$$.fillStyle = "#0000ff";
  $canvasMaskContext$$.lineWidth = 1.5;
  $canvasMaskContext$$.beginPath();
  $canvasMaskContext$$.moveTo(maskStartX, maskStartY);
  $canvasMaskContext$$.lineTo(maskEndX, maskEndY);
  $canvasMaskContext$$.stroke();
  $isInMaskingCircle$$ || (maskStartX = maskEndX, maskStartY = maskEndY);
  saveCanvasStates()
}
function pointIsInMaskingCircle($dx$$8_x$$, $dy$$8_y$$, $cx$$, $cy$$, $r$$) {
  $dx$$8_x$$ -= $cx$$;
  $dy$$8_y$$ -= $cy$$;
  return $dx$$8_x$$ * $dx$$8_x$$ + $dy$$8_y$$ * $dy$$8_y$$ <= $r$$ * $r$$
}
function drawMaskingCircle($x$$, $y$$, $r$$) {
  var $canvasMaskTopContext$$ = document.getElementById("maskingTop").getContext("2d");
  $canvasMaskTopContext$$.strokeStyle = "#ffffff";
  $canvasMaskTopContext$$.lineWidth = 1.5;
  $canvasMaskTopContext$$.beginPath();
  $canvasMaskTopContext$$.arc($x$$, $y$$, $r$$, 0, 2 * Math.PI, !0);
  $canvasMaskTopContext$$.closePath();
  $canvasMaskTopContext$$.stroke()
}
function hideTooltips() {
  $(".editButtonsPYP .pyp_button_help").removeClass("active");
  $(".pyptools_popup.pyptools_popup_help").removeClass("active");
  $(".pyptools_popup.pyptools_popup_help .pyp_tools_help").removeClass("active")
}
function showTooltips() {
}
function hideOuterTooltip() {
  $(".pyptools_popup.pyptools_popup_help").hide();
  $(".editButtonsPYP .pyp_button_help").removeClass("active");
  $(".pyptools_popup.pyptools_popup_help").removeClass("active");
  $(".editButtonsPYP .pyp_button_help").unbind("click");
  $(".editButtonsPYP .pyp_button_help").bind("click", showOuterTooltip);
  showPYPTooltips = !1
}
function showOuterTooltip() {
  $(".pyptools_popup.pyptools_popup_help").show();
  $(".editButtonsPYP .pyp_button_help").addClass("active");
  $(".editButtonsPYP .pyp_button_help").unbind("click");
  $(".editButtonsPYP .pyp_button_help").bind("click", hideOuterTooltip);
  showPYPTooltips = !0
}
function doHidePaintSlider() {
}
function resetHidePaintSlider() {
}
function unbindAndResetPaintSlider() {
  $(".pyptools_slider").unbind("mouseleave");
  $(".pyptools_slider").unbind("mouseenter");
  resetHidePaintSlider()
}
function hidePaintSliderByUser() {
  mergeImageDataOntoCanvas();
  $(".pyptools_slider").removeClass("active");
  hideTooltips()
}
function saveCanvasStates() {
  if("undefined" !== typeof Storage) {
    sessionStorage.drawingCanvas = document.getElementById("drawing").toDataURL();
    sessionStorage.predrawingCanvas = document.getElementById("predrawing").toDataURL();
    sessionStorage.maskingCanvas = document.getElementById("canEdge").toDataURL();
    sessionStorage.colorCanvas = document.getElementById("canColor").toDataURL();
    sessionStorage.cannyCanvas = document.getElementById("canny").toDataURL();
    sessionStorage.segmentCanvas = document.getElementById("segmentCanvas").toDataURL();
    sessionStorage.thumbnail = document.getElementById("thumbnail").toDataURL();
    sessionStorage.foundColors = JSON.stringify(foundColors);
    sessionStorage.foundLumins = JSON.stringify(foundLumins);
    sessionStorage.maskingLines = JSON.stringify(maskingLines);
    var $imgMain$$ = document.getElementsByClassName("imgMain")[0], $imgEdge$$ = document.getElementsByClassName("imgEdge")[0];
    sessionStorage.mainImage = $imgMain$$.src;
    sessionStorage.edgeImage = $imgEdge$$.src
  }
}
function recallUserImagesFromStorage() {
  for(var $x$$ = 0;7 > $x$$;$x$$++) {
    var $nextObject$$ = {};
    localStorage.hasOwnProperty("userSessionImage" + $x$$) ? ($nextObject$$ = JSON.parse(localStorage.getItem("userSessionImage" + $x$$)), sessionUserImages.push($nextObject$$), userHasSavedImages = !0) : $x$$ = 7
  }
}
function loadCanvasStates() {
  setCanvasVariables();
  maskingLines = 2 >= sessionStorage.maskingLines.length ? [] : JSON.parse(sessionStorage.maskingLines);
  drawLines();
  foundColors = JSON.parse(sessionStorage.foundColors);
  foundLumins = JSON.parse(sessionStorage.foundLumins);
  var $drawingImageURL_preDrawingCanvasImage$$ = new Image, $drawingCanvasImage_maskingImageURL$$ = new Image, $maskingCanvasImage$$ = new Image, $colorCanvasImage$$ = new Image, $cannyCanvasImage$$ = new Image, $segmentCanvasImage$$ = new Image, $thumbnailImage$$ = new Image;
  $drawingImageURL_preDrawingCanvasImage$$.onload = function $$drawingImageURL_preDrawingCanvasImage$$$onload$() {
    preDrawingContext.drawImage(this, 0, 0);
    saveCanvasStates();
    doPYPPreview()
  };
  $drawingCanvasImage_maskingImageURL$$.onload = function $$drawingCanvasImage_maskingImageURL$$$onload$() {
    drawingContext.drawImage(this, 0, 0);
    saveCanvasStates()
  };
  $maskingCanvasImage$$.onload = function $$maskingCanvasImage$$$onload$() {
    context2.drawImage(this, 0, 0);
    saveCanvasStates()
  };
  $colorCanvasImage$$.onload = function $$colorCanvasImage$$$onload$() {
    colorContext.drawImage(this, 0, 0);
    saveCanvasStates()
  };
  $cannyCanvasImage$$.onload = function $$cannyCanvasImage$$$onload$() {
    cannyCanvasContext.drawImage(this, 0, 0);
    saveCanvasStates()
  };
  $segmentCanvasImage$$.onload = function $$segmentCanvasImage$$$onload$() {
    segmentCanvasContext.drawImage(this, 0, 0);
    superLuminMap = context.createImageData(W, H);
    for(var $sessionLoadTempData$$ = new Uint8ClampedArray(segmentCanvasContext.getImageData(0, 0, W, H).data), $W4$$ = 4 * W, $ix$$ = 0;$ix$$ < W;$ix$$++) {
      for(var $iy$$ = 0;$iy$$ < H;$iy$$++) {
        var $i$$ = $iy$$ * $W4$$ + 4 * $ix$$, $fromSegLCH$$ = ColorUtilities.convertRGBToLAB($sessionLoadTempData$$[$i$$], $sessionLoadTempData$$[$i$$ + 1], $sessionLoadTempData$$[$i$$ + 2]);
        superLuminMap[$i$$] = $fromSegLCH$$[0]
      }
    }
    saveCanvasStates()
  };
  $thumbnailImage$$.onload = function $$thumbnailImage$$$onload$() {
    thumbnailCanvasContext.drawImage(this, 0, 0);
    saveCanvasStates()
  };
  $drawingImageURL_preDrawingCanvasImage$$.src = sessionStorage.predrawingCanvas;
  $drawingCanvasImage_maskingImageURL$$.src = sessionStorage.drawingCanvas;
  $maskingCanvasImage$$.src = sessionStorage.maskingCanvas;
  $colorCanvasImage$$.src = sessionStorage.colorCanvas;
  $cannyCanvasImage$$.src = sessionStorage.cannyCanvas;
  $segmentCanvasImage$$.src = sessionStorage.segmentCanvas;
  $thumbnailImage$$.src = sessionStorage.thumbnail;
  $drawingImageURL_preDrawingCanvasImage$$ = sessionStorage.mainImage;
  $drawingCanvasImage_maskingImageURL$$ = sessionStorage.edgeImage;
  imgMain.src = $drawingImageURL_preDrawingCanvasImage$$;
  imgEdge.src = $drawingCanvasImage_maskingImageURL$$;
  image = new Image;
  image.onload = function $image$onload$() {
    context.drawImage(this, 0, 0);
    luminMap = context.createImageData(706, 508);
    contextData = context.getImageData(0, 0, 706, 508);
    for(var $ix$$ = 0;$ix$$ < drawingCanvasWidth;$ix$$++) {
      for(var $iy$$ = 0;$iy$$ < drawingCanvasHeight;$iy$$++) {
        var $i$$ = $iy$$ * 4 * drawingCanvasWidth + 4 * $ix$$, $fromColorLCH$$ = ColorUtilities.convertRGBToLAB(contextData.data[$i$$], contextData.data[$i$$ + 1], contextData.data[$i$$ + 2]);
        luminMap.data[$i$$] = $fromColorLCH$$[0]
      }
    }
    cLuminDataCanvas.width = W;
    cLuminDataCanvas.height = H;
    cLuminData = cLuminDataCanvas.getContext("2d").createImageData(706, 508).data;
    saveCanvasStates()
  };
  image.src = $drawingImageURL_preDrawingCanvasImage$$;
  image2 = new Image;
  image2.src = $drawingCanvasImage_maskingImageURL$$;
  console.info("do save after session load")
}
function loadUserPYPImages($sources$$, $callback$$) {
  for(var $images$$ = {}, $loadedImages$$ = 0, $numImages$$ = $sources$$.length, $i$$ = 0;$i$$ < $sources$$.length;$i$$++) {
    $images$$[$i$$] = new Image, $images$$[$i$$].onload = function $$images$$$$i$$$onload$() {
      ++$loadedImages$$ >= $numImages$$ && $callback$$($images$$)
    }, $images$$[$i$$].src = $sources$$[$i$$].thumbnail
  }
}
function recallUserPYPProject($id$$) {
  var $metaDataWebServiceError$$ = !1, $metaDataJSONObject$$ = "";
  $.ajax({type:"get", dataType:"json", url:userSession._serviceUrl + "/project/nextgen/getproject?projectid=" + $id$$, async:!1, cache:!1, success:function($json$$) {
    $metaDataJSONObject$$ = eval("(" + $json$$.NextGenProjectVO.jsonData + ")").NextGenProjectVO
  }, error:function() {
    console.info("Failed to reach service");
    $metaDataWebServiceError$$ = !0
  }});
  if(!$metaDataWebServiceError$$ && "" != $metaDataJSONObject$$) {
    sessionStorage.maskingLines = $metaDataJSONObject$$.maskingLines, sessionStorage.foundLumins = $metaDataJSONObject$$.foundLumins, sessionStorage.foundColors = $metaDataJSONObject$$.foundColors, loadUserPYPProject($id$$)
  }else {
    return!1
  }
}
function loadUserPYPProject($id$$) {
  $("div#overlay_loading_pyp_project").show();
  $.ajax({type:"get", dataType:"json", url:userSession._serviceUrl + "/project/nextgen/getprojectbinary?projectid=" + $id$$ + "&keys=all", async:!1, cache:!1, success:function($json$$) {
    sessionStorage.mainImage = $json$$.mainImage;
    sessionStorage.drawingCanvas = $json$$.drawingCanvas;
    sessionStorage.thumbnail = $json$$.thumbnail;
    sessionStorage.colorCanvas = $json$$.colorCanvas;
    sessionStorage.segmentCanvas = $json$$.segmentCanvas
  }, error:function() {
    console.info("Failed to reach service");
    return!1
  }});
  setCanvasVariables();
  clearAllCanvases();
  setTimeout(function() {
    var $loadPYPProjectNumImagesCurrent$$ = 0;
    foundColors = JSON.parse(sessionStorage.foundColors);
    foundLumins = JSON.parse(sessionStorage.foundLumins);
    maskingLines = [];
    "" != sessionStorage.maskingLines && (maskingLines = JSON.parse(sessionStorage.maskingLines));
    resetMaskingVariables();
    drawLines();
    var $preDrawingCanvasImage$$ = new Image, $drawingCanvasImage$$ = new Image, $colorCanvasImage$$ = new Image, $segmentCanvasImage$$ = new Image;
    image = new Image;
    $preDrawingCanvasImage$$.onload = function $$preDrawingCanvasImage$$$onload$() {
      preDrawingContext.drawImage(this, 0, 0);
      $loadPYPProjectNumImagesCurrent$$++;
      5 <= $loadPYPProjectNumImagesCurrent$$ && pypLoadStep2(null)
    };
    $drawingCanvasImage$$.onload = function $$drawingCanvasImage$$$onload$() {
      drawingContext.drawImage(this, 0, 0);
      thumbnailCanvasContext.drawImage(this, 0, 0, 175, 125);
      $loadPYPProjectNumImagesCurrent$$++;
      5 <= $loadPYPProjectNumImagesCurrent$$ && pypLoadStep2(null)
    };
    $colorCanvasImage$$.onload = function $$colorCanvasImage$$$onload$() {
      colorContext.drawImage(this, 0, 0);
      $loadPYPProjectNumImagesCurrent$$++;
      5 <= $loadPYPProjectNumImagesCurrent$$ && pypLoadStep2(null)
    };
    $segmentCanvasImage$$.onload = function $$segmentCanvasImage$$$onload$() {
      segmentCanvasContext.drawImage(this, 0, 0);
      $loadPYPProjectNumImagesCurrent$$++;
      5 <= $loadPYPProjectNumImagesCurrent$$ && pypLoadStep2(null)
    };
    $(image).unbind("load");
    $(image).on("load", function() {
      context.drawImage(this, 0, 0);
      luminMap = context.createImageData(706, 508);
      contextData = context.getImageData(0, 0, 706, 508);
      for(var $ix$$ = 0;$ix$$ < drawingCanvasWidth;$ix$$++) {
        for(var $iy$$ = 0;$iy$$ < drawingCanvasHeight;$iy$$++) {
          var $i$$ = $iy$$ * 4 * drawingCanvasWidth + 4 * $ix$$, $fromColorLCH$$ = ColorUtilities.convertRGBToLAB(contextData.data[$i$$], contextData.data[$i$$ + 1], contextData.data[$i$$ + 2]);
          luminMap.data[$i$$] = $fromColorLCH$$[0]
        }
      }
      cLuminDataCanvas.width = W;
      cLuminDataCanvas.height = H;
      cLuminData = cLuminDataCanvas.getContext("2d").createImageData(706, 508).data;
      imgMain.src = $mainImageURL$$;
      $loadPYPProjectNumImagesCurrent$$++;
      5 <= $loadPYPProjectNumImagesCurrent$$ && pypLoadStep2(null)
    });
    var $mainImageURL$$ = sessionStorage.mainImage;
    $preDrawingCanvasImage$$.src = $mainImageURL$$;
    $drawingCanvasImage$$.src = sessionStorage.drawingCanvas;
    $colorCanvasImage$$.src = sessionStorage.colorCanvas;
    $segmentCanvasImage$$.src = sessionStorage.segmentCanvas;
    image.src = $mainImageURL$$
  }, 1E3)
}
function loadUserSavedImage($projectId$$) {
  $("div#overlay_loading_pyp_image").show();
  setCanvasVariables();
  clearAllCanvases();
  resetMaskingVariables();
  maskingLines = [];
  setTimeout(function() {
    var $loadPYPSavedImagesNumCurrent$$ = 0, $jsonUserSavedImage$$ = {}, $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$ = "http://" + getUserServiceURL() + "/project/nextgen/getproject?projectid=" + $projectId$$, $getUserSavedImageInfoServiceError$$ = !1;
    "userSession" == $projectId$$.substr(0, 11) ? ($getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$ = JSON.parse(localStorage.getItem($projectId$$)), $jsonUserSavedImage$$.thumbnail = $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.thumbnail, $jsonUserSavedImage$$.foundColors = JSON.stringify($getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.foundColors), $jsonUserSavedImage$$.foundLumins = JSON.stringify($getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.foundLumins), 
    $jsonUserSavedImage$$.mainImage = $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.mainImage, $jsonUserSavedImage$$.segmentCanvas = $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.segmentCanvas) : ($.ajax({type:"get", headers:{"Content-Type":"application/json"}, url:$getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$, data:"application/json", async:!1, cache:!1, success:function($json$$) {
      $json$$ = eval("(" + $json$$.NextGenProjectVO.jsonData + ")").NextGenProjectVO;
      $jsonUserSavedImage$$.foundColors = $json$$.foundColors;
      $jsonUserSavedImage$$.foundLumins = $json$$.foundLumins
    }, error:function($xhr$$) {
      $getUserSavedImageInfoServiceError$$ = !0;
      console.info("could not reach service")
    }}), $getUserSavedImageInfoServiceError$$ || ($getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$ = "http://" + getUserServiceURL() + "/project/nextgen/getprojectbinary?projectid=" + $projectId$$ + "&keys=all", $.ajax({type:"get", headers:{"Content-Type":"application/json"}, url:$getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$, data:"application/json", async:!1, cache:!1, success:function($response$$) {
      $jsonUserSavedImage$$.mainImage = $response$$.mainImage;
      $jsonUserSavedImage$$.segmentCanvas = $response$$.segmentCanvas
    }, error:function($xhr$$) {
      $getUserSavedImageInfoServiceError$$ = !0;
      console.info("could not reach service")
    }})));
    if($getUserSavedImageInfoServiceError$$) {
      $("div#overlay_loading_pyp_image").hide(), hideModal(), console.info("error loading image")
    }else {
      foundColors = JSON.parse($jsonUserSavedImage$$.foundColors);
      foundLumins = JSON.parse($jsonUserSavedImage$$.foundLumins);
      maskingLines = [];
      var $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$ = new Image, $drawingCanvasImage$$ = new Image, $segmentCanvasImage$$ = new Image;
      image = new Image;
      $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.onload = function $$getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$$onload$() {
        preDrawingContext.drawImage(this, 0, 0);
        $loadPYPSavedImagesNumCurrent$$++;
        4 <= $loadPYPSavedImagesNumCurrent$$ && pypLoadStep2($jsonUserSavedImage$$)
      };
      $drawingCanvasImage$$.onload = function $$drawingCanvasImage$$$onload$() {
        drawingContext.drawImage(this, 0, 0);
        thumbnailCanvasContext.drawImage(this, 0, 0, 175, 125);
        $loadPYPSavedImagesNumCurrent$$++;
        4 <= $loadPYPSavedImagesNumCurrent$$ && pypLoadStep2($jsonUserSavedImage$$)
      };
      $segmentCanvasImage$$.onload = function $$segmentCanvasImage$$$onload$() {
        segmentCanvasContext.drawImage(this, 0, 0);
        $loadPYPSavedImagesNumCurrent$$++;
        4 <= $loadPYPSavedImagesNumCurrent$$ && pypLoadStep2($jsonUserSavedImage$$)
      };
      $(image).unbind("load");
      $(image).on("load", function() {
        context.drawImage(this, 0, 0);
        luminMap = context.createImageData(706, 508);
        contextData = context.getImageData(0, 0, 706, 508);
        for(var $ix$$ = 0;$ix$$ < drawingCanvasWidth;$ix$$++) {
          for(var $iy$$ = 0;$iy$$ < drawingCanvasHeight;$iy$$++) {
            var $i$$ = $iy$$ * 4 * drawingCanvasWidth + 4 * $ix$$, $fromColorLCH$$ = ColorUtilities.convertRGBToLAB(contextData.data[$i$$], contextData.data[$i$$ + 1], contextData.data[$i$$ + 2]);
            luminMap.data[$i$$] = $fromColorLCH$$[0]
          }
        }
        cLuminDataCanvas.width = W;
        cLuminDataCanvas.height = H;
        cLuminData = cLuminDataCanvas.getContext("2d").createImageData(706, 508).data;
        imgMain.src = $mainImageURL$$;
        $loadPYPSavedImagesNumCurrent$$++;
        4 <= $loadPYPSavedImagesNumCurrent$$ && pypLoadStep2($jsonUserSavedImage$$)
      });
      var $mainImageURL$$ = $jsonUserSavedImage$$.mainImage;
      $getUserSavedImageCanvasURL_getUserSavedImageDataURL_preDrawingCanvasImage$$.src = $mainImageURL$$;
      $drawingCanvasImage$$.src = $mainImageURL$$;
      $segmentCanvasImage$$.src = $jsonUserSavedImage$$.segmentCanvas;
      image.src = $mainImageURL$$
    }
  }, 1E3)
}
function pypLoadStep2($pypProjectJSON_step2TempData$$) {
  createEdgeAndCanny();
  superLuminMap = context.createImageData(W, H);
  $pypProjectJSON_step2TempData$$ = new Uint8ClampedArray(segmentCanvasContext.getImageData(0, 0, W, H).data);
  for(var $W4$$ = 4 * W, $ix$$ = 0;$ix$$ < W;$ix$$++) {
    for(var $iy$$ = 0;$iy$$ < H;$iy$$++) {
      var $i$$ = $iy$$ * $W4$$ + 4 * $ix$$, $fromSegLCH$$ = ColorUtilities.convertRGBToLAB($pypProjectJSON_step2TempData$$[$i$$], $pypProjectJSON_step2TempData$$[$i$$ + 1], $pypProjectJSON_step2TempData$$[$i$$ + 2]);
      superLuminMap[$i$$] = $fromSegLCH$$[0]
    }
  }
  drawingCanvasToThumbnail();
  switchFromVisualizerToPYP();
  saveCanvasStates();
  $("div#overlay_loading_pyp_project").hide();
  $("div#overlay_loading_pyp_image").hide();
  hideModal()
}
function createEdgeAndCanny() {
  var $grayscaleImage$$1_preImage$$ = preDrawingContext.getImageData(0, 0, drawingCanvasWidth, drawingCanvasHeight), $smoothCanvas$$ = document.getElementById("smooth").getContext("2d"), $grayscaleCanvas$$1_sobelImage$$ = document.getElementById("grayscale").getContext("2d"), $cannyImage$$1_sobelCanvas$$ = document.getElementById("sobel").getContext("2d"), $cannyCanvas$$2_dilatatedImage$$ = document.getElementById("canny").getContext("2d"), $dilatationCanvas$$1_erosionImage$$ = document.getElementById("dilatation").getContext("2d"), 
  $erosionCanvas$$1_maskingCanvasURL$$ = document.getElementById("erosion").getContext("2d");
  $smoothCanvas$$.putImageData($grayscaleImage$$1_preImage$$, 0, 0);
  $grayscaleImage$$1_preImage$$ = image_desaturate($grayscaleImage$$1_preImage$$);
  $grayscaleCanvas$$1_sobelImage$$.putImageData($grayscaleImage$$1_preImage$$, 0, 0);
  $grayscaleCanvas$$1_sobelImage$$ = image_sobel($grayscaleImage$$1_preImage$$);
  $cannyImage$$1_sobelCanvas$$.putImageData($grayscaleCanvas$$1_sobelImage$$, 0, 0);
  $cannyImage$$1_sobelCanvas$$ = image_canny($grayscaleImage$$1_preImage$$, 0, 1, 0.5);
  $cannyCanvas$$2_dilatatedImage$$.putImageData($cannyImage$$1_sobelCanvas$$, 0, 0);
  $cannyCanvas$$2_dilatatedImage$$ = dilatation($grayscaleCanvas$$1_sobelImage$$);
  $dilatationCanvas$$1_erosionImage$$.putImageData($cannyCanvas$$2_dilatatedImage$$, 0, 0);
  $dilatationCanvas$$1_erosionImage$$ = erosion($cannyCanvas$$2_dilatatedImage$$);
  $erosionCanvas$$1_maskingCanvasURL$$.putImageData($dilatationCanvas$$1_erosionImage$$, 0, 0);
  context2.putImageData($dilatationCanvas$$1_erosionImage$$, 0, 0);
  $erosionCanvas$$1_maskingCanvasURL$$ = canEdge.toDataURL("image/png");
  imgEdge.src = $erosionCanvas$$1_maskingCanvasURL$$;
  image2 = new Image;
  image2.src = $erosionCanvas$$1_maskingCanvasURL$$;
  redrawMaskingLinesOnEdgeCanvas()
}
function redrawMaskingLinesOnEdgeCanvas() {
  for(var $i$$ = 0;$i$$ < maskingLines.length;$i$$++) {
    drawLine(maskingLines[$i$$], context2, "#0000ff")
  }
}
function getPYPSavedImageById($imageId$$) {
  var $jsonUserSavedImage$$ = {};
  return $jsonUserSavedImage$$ = jsonMockUserSavedImages[$imageId$$]
}
function drawingCanvasToThumbnail() {
  var $newDrawingCanvasImage$$ = new Image, $theDrawingCanvas$$ = document.getElementById("predrawing"), $theThumbnailCanvas$$ = document.getElementById("thumbnail");
  $newDrawingCanvasImage$$.onload = function $$newDrawingCanvasImage$$$onload$() {
    $theThumbnailCanvas$$.getContext("2d").drawImage(this, 0, 0, 175, 125)
  };
  $newDrawingCanvasImage$$.src = $theDrawingCanvas$$.toDataURL()
}
function clearAllCanvases() {
  drawingContext.clearRect(0, 0, 706, 508);
  context.clearRect(0, 0, 706, 508);
  context2.clearRect(0, 0, 706, 508);
  preDrawingContext.clearRect(0, 0, 706, 508);
  colorContext.clearRect(0, 0, 706, 508);
  newImageCanvasContext.clearRect(0, 0, 706, 508);
  newColorCanvasContext.clearRect(0, 0, 706, 508);
  cannyCanvasContext.clearRect(0, 0, 706, 508);
  segmentCanvasContext.clearRect(0, 0, 706, 508);
  thumbnailCanvasContext.clearRect(0, 0, 706, 508);
  imgMain.src = "";
  imgEdge.src = ""
}
function clearPYPSessionData() {
  sessionStorage.clear()
}
function clearVisualizerSessionData() {
}
function switchFromVisualizerToPYP() {
  clearVisualizerSessionData();
  userSession.setProjectAppType("pyp");
  saveCanvasStates();
  0 == userSession.palette.numColors() && $("div#disablePYP").show();
  $("#help div.help.tsh_firstPaint").remove();
  hideModal();
  $("div.canvas").hide();
  $("div.pypCanvas").show();
  $("div.editButtons.editButtonsViz").hide();
  $("div.editButtons.editButtonsPYP").show();
  _isPYPRoom = !0;
  doPYPPreview()
}
function doPYPPreview() {
  var $sourceCanvas$$ = document.getElementById("predrawing");
  document.getElementById("smallPYPPreview").getContext("2d").drawImage($sourceCanvas$$, 0, 0, 706, 508, 0, 0, 190, 136);
  $("div.smallPreview").hide();
  $("div.btnVisualize span").html('Paint Your Place<span style="font-size:10px; line-height:10px; vertical-align:middle; top:-3px;">&nbsp;&reg;</span>');
  $("div.previewControls div.preview ul.roomCarosuel").hide();
  $("div.previewControls div.preview div.smallPYPPreview").show()
}
function switchFromPYPToVisualizer() {
  clearAllPYPButtons();
  clearPYPSessionData();
  userSession.setProjectAppType("vis");
  $("div.pypCanvas").hide();
  $("div.editButtons.editButtonsPYP").hide();
  $("div.canvas").show();
  $("div.editButtons.editButtonsViz").show();
  _isPYPRoom = !1;
  $("div.btnVisualize span").html(Visualizer.PREVIEW_PAINT_COLORS);
  $("div.previewControls div.preview div.smallPYPPreview").hide();
  $("div.smallPreview").hide();
  $("div.previewControls div.preview ul.roomCarosuel").show()
}
function addNewImageToSessionImages() {
  var $newDrawingCanvasImage$$ = new Image, $theDrawingCanvas$$ = document.getElementById("predrawing"), $theThumbnailCanvas$$ = document.getElementById("thumbnail");
  $newDrawingCanvasImage$$.onload = function $$newDrawingCanvasImage$$$onload$() {
    $theThumbnailCanvas$$.getContext("2d").drawImage(this, 0, 0, 175, 125);
    if("undefined" !== typeof Storage) {
      var $newImageObject$$ = {};
      $newImageObject$$.foundColors = JSON.parse(sessionStorage.foundColors);
      $newImageObject$$.foundLumins = JSON.parse(sessionStorage.foundLumins);
      $newImageObject$$.mainImage = sessionStorage.mainImage;
      $newImageObject$$.segmentCanvas = sessionStorage.segmentCanvas;
      $newImageObject$$.thumbnail = document.getElementById("thumbnail").toDataURL();
      var $sessionImagesNextIndex$$ = sessionUserImages.length;
      if(7 <= $sessionImagesNextIndex$$) {
        sessionUserImages.shift();
        sessionUserImages.push($newImageObject$$);
        for(var $x$$ = 0;$x$$ < sessionUserImages.length;$x$$++) {
          localStorage.setItem("userSessionImage" + $x$$, JSON.stringify(sessionUserImages[$x$$]))
        }
        $sessionImagesNextIndex$$--
      }else {
        sessionUserImages.push($newImageObject$$)
      }
      localStorage.setItem("userSessionImage" + $sessionImagesNextIndex$$, JSON.stringify($newImageObject$$));
      sessionStorage.thumbnail = document.getElementById("thumbnail").toDataURL()
    }
    loadUserPYPSavedImages(roomPicker.display.find(".pyp.pyp_select"))
  };
  $newDrawingCanvasImage$$.src = $theDrawingCanvas$$.toDataURL()
}
function loadUserPYPSavedImages($pypSelectOverlay$$) {
  var $getUserImagesURL_myBehrUserID_x$$ = readCookie("mybehr_id"), $uniqueArray$$ = [];
  if($getUserImagesURL_myBehrUserID_x$$ && null != $getUserImagesURL_myBehrUserID_x$$ && "" != $getUserImagesURL_myBehrUserID_x$$) {
    var $getUserImagesURL_myBehrUserID_x$$ = "http://" + getUserServiceURL() + "/project/nextgen/getrecentimages?userid=" + $getUserImagesURL_myBehrUserID_x$$, $getUserImagesServiceError$$ = !1, $i$$ = !1;
    $.ajax({type:"get", headers:{"Content-Type":"application/json"}, url:$getUserImagesURL_myBehrUserID_x$$, data:"application/json", async:!1, cache:!1, success:function($response$$) {
      userSavedImagesThumbnails = $response$$;
      0 < userSavedImagesThumbnails.length && (userHasSavedImages = !0)
    }, error:function($xhr$$) {
      $getUserImagesServiceError$$ = !0;
      console.info("could not reach service")
    }});
    if(!$getUserImagesServiceError$$) {
      if(0 < userSavedImagesThumbnails.length) {
        for($getUserImagesURL_myBehrUserID_x$$ = 1;$getUserImagesURL_myBehrUserID_x$$ < userSavedImagesThumbnails.length;$getUserImagesURL_myBehrUserID_x$$++) {
          for(var $inUniqueArray$$ = !1, $thisNewObject_y$$ = 0;$thisNewObject_y$$ < $uniqueArray$$.length;$thisNewObject_y$$++) {
            userSavedImagesThumbnails[$getUserImagesURL_myBehrUserID_x$$].thumbnail == $uniqueArray$$[$thisNewObject_y$$].thumbnail && ($inUniqueArray$$ = !0, $thisNewObject_y$$ = $uniqueArray$$.length)
          }
          $inUniqueArray$$ || ($thisNewObject_y$$ = {}, $thisNewObject_y$$.projectId = userSavedImagesThumbnails[$getUserImagesURL_myBehrUserID_x$$].projectId, $thisNewObject_y$$.thumbnail = userSavedImagesThumbnails[$getUserImagesURL_myBehrUserID_x$$].thumbnail, $uniqueArray$$.unshift($thisNewObject_y$$))
        }
      }
      if(0 < $uniqueArray$$.length) {
        for($getUserImagesURL_myBehrUserID_x$$ = 0;$getUserImagesURL_myBehrUserID_x$$ < sessionUserImages.length;$getUserImagesURL_myBehrUserID_x$$++) {
          for($thisNewObject_y$$ = 0;$thisNewObject_y$$ < $uniqueArray$$.length;$thisNewObject_y$$++) {
            $inUniqueArray$$ = !1, sessionUserImages[$getUserImagesURL_myBehrUserID_x$$].thumbnail == $uniqueArray$$[$thisNewObject_y$$].thumbnail && ($inUniqueArray$$ = !0, $thisNewObject_y$$ = $uniqueArray$$.length)
          }
          $inUniqueArray$$ || ($thisNewObject_y$$ = {}, $thisNewObject_y$$.projectId = "userSessionImage" + $getUserImagesURL_myBehrUserID_x$$, $thisNewObject_y$$.thumbnail = sessionUserImages[$getUserImagesURL_myBehrUserID_x$$].thumbnail, $uniqueArray$$.unshift($thisNewObject_y$$))
        }
        $i$$ = !0
      }
    }
  }
  if(!$i$$) {
    for($getUserImagesURL_myBehrUserID_x$$ = 0;$getUserImagesURL_myBehrUserID_x$$ < sessionUserImages.length;$getUserImagesURL_myBehrUserID_x$$++) {
      $thisNewObject_y$$ = {}, $thisNewObject_y$$.projectId = "userSessionImage" + $getUserImagesURL_myBehrUserID_x$$, $thisNewObject_y$$.thumbnail = sessionUserImages[$getUserImagesURL_myBehrUserID_x$$].thumbnail, $uniqueArray$$.unshift($thisNewObject_y$$)
    }
  }
  $pypSelectOverlay$$ = $pypSelectOverlay$$.find(".pyp_user_images_container");
  $pypSelectOverlay$$.html("");
  for($i$$ = 0;$i$$ < $uniqueArray$$.length;$i$$++) {
    $pypSelectOverlay$$.append('<canvas width=175" height="125" class="userImage button" imageid="' + $uniqueArray$$[$i$$].projectId + '" id="userImage' + $i$$ + '"></canvas>')
  }
  loadUserPYPImages($uniqueArray$$, function($images$$) {
    var $z$$ = 0, $canvasToDraw$$, $img$$;
    for($img$$ in $images$$) {
      $canvasToDraw$$ = document.getElementById("userImage" + $z$$).getContext("2d"), $canvasToDraw$$.drawImage($images$$[$img$$], 0, 0, 175, 125), $z$$++
    }
  });
  $pypSelectOverlay$$.find("canvas").each(function($index$$) {
    $(this).unbind("click");
    $(this).on("click", function() {
      var $imageId$$ = $(this).attr("imageId");
      loadUserSavedImage($imageId$$)
    })
  })
}
function resetMaskingVariables() {
  maskingDrag = !1;
  maskingPolyArray = maskingCircleY = maskingCircleX = maskEndY = maskEndX = maskStartY = maskStartX = null;
  var $maskingCanvas$$ = document.getElementById("maskingTop");
  $maskingCanvas$$.width = $maskingCanvas$$.width
}
function hideVisualizerCanvas() {
  $("div.canvas").hide();
  $("div.editButtons.editButtonsViz").hide();
  $("div.editButtons.editButtonsPYP").show()
}
function setPaintClick() {
  $("canvas#maskingTop").unbind("click").bind("click", function($e$$) {
    var $dfdPaintClick$$ = $.Deferred();
    $("canvas#maskingTop").css("pointer-events", "none");
    showBusyOverlay();
    setTimeout(function() {
      $dfdPaintClick$$.done(handleClick($e$$, document.getElementById("drawing"))).done(hideBusyOverlay())
    }, 100);
    $e$$.stopPropagation();
    return!1
  })
}
function setBusyClick() {
  $("div#pypIsBusy").unbind("click").bind("click", function($e$$) {
    $e$$.stopPropagation();
    return!1
  })
}
function setUpPYPButtons() {
  $(".editButtonsPYP .pyp_button_brush").on("click", function() {
    doPaintSelect(this)
  });
  $(".editButtonsPYP .pyp_button_eraser").on("click", function() {
    doEraserSelect(this)
  });
  $(".editButtonsPYP .pyp_button_masking").on("click", function() {
    doMaskingSelect(this)
  });
  $(".pyptools_popup .circle").on("click", function() {
    doCircleSelect(this)
  });
  $(".pyptools_popup.pyptools_popup_eraser .circle").on("click", function() {
    doEraserCircleSelect(this)
  });
  $(".pyptools_popup.pyptools_popup_paint .image").on("click", function() {
    doPaintCanSelect(this)
  });
  $(".pyptools_popup.pyptools_popup_paint .circle").on("click", function() {
    doPaintCircleSelect(this)
  });
  $(".pyptools_popup.pyptools_popup_masking .image.image-line").on("click", function() {
    doLineMaskingSelect(this)
  });
  $(".pyptools_popup.pyptools_popup_masking .image.image-poly").on("click", function() {
    doPolyMaskingSelect(this)
  });
  $(".pyptools_popup.pyptools_popup_masking .remove_all").on("click", function() {
    removeAllMasking()
  });
  $(".pyptools_popup.pyptools_popup_masking .show_hide").on("click", function() {
    doShowHideMasking(this)
  });
  $(".pyptools_slider").bind("mousedown touchstart", function($e$$) {
    startSliderMove($e$$, this)
  });
  $(".pyptools_slider .main_triangle").bind("mousedown touchstart", function($e$$) {
    startPYPSlider($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(".pyptools_slider .small_triangle").bind("mousedown touchstart", function($e$$) {
    startPYPSlider($e$$, this);
    $e$$.stopPropagation();
    return!1
  });
  $(".pyptools_slider .slider_content").bind("mousedown touchstart", function($e$$) {
    $e$$.stopPropagation();
    return!1
  });
  $(".pyptools_slider .slider_close_button").bind("mousedown touchstart", function($e$$) {
    hidePaintSliderByUser();
    $e$$.stopPropagation();
    return!1
  });
  $(".editButtonsPYP .pyp_tools_edit .pyp_button_unpaint").on("click", function() {
    doUnpaintImage()
  });
  $(".editButtonsPYP .pyp_button").on("click", removeHelpPYP);
  $(".pyp_button.pyp_button_help").unbind("click").bind("click", function() {
    showOuterTooltip()
  });
  $(".rotate_photo_button").unbind("click").bind("click", function() {
    rotatePhoto()
  });
  $(".position_photo_arrow.position_photo_arrow_up").unbind("click").bind("click", function() {
    positionPhotoByClick(0)
  });
  $(".position_photo_arrow.position_photo_arrow_down").unbind("click").bind("click", function() {
    positionPhotoByClick(1)
  });
  $(".position_photo_arrow.position_photo_arrow_left").unbind("click").bind("click", function() {
    positionPhotoByClick(2)
  });
  $(".position_photo_arrow.position_photo_arrow_right").unbind("click").bind("click", function() {
    positionPhotoByClick(3)
  });
  setPaintClick();
  setBusyClick()
}
function removeHelpPYP() {
  helpManager.removeHelp($(".help.tsh_firstPaint"));
  $(".editButtonsPYP .pyp_button").unbind("click", removeHelpPYP)
}
function showBusyOverlay() {
  console.info("busy");
  $("div#pypIsBusy").show()
}
function hideBusyOverlay() {
  setTimeout(function($e$$) {
    $("canvas#maskingTop").css("pointer-events", "auto");
    $("div#pypIsBusy").hide()
  }, 100)
}
function checkColorMap($init_x$$) {
  for(var $colorCanvasImageMap_y$$ = colorContext.getImageData(0, 0, 706, 508), $colors$$ = [];358648 > $init_x$$;$init_x$$ += 4) {
    var $thisColor$$ = $colorCanvasImageMap_y$$.data[$init_x$$];
    -1 == $.inArray($thisColor$$, $colors$$) && $colors$$.push($thisColor$$)
  }
  for($colorCanvasImageMap_y$$ = 0;$colorCanvasImageMap_y$$ < $colors$$.length;$colorCanvasImageMap_y$$++) {
    console.info("colorsArray[" + $colorCanvasImageMap_y$$ + "] = " + $colors$$[$colorCanvasImageMap_y$$])
  }
}
;var IMAGE_ROOT = "", SERVICE_ROOT = -1 !== location.host.indexOf("localhost") ? "" : "/paint", EXTERNAL_LINK_ROOT = -1 !== document.URL.toLowerCase().indexOf("consumer") ? "/consumer/" : "/pro/", CONTEXT_ROOT = "/consumer/";
-1 !== document.URL.toLowerCase().indexOf("/consumer/") ? CONTEXT_ROOT = "/consumer/" : -1 !== document.URL.toLowerCase().indexOf("/consumer_ca/") ? CONTEXT_ROOT = "/consumer_ca/" : -1 !== document.URL.toLowerCase().indexOf("/pro/") ? CONTEXT_ROOT = "/pro/" : -1 !== document.URL.toLowerCase().indexOf("/architect/") && (CONTEXT_ROOT = "/architect/");
var COLOR_MODEL = SERVICE_ROOT + "/services/colornx", COLOR_MODEL_NX = SERVICE_ROOT + "/services/colornx";
"undefined" == typeof console && (console = {log:function $console$log$($a$$) {
}, info:function $console$info$($a$$) {
}, error:function $console$error$($a$$) {
}});
var query = location.search, _isPYPRoom = !1, DragType = {UserPalette:0, ColorSearch:1}, maskingIsShowing = !0, mouseCoords = {x:0, y:0}, mouseDown = !1, mobile = !1, currentPage = null, currentModules = [], helpManager = null, roomPicker = null, processing = null, page = null, templates = null, modal = null, help = null, colorsmart = null, curtain = null, colorCompare = null, renameProject = null, myProjects = null, saveProject = null, visualizer = null, buyNow = null, paintCalc = null, buyNowPage = 
null, projectSummary = null, fiveGalSuggestion = null, oneCoat = null, genericMessage = null, aboutSheenExtPP = null, aboutSheenExtUL = null, aboutSheenExtMQ = null, aboutSheenIntPP = null, aboutSheenIntUL = null, aboutSheenInt = null, zipcodeValidate = null, userSession, loginInterceptedModal = null, loginInterceptedFunction = null, currentModal = null, undoRedoStack = null, pypIntroContent = "standard", colorTooltip = {display:null, carat:null};
function DragData($args$$) {
  if($args$$) {
    for(var $i$$ in $args$$) {
      this[$i$$] = $args$$[$i$$]
    }
  }
}
var dragOp = {dragging:!1, data:null, stopDrag:function() {
  this.dragging = !1;
  this.data = null
}, startDrag:function($data$$) {
  this.dragging = !0;
  this.data = $data$$
}};
function __preparedOverlayInjection($m$$) {
  console.info("recall user saved images on login");
  loadUserPYPSavedImages(roomPicker.display.find(".pyp.pyp_select"));
  if("overlay-signup_login-success" === $m$$.attr("id") || "overlay-color_save_success" === $m$$.attr("id")) {
    userSession.isLoggedIn() || userSession.loadUserData(getCookie("mybehr_id")), $m$$.on("remove", function() {
      loginInterceptedModal && showModal(loginInterceptedModal);
      loginInterceptedModal = null;
      console.info(loginInterceptedFunction);
      loginInterceptedFunction && setTimeout(function() {
        loginInterceptedFunction();
        loginInterceptedFunction = null
      }, 10);
      $m$$.off("remove")
    })
  }
}
var __addPreparedOverlay = addPreparedOverlay;
addPreparedOverlay = function $addPreparedOverlay$($m$$) {
  __addPreparedOverlay($m$$);
  __preparedOverlayInjection($m$$)
};
var __addPreparedOverlayShare = addPreparedOverlayShare;
addPreparedOverlayShare = function $addPreparedOverlayShare$($m$$, $s$$) {
  __addPreparedOverlayShare($m$$, $s$$);
  __preparedOverlayInjection($m$$)
};
var __overlayLoginSuccess = overlayLoginSuccess;
overlayLoginSuccess = function $overlayLoginSuccess$() {
  console.info("Replaced overlay login");
  __overlayLoginSuccess()
};
$(document).ready(function() {
  hashParam = window.location.href.split("#")[1];
  page = $("#page");
  buyNowPage = $("#buy_now_page");
  if(!document.createElement || !document.createElement("canvas").getContext) {
    page.append($(".BrowserNotSupported"))
  }else {
    if(android = /Android/i.test(navigator.userAgent), chrome = /Chrome/i.test(navigator.userAgent), android && !chrome) {
      page.append($(".AndroidNotSupported"))
    }else {
      mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
      console.info("mobile: ", mobile);
      window.location.replace("#");
      colorsmart = $("#colorsmart");
      $("body").bind("mousedown touchstart", function($e$$) {
        mouseDown = !0
      });
      $("body").bind("mouseup touchend", function($e$$) {
        mouseDown = !1
      });
      $("body").bind("mousemove touchmove", function($e$$) {
        $e$$ = getMouseEventData($e$$);
        mouseCoords.x = $e$$.pageX;
        mouseCoords.y = $e$$.pageY
      });
      undoRedoStack = new UndoRedoStack;
      userSession = new UserSession;
      helpManager = new HelpManager;
      curtain = new Curtain($("#curtain"));
      help = $("#help");
      templates = $("#templates");
      processing = $("#proc");
      modal = $("#modal");
      roomPicker = addModuleToModal("RoomPicker");
      colorCompare = addModuleToModal(ColorCompare.NAME);
      paintCalc = addModuleToModal(PaintCalc.NAME);
      renameProject = addModuleToModal(RenameProject.NAME);
      saveProject = addModuleToModal(SaveProject.NAME);
      startOverAlert = addModuleToModal(StartOverAlert.NAME);
      myProjects = addModuleToModal(MyProjects.NAME);
      projectSummary = addModuleToModal(ProjectSummary.NAME);
      genericMessage = addModuleToModal(GenericMessage.NAME);
      fiveGalSuggestion = addModuleToModal(FiveGalSuggestion.NAME);
      aboutSheenIntMQ = addModuleToModal(AboutSheenIntMQ.NAME);
      aboutSheenIntPP = addModuleToModal(AboutSheenIntPP.NAME);
      aboutSheenIntUL = addModuleToModal(AboutSheenIntUL.NAME);
      aboutSheenExtPP = addModuleToModal(AboutSheenExtPP.NAME);
      aboutSheenExtUL = addModuleToModal(AboutSheenExtUL.NAME);
      aboutSheenExtMQ = addModuleToModal(AboutSheenExtMQ.NAME);
      zipcodeValidate = addModuleToModal(ZipcodeValidate.NAME);
      oneCoat = addModuleToModal(OneCoat.NAME);
      colorTooltip.display = $(".colorTooltip");
      colorTooltip.carat = colorTooltip.display.find(".carat");
      colorTooltip.display.remove();
      $("body").append(colorTooltip.display);
      var $__color___prj_buycolors_i$$ = {}, $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = getParameterByName("family");
      $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ && ($__color___prj_buycolors_i$$.family = $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$);
      if($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = getParameterByName("section")) {
        $__color___prj_buycolors_i$$.section = $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$
      }
      buyNow = loadModule(BuyNow.NAME, $__color___prj_buycolors_i$$);
      buyNowPage.append(buyNow.display);
      visualizer = loadModule(Visualizer.NAME, $__color___prj_buycolors_i$$);
      visualizer.setPalette(userSession.palette);
      visualizer.load(_rooms);
      visualizer.attachRoomPicker(roomPicker);
      roomPicker.load(_rooms);
      page.append(visualizer.display);
      "start" == getParameterByName("pyp") ? (pypIntroContent = "pypdeeplink", "undefined" === typeof currentColor && (currentColor = nullColor, $("div#disablePYP").show()), window.location.hash = "paint", $("div.paletteArea div.initial.initial-pyp").show(), visualizer.showRoomPicker(), $("a.orange_button-pyp_add_a_color").unbind().bind("click", function($e$$) {
        location.hash = "colors"
      })) : $("div.paletteArea div.initial.initial-pyp").hide();
      userSession.bind(UserSession.ON_LOAD, function($e$$) {
        loadUserProjectState($e$$.bindings)
      });
      $__color___prj_buycolors_i$$ = getCookie("mybehr_id");
      $__color___prj_buycolors_i$$ || ($__color___prj_buycolors_i$$ = getCookie("userData"), null != $__color___prj_buycolors_i$$ && eval("userData = " + $__color___prj_buycolors_i$$));
      userSession.loadUserData($__color___prj_buycolors_i$$);
      setTimeout(function() {
        ("paint" == window.location.href.split("#")[1] || getParameterByName("color") || getParameterByName("palette") || getParameterByName("project") || getParameterByName("qpalette")) && $(window).scrollTop(colorsmart.offset().top)
      }, 1);
      var $redirectTo$$ = getParameterByName("redirectTo"), $__color___prj_buycolors_i$$ = getParameterByName("buy");
      "buynow" == $redirectTo$$ && $("#white_curtain").show();
      if($__color___prj_buycolors_i$$) {
        $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = $__color___prj_buycolors_i$$.split(",");
        8 < $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.length && $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.splice(8, $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.length - 8);
        for($__color___prj_buycolors_i$$ = 0;$__color___prj_buycolors_i$$ < $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.length;$__color___prj_buycolors_i$$++) {
          var $color$$ = $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$[$__color___prj_buycolors_i$$];
          $color$$ && colorLookup[$color$$] && userSession.palette.addColor(colorLookup[$color$$], !0)
        }
        $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = visualizer.room.paletteBindings;
        for($__color___prj_buycolors_i$$ = 0;$__color___prj_buycolors_i$$ < $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.length;$__color___prj_buycolors_i$$++) {
          $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$[$__color___prj_buycolors_i$$] = -1
        }
        visualizer.room.setBindings($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$, UndoRedoStack.IGNORE);
        visualizer.isRoom = !1;
        userSession._roomSelected = !1;
        undoRedoStack.clear();
        $("#white_curtain").show();
        setTimeout(function() {
          visualizer.buyPaints()
        }, UserSession.AUTO_SAVE_DELAY)
      }else {
        if($__color___prj_buycolors_i$$ = getParameterByName("project")) {
          if(found = userSession.loadProject($__color___prj_buycolors_i$$)) {
            undoRedoStack.clear();
            userSession._roomSelected = !0;
            window.location.hash = "paint";
            setUpPYPButtons();
            return
          }
        }else {
          if(($__color___prj_buycolors_i$$ = getParameterByName("color")) && colorLookup[$__color___prj_buycolors_i$$]) {
            userSession.palette.addColor(colorLookup[$__color___prj_buycolors_i$$], !0);
            $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = visualizer.room.paletteBindings;
            for($__color___prj_buycolors_i$$ = 0;$__color___prj_buycolors_i$$ < $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.length;$__color___prj_buycolors_i$$++) {
              $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$[$__color___prj_buycolors_i$$] = 0
            }
            visualizer.room.setBindings($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$, UndoRedoStack.IGNORE);
            window.location.hash = "paint";
            setUpPYPButtons();
            return
          }
          $__color___prj_buycolors_i$$ = getParameterByName("palette");
          $color$$ = getParameterByName("qpalette");
          if($__color___prj_buycolors_i$$ || $color$$) {
            $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = !1;
            $color$$ && ($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = !0, $__color___prj_buycolors_i$$ = $color$$);
            for(var $colors$$ = $__color___prj_buycolors_i$$.split(","), $__color___prj_buycolors_i$$ = 0;$__color___prj_buycolors_i$$ < $colors$$.length;$__color___prj_buycolors_i$$++) {
              $color$$ = colorLookup[$colors$$[$__color___prj_buycolors_i$$]], $colors$$[$__color___prj_buycolors_i$$] = $color$$
            }
            if(!$__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ || 4 != $colors$$.length) {
              for($__color___prj_buycolors_i$$ = 0;$__color___prj_buycolors_i$$ < $colors$$.length;$__color___prj_buycolors_i$$++) {
                $colors$$[$__color___prj_buycolors_i$$] && userSession.palette.addColor($colors$$[$__color___prj_buycolors_i$$], !0)
              }
            }else {
              visualizer.applyQuadPaletteColors([-1, -1, -1, -1], $colors$$), visualizer.quadPalette.generateColors(visualizer.palette.paletteData.colors)
            }
            window.location.hash = "paint";
            setUpPYPButtons();
            undoRedoStack.clear();
            return
          }
        }
        if($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = getCookie("projectData")) {
          if(console.info("Loading projectData from cookie"), $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ = eval("(" + $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$ + ")"), console.info($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$, $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.palette), $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.palette) {
            console.info("Found project palette data");
            for($__color___prj_buycolors_i$$ = 0;$__color___prj_buycolors_i$$ < $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.palette.length;$__color___prj_buycolors_i$$++) {
              if(null != $__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$.palette[$__color___prj_buycolors_i$$]) {
                userSession.load($__defaultFamily___defaultSection_bindings_colorIds_projectData_q$$);
                break
              }
            }
          }
        }
        undoRedoStack.clear();
        setTimeout(function() {
          "buynow" == $redirectTo$$ && (visualizer.redirectToBuyNow(), $("#white_curtain").hide())
        }, UserSession.AUTO_SAVE_DELAY + 10);
        setUpPYPButtons();
        $(".btnOneCoat").unbind().bind("click", function() {
          window.location.hash = "colors";
          visualizer.colorBrowser.selectTab(3);
          visualizer.colorBrowser.marquee.selectSection("oneCoatFamilies", "1")
        })
      }
    }
  }
});
jQuery.fn.center = function $jQuery$fn$center$($x$$, $y$$) {
  var $o$$ = $("#colorsmart").offset();
  !1 !== $x$$ && this.css("left", Math.max(0, ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()) + "px");
  !1 !== $y$$ && this.css("top", Math.max(0, ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop() - $o$$.top / 2) + "px");
  return this
};
function shareMyBehrProject($media$$) {
  var $id$$ = userSession.saveAnonymousProject(), $urlToShare$$ = getMyBehrProjectUrl($id$$, $media$$);
  "email" == $media$$ ? (showOverlayByIDshare("email_page", $urlToShare$$.URL), fillSendPageByEmail()) : "facebook" == $media$$ ? shareFBProject($urlToShare$$, $id$$) : "twitter" == $media$$ ? createPopup("http://twitter.com/share?text=&url=" + $urlToShare$$.URL, "twitter", 575, 400) : "pinterest" == $media$$ && createPopup("http://pinterest.com/pin/create/button/?title=MyBEHR&media=" + $urlToShare$$.imgURL + "&description=" + $urlToShare$$.colorDesc + "&url=" + $urlToShare$$.URL, "pinterest", 667, 
  631)
}
function loadUserProjectState($b$$19_bindings$$1_cn_n$$) {
  visualizer.palette.clear();
  visualizer.palette.setSelectedTab(userSession.paletteIndex);
  visualizer.setUserRoomBindings(userSession.bindings);
  null != userSession.currentRoomId && !isNaN(userSession.currentRoomId) && visualizer.showRoomById(userSession.currentRoomId);
  $b$$19_bindings$$1_cn_n$$ = userSession.getCurrentRoomBindings();
  userSession.paletteQuad ? (visualizer.applyQuadPaletteColors($b$$19_bindings$$1_cn_n$$, visualizer.palette.paletteData.colors), visualizer.quadPalette.generateColors([visualizer.palette.paletteData.colors[0]])) : (visualizer.palette._setQuad(!1), visualizer.room.setBindings($b$$19_bindings$$1_cn_n$$));
  visualizer.onColorsUpdatedHandler();
  visualizer.showCoordinatedText();
  if($b$$19_bindings$$1_cn_n$$ = getCookie("vcpstatus")) {
    $b$$19_bindings$$1_cn_n$$ = $b$$19_bindings$$1_cn_n$$.split(",");
    $b$$19_bindings$$1_cn_n$$ instanceof Array || ($b$$19_bindings$$1_cn_n$$ = [$b$$19_bindings$$1_cn_n$$]);
    for(var $c$$ = visualizer.palette.paletteData.colors, $match$$ = !0, $i$$ = 0;$i$$ < $c$$.length && $match$$;$i$$++) {
      "" == $b$$19_bindings$$1_cn_n$$[$i$$] ? null != $c$$[$i$$] && ($match$$ = !1) : $b$$19_bindings$$1_cn_n$$[$i$$] != $c$$[$i$$].id && ($match$$ = !1)
    }
    $match$$ && this.visualizer.display.find(".buy").text("View Cart")
  }
  !getParameterByName("section") && !getParameterByName("family") && (window.location.hash = "paint")
}
function trySaveProject($restart$$, $forceNew$$) {
  if(userSession.projectId && !$forceNew$$) {
    if($restart$$) {
      var $success$$ = function $$success$$$() {
        startOver(!1)
      }, $error$$ = function $$error$$$() {
        userSession.unbind(UserSession.ON_UPDATE_COMPLETE, $success$$);
        userSession.unbind(UserSession.ON_ERROR, $error$$);
        alert("Something went wrong! Failed to save project.")
      };
      userSession.bind(UserSession.ON_UPDATE_COMPLETE, $success$$);
      userSession.bind(UserSession.ON_ERROR, $error$$)
    }
    console.info("Update");
    userSession.updateProject()
  }else {
    $restart$$ && (saveProject.restartAfter = !0), loginIntercept(saveProject)
  }
}
function showMyProjects() {
  loginIntercept(myProjects)
}
function loginIntercept($intercepted$$) {
  userSession.isLoggedIn() ? $intercepted$$ instanceof Modal ? showModal($intercepted$$) : "function" === typeof $intercepted$$ && $intercepted$$() : (loginInterceptedFunction = loginInterceptedModal = null, $intercepted$$ instanceof Modal ? loginInterceptedModal = $intercepted$$ : "function" === typeof $intercepted$$ && (loginInterceptedFunction = $intercepted$$), showOverlayByID("signup_login"))
}
function saveNewProject($restart$$) {
  if($restart$$) {
    var $success$$ = function $$success$$$() {
      startOver(!1)
    }, $error$$ = function $$error$$$() {
      userSession.unbind(UserSession.ON_SAVE_COMPLETE, $success$$);
      userSession.unbind(UserSession.ON_ERROR, $error$$);
      alert("Something went wrong! Failed to save your project.")
    };
    userSession.bind(UserSession.ON_SAVE_COMPLETE, $success$$);
    userSession.bind(UserSession.ON_ERROR, $error$$)
  }
  userSession.saveProject()
}
function showTooltip($name$$56_top$$, $id$$5_o$$, $left$$) {
  var $t$$ = colorTooltip.display, $c$$ = colorTooltip.carat;
  $t$$.find("span").html($name$$56_top$$.toLowerCase() + "<br>" + $id$$5_o$$);
  $id$$5_o$$ = $left$$.offset();
  $name$$56_top$$ = $id$$5_o$$.top - $t$$.outerHeight() - 10;
  $left$$ = $id$$5_o$$.left + $left$$.outerWidth() / 2 - $t$$.outerWidth() / 2;
  $t$$.css("top", $name$$56_top$$ + "px");
  $t$$.css("left", $left$$ + "px");
  $c$$.css("left", $t$$.outerWidth() / 2 - $c$$.outerWidth() / 2);
  $t$$.show()
}
function hideTooltip() {
  colorTooltip.display.hide()
}
function showStartOver() {
  showModal(startOverAlert)
}
function startOver($save$$) {
  $save$$ ? trySaveProject(!0) : (deleteCookie("projectData"), window.location.href = window.location.href.split("?")[0].split("#")[0])
}
function addModuleToModal($module$$) {
  "string" == typeof $module$$ && ($module$$ = loadModule($module$$));
  $module$$.hide();
  modal.append($module$$.display);
  return $module$$
}
function loadModule($moduleName$$, $params$$) {
  var $template$$ = loadModuleDisplay($moduleName$$);
  if(null == $template$$) {
    console.error("Failed to load module ", $moduleName$$)
  }else {
    return processing.append($template$$), new window[$moduleName$$]($template$$, $params$$)
  }
}
function loadModuleDisplay($moduleName$$1_template$$) {
  $moduleName$$1_template$$ = templates.find("." + $moduleName$$1_template$$);
  if(0 == $moduleName$$1_template$$.length) {
    return null
  }
  $moduleName$$1_template$$ = $moduleName$$1_template$$.clone();
  $moduleName$$1_template$$.addClass("module");
  return $moduleName$$1_template$$
}
function showModal($module$$, $x$$, $y$$) {
  console.info("Showing modal:", $module$$);
  hideModal();
  $module$$ && (curtain.show(), $y$$ || ($y$$ = colorsmart.offset().top), $module$$.show($x$$, $y$$));
  currentModal = $module$$;
  curtain._resize()
}
function hideModal($module$$) {
  if(null == $module$$ || void 0 == $module$$) {
    null != currentModal && ($module$$ = currentModal)
  }
  curtain.hide();
  $module$$ && $module$$.hide();
  currentModal = null
}
function HelpManager() {
  this.__closed = [];
  this.__showingHotspots = !1;
  this.showHelp = function $this$showHelp$($template$$, $forceDisplay$$) {
    var $body$$ = $("body"), $obj$$ = this;
    if(null != $template$$.attr("class")) {
      for(var $classes$$ = $template$$.attr("class").split(" "), $classesString$$ = "", $closeAA_i$$ = 0;$closeAA_i$$ < $classes$$.length;$closeAA_i$$++) {
        $classesString$$ += "." + $classes$$[$closeAA_i$$]
      }
      if(-1 == $.inArray($classesString$$, this.__closed) && 1 > help.find($classesString$$).length || !0 === $forceDisplay$$) {
        var $c$$ = $template$$.clone();
        help.append($c$$);
        $c$$.fadeIn(250);
        var $closeAA_i$$ = -1 != $.inArray("b_closeAA", $classes$$), $alwaysShow$$ = -1 != $.inArray("b_alwaysOn", $classes$$);
        $c$$.on("click", $close$$);
        var $close$$ = function $$close$$$() {
          $c$$.fadeOut(250, function() {
            $c$$.remove()
          });
          $alwaysShow$$ || $obj$$.__closed.push($classesString$$);
          $body$$.off("mousedown", null, $close$$)
        };
        $closeAA_i$$ && ($body$$.on("mousedown", null, $close$$), $(window).on("hashchange", null, $close$$))
      }
    }
  };
  this._getClassesString = function $this$_getClassesString$($classes$$1_template$$) {
    if(null == $classes$$1_template$$.attr("class")) {
      return null
    }
    $classes$$1_template$$ = $classes$$1_template$$.attr("class").split(" ");
    for(var $classesString$$ = "", $i$$ = 0;$i$$ < $classes$$1_template$$.length;$i$$++) {
      $classesString$$ += "." + $classes$$1_template$$[$i$$]
    }
    return $classesString$$
  };
  this.removeHelp = function $this$removeHelp$($cs_name$$, $permanent$$, $instant$$) {
    var $c$$ = help.find($cs_name$$);
    !1 !== $permanent$$ && ($cs_name$$ = this._getClassesString($c$$), this.__closed.push($cs_name$$));
    $instant$$ ? $c$$.remove() : $c$$.fadeOut(250, function() {
      $c$$.remove()
    })
  };
  this.closeAll = function $this$closeAll$() {
    var $h$$ = help.find(".help");
    $h$$.fadeOut(250, function() {
      $h$$.remove()
    });
    help.find(".helpFlag").fadeOut(250, function() {
      $h$$.remove()
    })
  };
  this.toggleHotspots = function $this$toggleHotspots$() {
    this.__showingHotspots ? this.hideHotspots() : this.showHotspots()
  };
  this.showHotspots = function $this$showHotspots$() {
    this.__showingHotspots = !0;
    var $obj$$ = this;
    $(".helpHotspots").fadeIn(100);
    $(".spot").on("click", function($classes$$2_e$$) {
      $classes$$2_e$$.stopImmediatePropagation();
      $classes$$2_e$$ = $(this).attr("class").split(" ");
      1 < $classes$$2_e$$.length && ($classes$$2_e$$ = $(".help." + $classes$$2_e$$[1]), console.info($classes$$2_e$$.length), 0 < $classes$$2_e$$.length && ($classes$$2_e$$ = $($classes$$2_e$$[0]), $obj$$.showHelp($classes$$2_e$$, !0)))
    })
  };
  this.hideHotspots = function $this$hideHotspots$() {
    this.__showingHotspots = !1;
    $(".helpHotspots").fadeOut(100, function() {
      $(this).hide()
    });
    $(".spot").off("click")
  }
}
function UndoRedoStack() {
  this._undo = [];
  this._redo = [];
  this._delay = null;
  this.redo = function $this$redo$() {
    if(0 < this._redo.length && null == this._delay) {
      var $obj$$ = this;
      this._delay = setTimeout(function() {
        $obj$$._delay = null
      }, 200);
      var $x$$ = this._redo.pop();
      $x$$ && $x$$.m.apply($x$$.o, $x$$.p);
      0 == this._redo.length ? $(".redo").addClass("inactive") : $(".redo").removeClass("inactive")
    }
  };
  this.undo = function $this$undo$() {
    if(0 < this._undo.length && null == this._delay) {
      var $obj$$ = this;
      this._delay = setTimeout(function() {
        $obj$$._delay = null
      }, 200);
      var $x$$ = this._undo.pop();
      $x$$ && $x$$.m.apply($x$$.o, $x$$.p);
      0 == this._undo.length ? $(".undo").addClass("inactive") : $(".undo").removeClass("inactive")
    }
  };
  this.register = function $this$register$($obj$$, $method$$, $parameters$$, $direction$$, $state$$) {
    if($direction$$ != UndoRedoStack.IGNORE) {
      if(null == $direction$$ || void 0 == $direction$$ || !1 == $direction$$) {
        $parameters$$.push(!0);
        $parameters$$.push($state$$);
        this._undo.push({o:$obj$$, m:$method$$, p:$parameters$$});
        if(null == $direction$$ || void 0 == $direction$$) {
          this._redo = [], $(".redo").addClass("inactive")
        }
        $(".undo").removeClass("inactive")
      }else {
        $parameters$$.push(!1), $parameters$$.push($state$$), this._redo.push({o:$obj$$, m:$method$$, p:$parameters$$}), $(".redo").removeClass("inactive")
      }
    }
  };
  this.updateButtons = function $this$updateButtons$() {
    0 == this._undo.length ? $(".undo").addClass("inactive") : $(".undo").removeClass("inactive");
    0 == this._redo.length ? $(".redo").addClass("inactive") : $(".redo").removeClass("inactive")
  };
  this.clear = function $this$clear$() {
    this._undo = [];
    this._redo = [];
    this.updateButtons()
  }
}
UndoRedoStack.IGNORE = "ignore";
function Curtain($display$$) {
  this.display = $display$$;
  this._hiding = !1;
  this.opaque = function $this$opaque$($value$$) {
    this.display.css("opacity", $value$$ ? 0.2 : 0)
  };
  this.show = function $this$show$() {
    this.display.show();
    this.opaque(!0);
    this._hiding = !1;
    this._resize()
  };
  this.hide = function $this$hide$() {
    var $obj$$ = this;
    this._hiding = !0;
    this.opaque(!1);
    setTimeout(function() {
      $obj$$.fadeEnd()
    }, 0.2)
  };
  this._resize = function $this$_resize$() {
    if(!this.__hiding) {
      var $o$$ = colorsmart.offset(), $b$$ = $("body");
      this.display.css("top", -$o$$.top + "px");
      this.display.width($b$$.width());
      this.display.height($b$$.height())
    }
  };
  this._init = function $this$_init$() {
    var $obj$$ = this;
    this.display.click(function($e$$) {
      hideModal()
    });
    window.onresize = function $window$onresize$($e$$) {
      $obj$$._resize()
    }
  };
  this.fadeEnd = function $this$fadeEnd$() {
    this._hiding && this.display.hide()
  };
  this._init()
}
function EventDispatcher($target$$, $eventList$$) {
  this._Events = {};
  this.target = $target$$;
  this.eventDispatcher = this;
  this.bind = function $this$bind$($event$$, $handler$$, $data$$) {
    $event$$ = $event$$.toLowerCase();
    if(void 0 != this.eventDispatcher._Events[$event$$] && "function" == typeof $handler$$) {
      for(var $firstNull$$ = -1, $i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
        if(null == this.eventDispatcher._Events[$event$$][$i$$]) {
          $firstNull$$ = $i$$;
          break
        }
      }
      -1 == $firstNull$$ && ($firstNull$$ = this.eventDispatcher._Events[$event$$].length);
      this.eventDispatcher._Events[$event$$][$firstNull$$] = [$handler$$, $data$$]
    }
  };
  this.unbind = function $this$unbind$($event$$, $handler$$) {
    $event$$ = $event$$.toLowerCase();
    if(void 0 != this.eventDispatcher._Events[$event$$]) {
      if($handler$$) {
        for(var $i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
          null != this.eventDispatcher._Events[$event$$][$i$$] && this.eventDispatcher._Events[$event$$][$i$$][0] == $handler$$ && (this.eventDispatcher._Events[$event$$][$i$$] = null)
        }
      }else {
        for($i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
          this.eventDispatcher._Events[$event$$][$i$$] = null
        }
      }
    }
  };
  this.dispatchEvent = function $this$dispatchEvent$($event$$, $eventObject$$) {
    $event$$ = $event$$.toLowerCase();
    "object" != typeof $eventObject$$ && ($eventObject$$ = {});
    if(this.eventDispatcher._Events[$event$$]) {
      for(var $i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
        var $e$$ = this.eventDispatcher._Events[$event$$][$i$$];
        null != $e$$ && ($eventObject$$.data = $e$$[1], $e$$[0]($eventObject$$))
      }
    }
  };
  this.bindEvents = function $this$bindEvents$($list$$) {
    for(var $i$$ = 0;$i$$ < $list$$.length;$i$$++) {
      this._Events[$list$$[$i$$].toLowerCase()] = []
    }
  };
  this._init = function $this$_init$($eventList$$) {
    this.bindEvents($eventList$$)
  };
  this._init($eventList$$)
}
EventDispatcher.enableEvents = function $EventDispatcher$enableEvents$($target$$) {
  for(var $args$$1_e$$ = [], $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    $args$$1_e$$[$i$$ - 1] = arguments[$i$$]
  }
  $target$$.eventDispatcher ? $target$$.eventDispatcher.bindEvents($args$$1_e$$) : ($args$$1_e$$ = new EventDispatcher($target$$, $args$$1_e$$), $target$$.bind = $args$$1_e$$.bind, $target$$.unbind = $args$$1_e$$.unbind, $target$$.eventDispatcher = $args$$1_e$$, $target$$.dispatchEvent = $args$$1_e$$.dispatchEvent)
};
function Modal() {
}
Modal.prototype.show = function $Modal$$show$($x$$, $y$$) {
  this.display && (this.display.center(void 0 === $x$$, void 0 === $y$$), $x$$ && this.display.css("left", $x$$ + "px"), $y$$ && this.display.css("top", $y$$ + "px"), this.display.show())
};
Modal.prototype.hide = function $Modal$$hide$() {
  this.display.hide()
};
function syncLoader($readyCheck$$, $onReady$$) {
  if("function" == typeof $readyCheck$$) {
    var $JSCompiler_object_inline_syncInterval_20$$;
    $JSCompiler_object_inline_syncInterval_20$$ = setInterval(function() {
      $readyCheck$$() && (clearInterval($JSCompiler_object_inline_syncInterval_20$$), "function" == typeof $onReady$$ && $onReady$$())
    }, 10)
  }
}
function getMouseEventData($e$$) {
  return void 0 == $e$$.originalEvent.touches ? $e$$ : $e$$.originalEvent.touches[0] || $e$$.originalEvent.changedTouches[0]
}
function setCookie($name$$, $value$$, $days_expires$$) {
  if($days_expires$$) {
    var $date$$ = new Date;
    $date$$.setTime($date$$.getTime() + 864E5 * $days_expires$$);
    $days_expires$$ = "; expires=" + $date$$.toGMTString()
  }else {
    $days_expires$$ = ""
  }
  document.cookie = $name$$ + "=" + $value$$ + $days_expires$$ + "; path=/"
}
function setTrackingCookie() {
  document.cookie = "sessionStart=" + (new Date).getTime() + ";"
}
function getCookie($name$$) {
  $name$$ += "=";
  for(var $ca$$ = document.cookie.split(";"), $i$$ = 0;$i$$ < $ca$$.length;$i$$++) {
    for(var $c$$ = $ca$$[$i$$];" " == $c$$.charAt(0);) {
      $c$$ = $c$$.substring(1, $c$$.length)
    }
    if(0 == $c$$.indexOf($name$$)) {
      return $c$$.substring($name$$.length, $c$$.length)
    }
  }
  return null
}
function deleteCookie($name$$) {
  setCookie($name$$, "", -1)
}
function deleteCookies() {
  for(var $allcookies$$ = document.cookie.split(";"), $i$$ = 0;$i$$ < $allcookies$$.length;$i$$++) {
    var $cookie_name$$ = $allcookies$$[$i$$], $eqPos$$ = $cookie_name$$.indexOf("="), $cookie_name$$ = -1 < $eqPos$$ ? $cookie_name$$.substr(0, $eqPos$$) : $cookie_name$$;
    setCookie($cookie_name$$, "", -1)
  }
}
function getParameterByName($name$$) {
  $name$$ = $name$$.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  $name$$ = RegExp("[\\?&]" + $name$$ + "=([^&#]*)").exec(window.location.href);
  return null == $name$$ ? null : decodeURIComponent($name$$[1].replace(/\+/g, " "))
}
"function" !== typeof String.prototype.trim && (String.prototype.trim = function $String$$trim$() {
  return this.replace(/^\s+|\s+$/g, "")
});
function RoomTemplate($id$$, $category$$, $overlay$$, $base$$, $areas$$, $highlights$$, $offsets$$, $bindings$$, $thumb$$, $isExterior$$, $surfaces$$, $compareBase$$, $compareShadow$$, $comparePaintable$$, $shadowX$$, $shadowY$$) {
  this.id = $id$$;
  this.category = $category$$;
  this.thumb = $thumb$$;
  this.overlay = $overlay$$;
  this.base = $base$$;
  this.compareBase = $compareBase$$;
  this.compareShadow = $compareShadow$$;
  this.comparePaintable = $comparePaintable$$;
  this.shadowX = $shadowX$$;
  this.shadowY = $shadowY$$;
  this.areas = $areas$$;
  this.offsets = $offsets$$;
  this.bindings = $bindings$$;
  this.highlights = $highlights$$;
  this.isExterior = $isExterior$$;
  this.surfaces = $surfaces$$;
  this.roomData = null
}
function PaintRoom($display$$, $noInput$$, $width$$, $height$$) {
  this.display = $display$$;
  EventDispatcher.enableEvents(this, PaintRoom.ON_SELECTION, PaintRoom.ON_PAINT, PaintRoom.ON_AREA_CLICK, PaintRoom.ON_BINDINGS_UPDATED, PaintRoom.ON_ITEM_DROP, PaintRoom.ON_EXTERNAL_ITEM_DROP);
  this.loadingImg = IMAGE_ROOT + "/cma/vz/vis/loader.gif";
  this.showLoader = !1;
  this.roomCanvasContext = this.roomCanvas = null;
  this.areas = [];
  this.highlights = [];
  this.base = this.overlay = null;
  this.offsets = [];
  this.overlayOffset = [];
  this.onready = null;
  this.ready = !1;
  this.selectedArea = -1;
  this.palette = null;
  this.paletteBindings = [];
  this.dragHook = null;
  this.outputWidth = $width$$;
  this.outputHeight = $height$$;
  this.suspendPainting = !1;
  this.bindPalette = function $this$bindPalette$($palette$$, $defaultBindings$$) {
    this.palette = $palette$$;
    this.paletteBindings = $defaultBindings$$;
    for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
      this.paintSectionByIndex(this.palette.colors[this.paletteBindings[$i$$]], $i$$)
    }
    this.palette.bind("onColorsUpdated", this.paletteColorUpdatedHandler, [this])
  };
  this.disable = function $this$disable$($e$$) {
    this.dragHook.disable()
  };
  this.enable = function $this$enable$($e$$) {
    this.dragHook.enable()
  };
  this.isPainted = function $this$isPainted$() {
    for(var $i$$ = 0;$i$$ < this.paletteBindings.length;$i$$++) {
      if(null != this.palette.getColor(this.paletteBindings[$i$$])) {
        return!0
      }
    }
    return!1
  };
  this.isAreaPainted = function $this$isAreaPainted$($areaIndex$$) {
    return null != this.palette.getColor(this.paletteBindings[$areaIndex$$]) ? !0 : !1
  };
  this.paletteColorUpdatedHandler = function $this$paletteColorUpdatedHandler$($e$$90_obj$$) {
    $e$$90_obj$$ = $e$$90_obj$$.data[0];
    $e$$90_obj$$.suspendPainting = !0;
    for(var $i$$ = 0;$i$$ < $e$$90_obj$$.areas.length;$i$$++) {
      $e$$90_obj$$.paintSectionByIndex($e$$90_obj$$.palette.colors[$e$$90_obj$$.paletteBindings[$i$$]], $i$$)
    }
    $e$$90_obj$$.suspendPainting = !1;
    $e$$90_obj$$.paint()
  };
  this.clearPaletteBindings = function $this$clearPaletteBindings$() {
    for(var $bindings$$ = [], $i$$ = 0;$i$$ < this.paletteBindings.length;$i$$++) {
      $bindings$$.push(-1)
    }
    this.setBindings($bindings$$)
  };
  this.clearSelectedPaletteBinding = function $this$clearSelectedPaletteBinding$() {
    if(-1 != this.selectedArea) {
      for(var $bindings$$ = [], $b$$ = 0;$b$$ < this.paletteBindings.length;$b$$++) {
        $bindings$$.push(this.paletteBindings[$b$$])
      }
      $bindings$$[this.selectedArea] = -1;
      this.setBindings($bindings$$);
      this.clearSelectedArea()
    }
  };
  this.setBindings = function $this$setBindings$($bindings$$, $undoredoflag$$) {
    for(var $currentBindings_e$$ = [], $b$$22_i$$ = 0;$b$$22_i$$ < this.paletteBindings.length;$b$$22_i$$++) {
      $currentBindings_e$$.push(this.paletteBindings[$b$$22_i$$])
    }
    if(!$bindings$$) {
      $bindings$$ = [];
      for($b$$22_i$$ = 0;$b$$22_i$$ < $currentBindings_e$$.length;$b$$22_i$$++) {
        $bindings$$[$b$$22_i$$] = -1
      }
    }
    for($b$$22_i$$ = 0;$b$$22_i$$ < this.areas.length;$b$$22_i$$++) {
      "number" == typeof $bindings$$[$b$$22_i$$] && (this.paletteBindings[$b$$22_i$$] = $bindings$$[$b$$22_i$$], this.paintSectionByIndexBinding($b$$22_i$$))
    }
    undoRedoStack.register(this, this.setBindings, [$currentBindings_e$$], $undoredoflag$$);
    $currentBindings_e$$ = {};
    $currentBindings_e$$.bindings = $bindings$$;
    this.dispatchEvent(PaintRoom.ON_BINDINGS_UPDATED, $currentBindings_e$$)
  };
  this.unbindPalette = function $this$unbindPalette$() {
    this.palette.unbind("onColorsUpdated", this.paletteColorUpdateHandler)
  };
  this.updateSelectedArea = function $this$updateSelectedArea$($index$$) {
    if(-1 < this.selectedArea && null != this.palette) {
      for(var $bindings$$ = [], $b$$ = 0;$b$$ < this.paletteBindings.length;$b$$++) {
        $bindings$$.push(this.paletteBindings[$b$$])
      }
      this.palette.getColor($index$$);
      $bindings$$[this.selectedArea] = $index$$;
      this.setBindings($bindings$$)
    }
  };
  this.updateBinding = function $this$updateBinding$($e$$, $paletteIndex$$, $undoredoflag$$) {
    undoRedoStack.register(this, this.updateBinding, [$e$$, this.paletteBindings[$e$$]], $undoredoflag$$);
    this.paletteBindings[$e$$] = $paletteIndex$$;
    this.paintSectionByIndex(this.palette.getColor($paletteIndex$$), $e$$);
    $e$$ = {};
    $e$$.bindings = this.paletteBindings;
    this.dispatchEvent(PaintRoom.ON_BINDINGS_UPDATED, $e$$)
  };
  this.loadRoom = function $this$loadRoom$($template$$, $savedBindings$$) {
    this.ready = !1;
    this.offsets = $template$$.offsets;
    this.overlayOffset = [$template$$.shadowX, $template$$.shadowY];
    var $obj$$ = this;
    this.paletteBindings = $savedBindings$$ instanceof Array ? $savedBindings$$ : $template$$.bindings;
    null == this.roomCanvas && (this.roomCanvas = document.createElement("canvas"), this.roomCanvas.width = this.display.width(), this.roomCanvas.height = this.display.height(), this.display.append(this.roomCanvas), this.roomCanvas = $(this.roomCanvas), this.roomCanvasContext = this.roomCanvas[0].getContext("2d"), this.loadingImg = $("<div class='loader'><img src='" + this.loadingImg + "'/></div>"), this.display.append(this.loadingImg));
    this.showLoader && this.loadingImg.show();
    var $count$$ = Math.floor(this.offsets.length / 2);
    this.areas = [];
    this.highlights = [];
    for(var $i$$0$$ = 0;$i$$0$$ < $count$$;$i$$0$$++) {
      var $highlight_image$$ = new Image;
      $highlight_image$$.src = PaintRoom.IMAGE_ROOT + $template$$.areas[$i$$0$$];
      this.areas[$i$$0$$] = $highlight_image$$;
      $highlight_image$$ = new Image;
      $highlight_image$$.src = PaintRoom.IMAGE_ROOT + $template$$.highlights[$i$$0$$];
      this.highlights[$i$$0$$] = $highlight_image$$;
      isNaN(this.paletteBindings[$i$$0$$]) && (this.paletteBindings[$i$$0$$] = 0)
    }
    this.overlay = new Image;
    this.overlay.src = PaintRoom.IMAGE_ROOT + $template$$.overlay;
    this.base = new Image;
    this.base.src = PaintRoom.IMAGE_ROOT + $template$$.base;
    syncLoader(function isLoaded() {
      for(var $i$$ = 0;$i$$ < $obj$$.areas.length;$i$$++) {
        if(!$obj$$.areas[$i$$].complete || !$obj$$.highlights[$i$$].complete) {
          return!1
        }
      }
      return $obj$$.base.complete && $obj$$.overlay.complete
    }, function ready() {
      for(var $i$$ = 0;$i$$ < $obj$$.areas.length;$i$$++) {
        $obj$$.areas[$i$$] = ColorUtilities.createCanvas($obj$$.areas[$i$$]), $obj$$.highlights[$i$$] = ColorUtilities.createCanvas($obj$$.highlights[$i$$]), $obj$$.paintSectionByIndexBinding($i$$, !1)
      }
      $obj$$.ready = !0;
      $obj$$.loadingImg.hide();
      for($i$$ = 0;$i$$ < $obj$$.areas.length;$i$$++) {
        $obj$$.paintSectionByIndexBinding($i$$, !1)
      }
      if(void 0 != $obj$$.onready) {
        $obj$$.onready()
      }
      $obj$$.suspendPainting = !1;
      $obj$$.clearSelectedArea()
    })
  };
  this.paintSelectedArea = function $this$paintSelectedArea$($color$$) {
    0 <= this.selectedArea && this.paintSectionByIndex($color$$, this.selectedArea)
  };
  this.paintSectionByIndexBinding = function $this$paintSectionByIndexBinding$($index$$, $update$$) {
    var $color$$ = this.palette.getColor(this.paletteBindings[$index$$]);
    this.paintSectionByIndex($color$$, $index$$, $update$$)
  };
  this.paintSectionByIndex = function $this$paintSectionByIndex$($color$$, $index$$, $update$$) {
    if(this.ready && !(0 > $index$$ || $index$$ >= this.areas.length)) {
      if($index$$ = this.areas[$index$$], !(0 == $index$$.width || 0 == $index$$.height)) {
        var $imageData$$ = $index$$.getContext("2d").getImageData(0, 0, $index$$.width, $index$$.height), $rawData$$ = $imageData$$.data;
        if(null == $color$$ || void 0 == $color$$) {
          $color$$ = nullColor
        }
        $color$$ = $color$$.rgb.substr(1);
        $color$$ = parseInt("0x" + $color$$, "0x");
        for(var $i$$ = 0;$i$$ < $rawData$$.length;$i$$ += 4) {
          $rawData$$[$i$$] = ($color$$ & 16711680) >> 16, $rawData$$[$i$$ + 1] = ($color$$ & 65280) >> 8, $rawData$$[$i$$ + 2] = $color$$ & 255
        }
        $index$$.getContext("2d").putImageData($imageData$$, 0, 0);
        !1 != $update$$ && this.paint()
      }
    }
  };
  this.paintSection = function $this$paintSection$($color$$18_crgb$$1_rgbNoHash$$, $section$$1_x$$, $imageData$$2_y$$) {
    console.info("Coming through paintsection");
    if(this.ready && ($section$$1_x$$ = this.getSection($section$$1_x$$, $imageData$$2_y$$), null != $section$$1_x$$)) {
      $imageData$$2_y$$ = $section$$1_x$$.getContext("2d").getImageData(0, 0, $section$$1_x$$.width, $section$$1_x$$.height);
      var $rawData$$ = $imageData$$2_y$$.data;
      $color$$18_crgb$$1_rgbNoHash$$ = $color$$18_crgb$$1_rgbNoHash$$.rgb.substr(1);
      $color$$18_crgb$$1_rgbNoHash$$ = parseInt("0x" + $color$$18_crgb$$1_rgbNoHash$$, "0x");
      for(var $i$$ = 0;$i$$ < $rawData$$.length;$i$$ += 4) {
        $rawData$$[$i$$] = ($color$$18_crgb$$1_rgbNoHash$$ & 16711680) >> 16, $rawData$$[$i$$ + 1] = ($color$$18_crgb$$1_rgbNoHash$$ & 65280) >> 8, $rawData$$[$i$$ + 2] = $color$$18_crgb$$1_rgbNoHash$$ & 255
      }
      $section$$1_x$$.getContext("2d").putImageData($imageData$$2_y$$, 0, 0);
      this.paint()
    }
  };
  this.toggleAreaSelection = function $this$toggleAreaSelection$($x$$, $y$$) {
    var $a$$ = this.getSectionIndex($x$$, $y$$);
    this.setSelectedArea(this.selectedArea == $a$$ ? -1 : $a$$)
  };
  this.selectArea = function $this$selectArea$($x$$, $y$$) {
    var $a$$ = this.getSectionIndex($x$$, $y$$);
    this.selectedArea != $a$$ && this.setSelectedArea($a$$)
  };
  this.clearSelectedArea = function $this$clearSelectedArea$() {
    this.setSelectedArea(-1)
  };
  this.toggleSelectedArea = function $this$toggleSelectedArea$($a$$) {
    this.selectedArea == $a$$ && ($a$$ = -1);
    this.setSelectedArea($a$$)
  };
  this.setSelectedArea = function $this$setSelectedArea$($area$$) {
    this.selectedArea = $area$$;
    this.paint();
    var $e$$ = {};
    $e$$.area = $area$$;
    this.dispatchEvent(PaintRoom.ON_SELECTION, $e$$)
  };
  this.getSection = function $this$getSection$($x$$, $y$$) {
    var $i$$ = this.getSectionIndex($x$$, $y$$);
    return 0 <= $i$$ ? this.areas[$i$$] : null
  };
  this.getSectionIndex = function $this$getSectionIndex$($x$$, $y$$) {
    for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
      var $area$$ = this.areas[$i$$], $lx$$ = $x$$ - this.offsets[2 * $i$$], $ly$$ = $y$$ - this.offsets[2 * $i$$ + 1];
      if(!(0 > $lx$$ || 0 > $ly$$ || $lx$$ >= $area$$.width || $ly$$ >= $area$$.height) && $area$$.getContext && 0 < $area$$.getContext("2d").getImageData($lx$$, $ly$$, 1, 1).data[3]) {
        return $i$$
      }
    }
    return-1
  };
  this.paint = this.outputWidth ? function() {
    if(this.ready && !this.suspendPainting) {
      this.roomCanvasContext.drawImage(this.base, 0, 0, this.outputWidth, this.outputHeight);
      for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
        this.roomCanvasContext.drawImage(this.areas[$i$$], this.offsets[2 * $i$$] || 0, this.offsets[2 * $i$$ + 1] || 0, this.outputWidth, this.outputHeight)
      }
      this.roomCanvasContext.drawImage(this.overlay, this.overlayOffset[0] || 0, this.overlayOffset[1] || 0, this.outputWidth, this.outputHeight);
      -1 != this.selectedArea && this.roomCanvasContext.drawImage(this.highlights[this.selectedArea], this.offsets[2 * this.selectedArea] || 0, this.offsets[2 * this.selectedArea + 1] || 0, this.outputWidth, this.outputHeight);
      this.dispatchEvent(PaintRoom.ON_PAINT)
    }
  } : function() {
    if(this.ready && !this.suspendPainting) {
      this.roomCanvasContext.drawImage(this.base, 0, 0);
      for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
        this.roomCanvasContext.drawImage(this.areas[$i$$], this.offsets[2 * $i$$] || 0, this.offsets[2 * $i$$ + 1] || 0)
      }
      this.roomCanvasContext.drawImage(this.overlay, this.overlayOffset[0] || 0, this.overlayOffset[1] || 0);
      -1 != this.selectedArea && this.roomCanvasContext.drawImage(this.highlights[this.selectedArea], this.offsets[2 * this.selectedArea] || 0, this.offsets[2 * this.selectedArea + 1] || 0);
      this.dispatchEvent(PaintRoom.ON_PAINT)
    }
  };
  var $obj$$0$$ = this;
  !0 != $noInput$$ && (this.display.on("click", function($e$$94_y$$) {
    var $a$$ = $obj$$0$$.display.offset(), $x$$ = $e$$94_y$$.pageX - $a$$.left;
    $e$$94_y$$ = $e$$94_y$$.pageY - $a$$.top;
    $a$$ = $obj$$0$$.getSectionIndex($x$$, $e$$94_y$$);
    if(0 <= $a$$) {
      var $ne$$ = {};
      $ne$$.area = $a$$;
      $ne$$.x = $x$$;
      $ne$$.y = $e$$94_y$$;
      $obj$$0$$.dispatchEvent(PaintRoom.ON_AREA_CLICK, $ne$$)
    }
  }), mobile || (this.display.on("mousemove", function($e$$) {
    !dragOp.dragging && !currentModal && $obj$$0$$.selectArea($e$$.pageX - $obj$$0$$.roomCanvas.offset().left, $e$$.pageY - $obj$$0$$.roomCanvas.offset().top)
  }), this.display.on("mouseout", function($e$$) {
    $obj$$0$$.selectArea(-1)
  })), this.display.droppable({drop:function($e$$, $u$$) {
    var $src$$ = $u$$.draggable.data("src"), $color$$ = $src$$.color, $x$$ = $e$$.pageX - $obj$$0$$.roomCanvas.offset().left, $y$$ = $e$$.pageY - $obj$$0$$.roomCanvas.offset().top;
    parseInt($color$$.rgb.replace("#", "0x"));
    canMain = document.getElementById("canMain");
    context2 = canMain.getContext("2d");
    canMask = document.getElementById("canEdge");
    maskContext = canMask.getContext("2d");
    mouseX = $e$$.pageX - this.offsetLeft;
    mouseY = $e$$.pageY - this.offsetTop;
    canMain = document.getElementById("canMain");
    context = canMain.getContext("2d");
    canMask = document.getElementById("canEdge");
    maskContext = canMask.getContext("2d");
    var $sectionIndex$$ = $obj$$0$$.getSectionIndex($x$$, $y$$);
    if($src$$.type === DragType.UserPalette && !currentModal) {
      0 <= $sectionIndex$$ && $obj$$0$$.updateBinding($sectionIndex$$, $src$$.index), 0 <= $obj$$0$$.selectedArea && $obj$$0$$.clearSelectedArea(), $obj$$0$$.dispatchEvent(PaintRoom.ON_ITEM_DROP, $de$$)
    }else {
      if($src$$.type === DragType.ColorSearch && -1 < $sectionIndex$$) {
        var $de$$ = {};
        $de$$.x = $x$$;
        $de$$.y = $y$$;
        $de$$.surfaceIndex = $sectionIndex$$;
        $de$$.item = $color$$;
        $de$$.ui = $u$$;
        $obj$$0$$.dispatchEvent(PaintRoom.ON_EXTERNAL_ITEM_DROP, $de$$)
      }
    }
  }}))
}
PaintRoom.IMAGE_ROOT = IMAGE_ROOT + "/cma/vz/PreviewImages/";
PaintRoom.ON_SELECTION = "onSelection";
PaintRoom.ON_PAINT = "onPaint";
PaintRoom.ON_AREA_CLICK = "onAreaClick";
PaintRoom.ON_BINDINGS_UPDATED = "onBindingsUpdated";
PaintRoom.ON_ITEM_DROP = "onItemDrop";
PaintRoom.ON_EXTERNAL_ITEM_DROP = "onExternalItemDrop";
function Palette($fixedLength$$) {
  this.fixedLength = !1 === $fixedLength$$ ? !1 : !0;
  this.condense = !0;
  this.colors = Array(this.fixedLength ? Palette.FIXED_LENGTH : 0);
  EventDispatcher.enableEvents(this, Palette.ON_COLORS_UPDATED);
  this.notifyColorsUpdate = function $this$notifyColorsUpdate$($indices$$) {
    for(var $colors$$ = [], $e$$98_i$$ = 0;$e$$98_i$$ < $indices$$.length;$e$$98_i$$++) {
      $colors$$[$e$$98_i$$] = this.colors[$indices$$[$e$$98_i$$]]
    }
    $e$$98_i$$ = {};
    $e$$98_i$$.colors = $colors$$;
    $e$$98_i$$.indices = $indices$$;
    this.dispatchEvent(Palette.ON_COLORS_UPDATED, $e$$98_i$$)
  };
  this.removeColor = function $this$removeColor$($color$$) {
    for(var $newColors$$ = [], $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      if(this.colors[$i$$] != $color$$) {
        $newColors$$[$i$$] = this.colors[$i$$]
      }else {
        var $e$$ = {};
        $e$$.color = $color$$;
        $e$$.index = $i$$;
        this.dispatchEvent("onRemove", $e$$)
      }
    }
    this.setColors($newColors$$)
  };
  this.addColor = function $this$addColor$($color$$, $i$$, $undoredoflag$$) {
    if(!(!0 == $i$$ && this.hasColor($color$$))) {
      for($i$$ = 0;$i$$ < this.colors.length;$i$$++) {
        if(null == this.colors[$i$$]) {
          this.setColor($color$$, $i$$, $undoredoflag$$);
          return
        }
      }
      this.fixedLength ? (showModal(replaceColor, 10, 100), replaceColor.updateReplaceableColors($color$$)) : this.setColor($color$$, this.colors.length, $undoredoflag$$)
    }
  };
  this.swapColors = function $this$swapColors$($index1$$, $index2$$, $t$$4_undoredoflag$$) {
    undoRedoStack.register(this, this.swapColors, [$index1$$, $index2$$], $t$$4_undoredoflag$$);
    $t$$4_undoredoflag$$ = this.colors[$index1$$];
    this.colors[$index1$$] = this.colors[$index2$$];
    this.colors[$index2$$] = $t$$4_undoredoflag$$;
    this.notifyColorsUpdate([$index1$$, $index2$$])
  };
  this.setColor = function $this$setColor$($color$$, $index$$, $undoredoflag$$) {
    -1 == $index$$ ? (showModal(replaceColor, 10, 100), replaceColor.updateReplaceableColors($color$$)) : this.fixedLength && $index$$ >= Palette.FIXED_LENGTH ? console.error("Palette is fixed length, can't set an index above " + (Palette.FIXED_LENGTH - 1)) : (undoRedoStack.register(this, this.setColor, [this.getColor($index$$), $index$$], $undoredoflag$$), this.colors[$index$$] = $color$$, this.notifyColorsUpdate([$index$$]))
  };
  this.indexOf = function $this$indexOf$($color$$) {
    for(var $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      if(this.colors[$i$$] === $color$$) {
        return $i$$
      }
    }
    return-1
  };
  this.getColor = function $this$getColor$($index$$) {
    return this.colors[$index$$]
  };
  this.clear = function $this$clear$() {
    for(var $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      this.colors[$i$$] = null, this.fixedLength && this.notifyColorsUpdate([$i$$])
    }
    this.fixedLength || (this.colors = [])
  };
  this.hasColor = function $this$hasColor$($color$$) {
    "string" == typeof $color$$ && ($color$$ = colorDef[$color$$]);
    for(var $x$$ = 0;$x$$ < this.colors.length;$x$$++) {
      if($color$$ === this.colors[$x$$]) {
        return!0
      }
    }
    return!1
  };
  this.numColors = function $this$numColors$() {
    for(var $n$$ = 0, $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      null != this.colors[$i$$] && $n$$++
    }
    return $n$$
  };
  this.size = function $this$size$() {
    return this.colors.length
  }
}
Palette.FIXED_LENGTH = 8;
Palette.ON_COLORS_UPDATED = "onColorsUpdated";
Palette.prototype.setColors = function $Palette$$setColors$($colors$$, $undoredoflag$$) {
  if($undoredoflag$$ != UndoRedoStack.IGNORE) {
    for(var $currentColors_updatedColors$$ = [], $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      $currentColors_updatedColors$$[$i$$] = this.colors[$i$$]
    }
    undoRedoStack.register(this, this.setColors, [$currentColors_updatedColors$$], $undoredoflag$$)
  }
  $currentColors_updatedColors$$ = [];
  if(this.fixedLength) {
    for($i$$ = 0;$i$$ < Palette.FIXED_LENGTH;$i$$++) {
      this.colors[$i$$] != $colors$$[$i$$] && ($currentColors_updatedColors$$.push($i$$), this.colors[$i$$] = $colors$$[$i$$])
    }
    0 < $currentColors_updatedColors$$.length && this.notifyColorsUpdate([$currentColors_updatedColors$$])
  }else {
    this.clear();
    for($i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      this.addColor($colors$$[$i$$], !0, UndoRedoStack.IGNORE)
    }
  }
};
function QuadPalette($display$$) {
  this.display = $display$$;
  this.palettes = [];
  this.selected = 0;
  this.paletteContainers = null;
  this.isUpdating = this.updateQuadColors = !1;
  this.visibleSwatches = 8;
  EventDispatcher.enableEvents(this, "onSwatchClick");
  this.resetPagination = function $this$resetPagination$() {
    this.paletteContainers.css("left", "0px");
    this.selected = 0;
    this.checkPrevNextArrows()
  };
  this.checkPrevNextArrows = function $this$checkPrevNextArrows$() {
    this.display.find(".btnPrev").addClass("inactive");
    this.palettes.length <= this.visibleSwatches ? this.display.find(".btnNext").addClass("inactive") : this.display.find(".btnNext").removeClass("inactive")
  };
  this.getNext = function $this$getNext$() {
    this.display.find(".btnPrev").removeClass("inactive");
    this.selected >= this.palettes.length - this.visibleSwatches || (this.selected >= this.palettes.length - 2 * this.visibleSwatches && this.display.find(".btnNext").addClass("inactive"), this.selected += 8, this.paletteContainers.css("left", -69 * this.selected + "px"))
  };
  this.getPrev = function $this$getPrev$() {
    this.display.find(".btnNext").removeClass("inactive");
    0 >= this.selected || (this.selected -= this.visibleSwatches, this.paletteContainers.css("left", -69 * this.selected + "px"), this.selected < this.visibleSwatches && this.display.find(".btnPrev").addClass("inactive"))
  };
  this.updatePalettes = function $this$updatePalettes$($colors$$) {
    $colors$$ instanceof Array || ($colors$$ = []);
    for(var $i$$ = 0;12 > $i$$;$i$$++) {
      for(var $p$$ = new Palette, $c$$ = 0;4 > $c$$;$c$$++) {
        if($colors$$[$c$$] instanceof ColorDef) {
          $p$$.addColor($colors$$[$c$$], !1, UndoRedoStack.IGNORE)
        }else {
          var $index$$ = Math.floor(100 * Math.random()), $r$$ = 0, $found$$ = !1, $blah$$;
          for($blah$$ in colorLookup) {
            if($r$$++ == $index$$) {
              $p$$.addColor(colorLookup[$blah$$], !1, UndoRedoStack.IGNORE);
              $found$$ = !0;
              break
            }
          }
          $found$$ || $p$$.addColor(nullColor, !1, UndoRedoStack.IGNORE)
        }
      }
      this.palettes[$i$$] = $p$$
    }
    this.updateUI()
  };
  this.refreshPalettes = function $this$refreshPalettes$($palettes$$) {
    this.palettes = [];
    this.resetPagination();
    for(var $i$$ = 0;$i$$ < $palettes$$.length;$i$$++) {
      for(var $p$$ = new Palette, $c$$ = 0;4 > $c$$;$c$$++) {
        null != colorLookup[$palettes$$[$i$$][$c$$]] ? $p$$.addColor(colorLookup[$palettes$$[$i$$][$c$$]], !1, UndoRedoStack.IGNORE) : $p$$.addColor(nullColor, !1, UndoRedoStack.IGNORE)
      }
      this.palettes[$i$$] = $p$$
    }
    this.updateUI()
  };
  this.updateUI = function $this$updateUI$() {
    var $obj$$ = this, $i$$70_palettes$$ = $display$$.find(".palette"), $paletteTemplate$$ = $($i$$70_palettes$$[0]);
    $i$$70_palettes$$.remove();
    for($i$$70_palettes$$ = 0;$i$$70_palettes$$ < this.palettes.length;$i$$70_palettes$$++) {
      var $clone$$ = $paletteTemplate$$.clone(), $c1$$ = this.palettes[$i$$70_palettes$$].getColor(0), $c2$$ = this.palettes[$i$$70_palettes$$].getColor(1), $c3$$ = this.palettes[$i$$70_palettes$$].getColor(2), $c4$$ = this.palettes[$i$$70_palettes$$].getColor(3);
      $c1$$ instanceof ColorDef && $($clone$$.find(".color1")).css("background-color", $c1$$.rgb);
      $c2$$ instanceof ColorDef && $($clone$$.find(".color2")).css("background-color", $c2$$.rgb);
      $c3$$ instanceof ColorDef && $($clone$$.find(".color3")).css("background-color", $c3$$.rgb);
      $c4$$ instanceof ColorDef && $($clone$$.find(".color4")).css("background-color", $c4$$.rgb);
      this.paletteContainers.append($clone$$)
    }
    $display$$.find(".palette").each(function() {
      var $item$$ = $(this), $index$$ = $item$$.index();
      $item$$.on("click", function() {
        var $palette$$ = $obj$$.palettes[$index$$], $e$$ = {};
        $e$$.colors = [$palette$$.getColor(0), $palette$$.getColor(1), $palette$$.getColor(2), $palette$$.getColor(3)];
        $e$$.index = $index$$;
        $e$$.ui = this;
        for(var $palette$$ = [], $x$$ = 0;$x$$ < $e$$.colors.length;$x$$++) {
          userSession.palette.hasColor($e$$.colors[$x$$]) && 3 > $palette$$.length && $palette$$.push($e$$.colors[$x$$])
        }
        $obj$$.updateQuadColors = !0;
        $obj$$.dispatchEvent("onSwatchClick", $e$$);
        $obj$$.display.find(".selected").removeClass("selected");
        $item$$.addClass("selected");
        googleAnalyticsTagEvents("Medium Value-Palette", "Coordination Palette Selected", "")
      })
    });
    this.checkPrevNextArrows()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.paletteContainers = $display$$.find(".palettes");
    this.display.find(".suggestedPalettes").find(".btnNext").on("click", function($e$$) {
      $obj$$.getNext()
    });
    this.display.find(".suggestedPalettes").find(".btnPrev").on("click", function($e$$) {
      $obj$$.getPrev()
    })
  };
  this.generateColors = function $this$generateColors$($colors$$) {
    for(var $obj$$ = this, $colorIds$$ = "", $quadPalettes$$ = [], $cnt$$ = 0, $n$$ = 0;$n$$ < $colors$$.length;$n$$++) {
      null != $colors$$[$n$$] && 2 > $cnt$$ && ($colorIds$$ += $colors$$[$n$$].id + "/", $cnt$$++)
    }
    $cnt$$ = COLOR_MODEL_NX + "/fourcolor/" + $colorIds$$;
    0 < $colorIds$$.length && $.getJSON($cnt$$, function($colors$$7_json$$) {
      $colors$$7_json$$ = $colors$$7_json$$.fourcolor.split(",");
      for(var $numPalettes$$ = $colors$$7_json$$.length, $x$$ = 0;$x$$ < $numPalettes$$;$x$$ += 4) {
        if($x$$ + 4 <= $colors$$7_json$$.length) {
          var $quadColors$$ = [];
          $quadColors$$.push($colors$$7_json$$[$x$$]);
          $quadColors$$.push($colors$$7_json$$[$x$$ + 1]);
          $quadColors$$.push($colors$$7_json$$[$x$$ + 2]);
          $quadColors$$.push($colors$$7_json$$[$x$$ + 3]);
          $quadPalettes$$.push($quadColors$$)
        }
      }
    }).success(function() {
      $obj$$.refreshPalettes($quadPalettes$$)
    }).error(function() {
      var $colorIds$$2_numPalettes$$ = ColorUtilities._getRandomColorsFor($colors$$[0], 40);
      void 0 != $colors$$[1] && ($colorIds$$2_numPalettes$$ = $colorIds$$2_numPalettes$$.concat(ColorUtilities._getRandomColorsFor($colors$$[1], 40)));
      void 0 != $colors$$[2] && ($colorIds$$2_numPalettes$$ = $colorIds$$2_numPalettes$$.concat(ColorUtilities._getRandomColorsFor($colors$$[2], 40)));
      $colors$$ = $colorIds$$2_numPalettes$$.toString().split(",");
      for(var $colorIds$$2_numPalettes$$ = $colors$$.length, $x$$ = 0;$x$$ < $colorIds$$2_numPalettes$$;$x$$ += 4) {
        if($x$$ + 4 <= $colors$$.length) {
          var $quadColors$$ = [];
          $quadColors$$.push($colors$$[$x$$]);
          $quadColors$$.push($colors$$[$x$$ + 1]);
          $quadColors$$.push($colors$$[$x$$ + 2]);
          $quadColors$$.push($colors$$[$x$$ + 3]);
          $quadPalettes$$.push($quadColors$$)
        }
      }
      $obj$$.refreshPalettes($quadPalettes$$)
    })
  };
  this.init()
}
;var currentColor = "";
function RowPalette($display$$) {
  this.display = $display$$;
  this.paletteData = this.tabMenu = null;
  this.selectedTab = -1;
  this.tabTemplate = this.tabContainerList = this.tabContainer = null;
  this.isQuad = !1;
  this._oldQuad = this.featuredColorDetailsLink = null;
  this.returnToPaintMode = this.addColorSwitch = !1;
  this._quadColors = [];
  this._originalQuadColors = [];
  EventDispatcher.enableEvents(this, "onTabClick", "onColorsUpdated", "onModify", "onRemove", "onDetails", "onSave", "onPaletteFull", "onPreviewUpdated", "onSelectChange");
  this.featured = {chip:null, title:null, id:null};
  this.previewQuad = this.previewColor = null;
  this.site = "/consumer/";
  -1 !== document.URL.toLowerCase().indexOf("/consumer/") ? this.site = "/consumer/" : -1 !== document.URL.toLowerCase().indexOf("/consumer_ca/") ? this.site = "/consumer_ca/" : -1 !== document.URL.toLowerCase().indexOf("/pro/") ? this.site = "/pro/" : -1 !== document.URL.toLowerCase().indexOf("/architect/") && (this.site = "/architect/");
  this.setRoomMessageType = function $this$setRoomMessageType$($type$$) {
  };
  this.clear = function $this$clear$() {
    this._quadColors = [];
    this._originalQuadColors = [];
    this._oldQuad = null;
    this.isQuad = !1;
    this.previewQuad = this.previewColor = null
  };
  this.getTab = function $this$getTab$($i$$) {
    return this.display.find(".colorTab:nth-child(" + ($i$$ + 1) + ")")
  };
  this.setSelectedTab = function $this$setSelectedTab$($e$$103_i$$) {
    var $oldSelect$$ = this.selectedTab;
    if(void 0 === $e$$103_i$$) {
      if(this.getColor(this.selectedTab)) {
        $e$$103_i$$ = this.selectedTab
      }else {
        var $found$$ = !1;
        for($e$$103_i$$ = 0;$e$$103_i$$ < this.paletteSize();$e$$103_i$$++) {
          if(this.getColor($e$$103_i$$)) {
            $found$$ = !0;
            break
          }
        }
        $found$$ || ($e$$103_i$$ = null)
      }
    }
    this.hasSelectedTab() && ($found$$ = this.getTab(this.selectedTab), $found$$.removeClass("active"), 0 !== $found$$.find(".addButton").length && (-1 !== this.site.indexOf("consumer_ca") ? $found$$.find(".item .text").text("Add a Colour") : $found$$.find(".item .text").text("Add a Color"), $found$$.find(".item").css("background-color", "#ffffff"), $found$$.find(".item .text").css("padding-top", "0px")));
    null === $e$$103_i$$ && 0 !== this.numColors() ? this.selectedTab = -1 : (this.selectedTab = $e$$103_i$$, currentColor = this.getColor($e$$103_i$$), $found$$ = this.getTab($e$$103_i$$), $found$$.addClass("active"), this.numColors() == this.selectedTab && $found$$.find(".tabMenu").hide(), 0 !== $found$$.find(".addButton").length && ($found$$.addClass("addSlot"), -1 !== this.site.indexOf("consumer_ca") ? $found$$.find(".item .text").text("Select a Colour") : $found$$.find(".item .text").text("Select a Color"), 
    $found$$.find(".item").css("background-color", "#f8f8f8"), $found$$.find(".item .text").css("padding-top", "19px"), _isPYPRoom && $("div#disablePYP").show()), this.getColor(this.selectedTab) && (this.setPreviewColor(this.getColor(this.selectedTab)), null !== visualizer && "undefined" !== typeof visualizer && visualizer.paintFlashRooms(visualizer.pr, visualizer.rt, this.getColor(this.selectedTab))));
    userSession && userSession.setPaletteIndex(this.selectedTab);
    $oldSelect$$ !== this.selectedTab && ($e$$103_i$$ = {}, $e$$103_i$$.selectedTab = this.selectedTab, this.dispatchEvent("onSelectChange", $e$$103_i$$))
  };
  this.clearSelectedTab = function $this$clearSelectedTab$() {
    this.setSelectedTab(null)
  };
  this.hasSelectedTab = function $this$hasSelectedTab$() {
    return 0 <= this.selectedTab && 8 > this.selectedTab
  };
  this.getSelectedColor = function $this$getSelectedColor$() {
    return this.getColor(this.selectedTab)
  };
  this.getColor = function $this$getColor$($index$$) {
    return this.paletteData.getColor($index$$)
  };
  this.setColor = function $this$setColor$($color$$, $index$$, $undoredoflag$$) {
    if(!this.paletteData.hasColor($color$$)) {
      var $maintainQuad$$ = this.addColorSwitch = !1;
      if(this.isQuad) {
        var $c1$$4_i$$ = this._quadColors[$index$$];
        console.info(this._quadColors, $index$$);
        15 > ColorUtilities.colorCompareDE1994($c1$$4_i$$.luminosity, $c1$$4_i$$.a, $c1$$4_i$$.b, $color$$.luminosity, $color$$.a, $color$$.b) && ($maintainQuad$$ = !0, $c1$$4_i$$ = this._quadColors[$index$$], this._quadColors[$index$$] = $color$$, this.display.find(".color" + ($index$$ + 1)).css("background-color", $color$$.rgb), undoRedoStack.register(this, this.setColor, [$c1$$4_i$$, $index$$], $undoredoflag$$))
      }
      if(void 0 === $index$$ || null === $index$$) {
        for($c1$$4_i$$ = 0;$c1$$4_i$$ < this.paletteSize();$c1$$4_i$$++) {
          if(null == this.getColor($c1$$4_i$$)) {
            $index$$ = $c1$$4_i$$;
            break
          }
        }
        if(void 0 === $index$$ || null === $index$$) {
          this.dispatchEvent("onPaletteFull", {});
          return
        }
      }
      for(var $colors$$ = [], $c1$$4_i$$ = 0;$c1$$4_i$$ < this.paletteData.colors.length;$c1$$4_i$$++) {
        if($color$$ || $index$$ != $c1$$4_i$$) {
          $colors$$[$c1$$4_i$$] = this.paletteData.colors[$c1$$4_i$$]
        }
      }
      $color$$ && ($colors$$[$index$$] = $color$$);
      $maintainQuad$$ ? this._setColors($colors$$, !0, UndoRedoStack.IGNORE) : this.setColors($colors$$, $undoredoflag$$);
      this.setSelectedTab($index$$);
      return $index$$
    }
  };
  this._setQuad = function $this$_setQuad$($isQuad$$) {
    (this.isQuad = $isQuad$$) ? (this.tabContainer.addClass("isquad"), 6 === $(".list").children(".colorTab").length && $(".list div.colorTab:last-child").remove()) : this.tabContainer.removeClass("isquad");
    userSession && (userSession.paletteQuad = $isQuad$$)
  };
  this.setQuad = function $this$setQuad$($colors$$, $undoredoflag$$) {
    this._quadColors = $colors$$;
    this._originalQuadColors = [];
    for(var $i$$ = 0;4 > $i$$;$i$$++) {
      this._originalQuadColors[$i$$] = $colors$$[$i$$]
    }
    this._setColors($colors$$, !0, $undoredoflag$$);
    this.display.find(".color1").css("background-color", $colors$$[0].rgb);
    this.display.find(".color2").css("background-color", $colors$$[1].rgb);
    this.display.find(".color3").css("background-color", $colors$$[2].rgb);
    this.display.find(".color4").css("background-color", $colors$$[3].rgb);
    this.display.find(".ui-draggable").draggable({disabled:!1})
  };
  this._setColors = function $this$_setColors$($colors$$, $isQuad$$, $undoredoflag$$) {
    if($undoredoflag$$ != UndoRedoStack.IGNORE) {
      for(var $currentColors$$ = [], $i$$ = 0;$i$$ < this.paletteData.colors.length;$i$$++) {
        $currentColors$$[$i$$] = this.paletteData.colors[$i$$]
      }
      undoRedoStack.register(this, this._setColors, [$currentColors$$, this.isQuad], $undoredoflag$$)
    }
    this._setQuad($isQuad$$);
    this.paletteData.setColors($colors$$, UndoRedoStack.IGNORE);
    this.setSelectedTab()
  };
  this.setColors = function $this$setColors$($colors$$, $undoredoflag$$) {
    this._setColors($colors$$, !1, $undoredoflag$$)
  };
  this.numColors = function $this$numColors$() {
    return this.paletteData.numColors()
  };
  this.addColor = function $this$addColor$($color$$, $undoredoflag$$) {
    return this.setColor($color$$, void 0, $undoredoflag$$)
  };
  this.replaceColor = function $this$replaceColor$($inColor$$) {
    if(!this.paletteData.hasColor($inColor$$)) {
      for(var $colors$$ = [], $i$$ = 0;$i$$ < this.paletteData.colors.length;$i$$++) {
        var $c$$ = this.paletteData.colors[$i$$];
        $i$$ === this.selectedTab ? $colors$$.push($inColor$$) : $colors$$.push($c$$)
      }
      this.setColors($colors$$, UndoRedoStack.IGNORE);
      this.setPreviewColor($inColor$$);
      visualizer.paintFlashRooms(visualizer.pr, visualizer.rt, $inColor$$)
    }
  };
  this.hasColor = function $this$hasColor$($color$$) {
    return this.paletteData.hasColor($color$$)
  };
  this.paletteSize = function $this$paletteSize$() {
    return this.paletteData.size()
  };
  this.indexOf = function $this$indexOf$($color$$) {
    return this.paletteData.indexOf($color$$)
  };
  this.removeColor = function $this$removeColor$($color$$, $undoredoignore$$) {
    for(var $colors$$ = [], $i$$ = 0;$i$$ < this.paletteData.colors.length;$i$$++) {
      var $c$$ = this.paletteData.colors[$i$$];
      $c$$ != $color$$ && $colors$$.push($c$$)
    }
    this.setColors($colors$$, $undoredoignore$$);
    this.setPreviewColor(null)
  };
  this.showHidePreviewRoom = function $this$showHidePreviewRoom$() {
    visualizer.mode === Visualizer.MODE_PAINT ? this.display.find(".previewControls").hide() : 3 >= this.numColors() && !this.isQuad && this.display.find(".previewControls").show()
  };
  this.setPalette = function $this$setPalette$($palette$$) {
    this.paletteData = $palette$$;
    var $obj$$ = this;
    this.paletteData.bind("onColorsUpdated", function($e$$) {
      var $colors$$ = "__currMode";
      null !== visualizer && "undefined" !== typeof visualizer && ($colors$$ = visualizer.mode);
      var $colors$$ = $colors$$ === Visualizer.MODE_PAINT, $isQuad$$ = $obj$$.display.find(".featured").hasClass("isQuad");
      $obj$$.updateTabDisplay();
      0 <= $obj$$.numColors() && !$isQuad$$ ? ($obj$$.display.find(".featured").hide(), $obj$$.tabContainer.show()) : ($obj$$.display.find(".featured").show(), $obj$$.tabContainer.hide());
      $colors$$ && $isQuad$$ && ($obj$$.display.find(".featured").hide(), $obj$$.tabContainer.show());
      $colors$$ = [$obj$$.getColor(0), $obj$$.getColor(1), $obj$$.getColor(2), $obj$$.getColor(3)];
      if($obj$$.isQuad && ($obj$$._quadColors[0] !== $colors$$[0] || $obj$$._quadColors[1] !== $colors$$[1] || $obj$$._quadColors[2] !== $colors$$[2] || $obj$$._quadColors[3] !== $colors$$[3])) {
        $obj$$._setQuad(!1), 8 > $obj$$.numColors() && $obj$$.addTab()
      }
      $obj$$.dispatchEvent("onColorsUpdated", $e$$)
    });
    this.updateTabDisplay()
  };
  this.resetToInitPaletteArea = function $this$resetToInitPaletteArea$($co_force$$) {
    if(null === $co_force$$ || "undefined" === typeof $co_force$$) {
      $co_force$$ = !1
    }
    if(null !== visualizer && "undefined" !== typeof visualizer) {
      if($co_force$$ || visualizer.mode === Visualizer.MODE_COLORS) {
        visualizer.display.find(".paletteArea .initial").show(), visualizer.display.find(".paletteArea .initial.initial-pyp").hide(), visualizer.display.find(".paletteArea .post").hide(), visualizer.display.find(".dividerShadow").hide(), $co_force$$ = visualizer.display.find(".colorOptions"), $co_force$$.find(".initialText").show(), $co_force$$.find(".paletteText").hide()
      }
      visualizer.paintFlashRooms(visualizer.pr, visualizer.rt, nullColor);
      this.paintPreviewRoom(nullColor)
    }
  };
  this.updateTabDisplay = function $this$updateTabDisplay$($color$$0$$, $index$$0$$) {
    function $wireAddColorButton$$($outer$$, $numColors$$) {
      var $i$$ = $outer$$.find(".slot");
      $outer$$.find(".item").remove();
      $i$$.find(".img").hide();
      var $item$$ = $i$$.clone();
      $item$$.removeClass("slot");
      $item$$.addClass("item");
      $item$$.find(".remove").hide();
      var $swatch$$ = $item$$.find(".colorSwatch");
      $swatch$$.removeClass("colorSwatch");
      $swatch$$.addClass("addButton");
      $i$$.before($item$$);
      $item$$.on("mouseup", function($e$$105_event$$) {
        $e$$105_event$$ = {};
        $e$$105_event$$.index = $index$$0$$;
        $e$$105_event$$.color = null;
        $e$$105_event$$.tab = $($outer$$);
        $obj$$.addColorSwitch = !0;
        visualizer.mode === Visualizer.MODE_PAINT && ($obj$$.returnToPaintMode = !0);
        $obj$$.setSelectedTab($index$$0$$);
        $obj$$.dispatchEvent("onTabClick", $e$$105_event$$)
      })
    }
    function $wire$$($outer$$, $color$$, $index$$) {
      var $i$$ = $outer$$.find(".slot");
      $outer$$.find(".item").remove();
      if(null != $color$$) {
        $i$$.find(".img").hide();
        var $item$$ = $i$$.clone();
        $item$$.removeClass("slot");
        $item$$.addClass("item");
        var $swatch$$ = $item$$.find(".colorSwatch");
        $swatch$$.css("background-color", $color$$.rgb);
        $item$$.find(".text").html(toTitleCase($color$$.name) + "<br/><span>" + $color$$.id + "</span>");
        $item$$.find(".remove").on("click", function($e$$) {
          $e$$.stopPropagation();
          $e$$ = {};
          $e$$.color = $color$$;
          $e$$.index = $index$$;
          $obj$$.dispatchEvent("onRemove", $e$$);
          return!1
        });
        $i$$.before($item$$);
        $obj$$.setPreviewColor($color$$);
        visualizer.paintFlashRooms(visualizer.pr, visualizer.rt, $color$$);
        var $data$$ = new DragData({color:$color$$, index:$index$$, type:DragType.UserPalette});
        $item$$.draggable({revert:!0, cursorAt:{top:20, left:20}, helper:function() {
          return $swatch$$.clone()
        }, revertDuration:50, distance:14, start:function() {
          dragOp.startDrag($data$$)
        }, stop:function() {
          setTimeout(function() {
            $item$$.css("top", "");
            $item$$.css("left", "")
          }, 50);
          dragOp.stopDrag()
        }}).data("src", $data$$);
        $item$$.find("input:checkbox").on("click", function($e$$) {
          $obj$$.setCompare($index$$, this.checked);
          $e$$.stopPropagation()
        });
        $item$$.on("mouseup", function($e$$108_event$$) {
          $e$$108_event$$ = {};
          $e$$108_event$$.index = $index$$;
          $e$$108_event$$.color = $color$$;
          $e$$108_event$$.tab = $($outer$$);
          $obj$$.getColor($index$$) && $obj$$.setSelectedTab($index$$);
          $obj$$.dispatchEvent("onTabClick", $e$$108_event$$)
        });
        $i$$ = $outer$$.find(".tabMenu");
        $i$$.find(".details").on("click", function($e$$) {
          $e$$ = {};
          $e$$.index = $index$$;
          $e$$.color = $color$$;
          $obj$$.dispatchEvent("onDetails", $e$$)
        });
        $i$$.find(".save").on("click", function($e$$) {
          $e$$ = {};
          $e$$.index = $index$$;
          $e$$.color = $color$$;
          $obj$$.dispatchEvent("onSave", $e$$)
        });
        var $spacer$$ = $i$$.find(".spacer");
        1 < $numColors$$ ? ($i$$.find(".compareContainer").show(), $($spacer$$[1]).show()) : ($i$$.find(".compareContainer").hide(), $($spacer$$[1]).hide());
        $i$$.find(".compare").on("click", function($e$$) {
          visualizer.compareColors($e$$)
        })
      }
    }
    var $obj$$ = this, $numColors$$ = this.numColors();
    this.tabContainerList.html("");
    for($index$$0$$ = 0;$index$$0$$ < $numColors$$;$index$$0$$++) {
      this.addTab();
      var $currentMode$$1_outer$$ = $obj$$.getTab($index$$0$$);
      $color$$0$$ = this.getColor($index$$0$$);
      $wire$$($currentMode$$1_outer$$, $color$$0$$, $index$$0$$)
    }
    var $isQuad$$ = $obj$$.display.find(".featured").hasClass("isQuad"), $currentMode$$1_outer$$ = "__currMode";
    null !== visualizer && "undefined" !== typeof visualizer && ($currentMode$$1_outer$$ = visualizer.mode);
    var $onVis$$ = $currentMode$$1_outer$$ === Visualizer.MODE_PAINT;
    8 > $numColors$$ && ($onVis$$ && ($isQuad$$ = this.isQuad), $isQuad$$ || (this.addTab(), $currentMode$$1_outer$$ = $obj$$.getTab($index$$0$$), $wireAddColorButton$$($currentMode$$1_outer$$, $numColors$$)));
    3 < $numColors$$ && !$isQuad$$ ? this.display.find(".previewControls").hide() : this.display.find(".previewControls").show();
    $onVis$$ && this.display.find(".previewControls").hide();
    0 === $numColors$$ && !$isQuad$$ && $obj$$.resetToInitPaletteArea();
    this.returnToPaintMode && (this.returnToPaintMode = !1, window.location.hash = "paint");
    this.setSelectedTab(this.selectedTab)
  };
  this.previewRoom = null;
  this.loadPreviewRoom = function $this$loadPreviewRoom$($t$$5_template$$) {
    $t$$5_template$$ = new RoomTemplate("-1", "", $t$$5_template$$.compareShadow, $t$$5_template$$.compareBase, [$t$$5_template$$.comparePaintable], [$t$$5_template$$.comparePaintable], [0, 0], [0], null, !1, null, null, null, null, null, null);
    this.previewRoom.loadRoom($t$$5_template$$, null)
  };
  this.initFeatured = function $this$initFeatured$() {
    var $obj$$ = this, $f$$ = this.display.find(".smallPreview"), $room$$ = loadModuleDisplay("PaintRoom");
    $f$$.append($room$$);
    this.previewRoom = new PaintRoom($room$$, !0, 190, 136);
    this.previewRoom.palette = new Palette;
    this.previewRoom.onready = function $this$previewRoom$onready$() {
      $obj$$.paintPreviewRoom($obj$$.previewQuad ? $obj$$.previewQuad[0] : $obj$$.previewColor)
    };
    this.featured.chip = this.display.find(".featured .chip");
    this.featured.name = this.display.find(".featured .name");
    this.featured.id = this.display.find(".featured .id");
    $f$$ = this.display.find(".featured .quad .palette div");
    $f$$.on("mouseover", function($color$$34_e$$) {
      $color$$34_e$$ = $obj$$.previewQuad[$(this).index()];
      showTooltip($color$$34_e$$.name, $color$$34_e$$.id, $(this))
    });
    $f$$.on("mouseout", function($e$$) {
      hideTooltip()
    })
  };
  this.paintPreviewRoom = function $this$paintPreviewRoom$($color$$) {
    !$color$$ && this.hasSelectedTab() ? this.previewRoom.paintSectionByIndex(this.getSelectedColor(), 0) : $color$$ && this.previewRoom.paintSectionByIndex($color$$, 0)
  };
  this.transitionQuad = function $this$transitionQuad$() {
    var $n$$ = [this.getColor(0), this.getColor(1), this.getColor(2), this.getColor(3)];
    this.setPreviewQuad($n$$);
    this._oldQuad = $n$$;
    this.setColors([], UndoRedoStack.IGNORE)
  };
  this.setPreviewColor = function $this$setPreviewColor$($color$$) {
    if(!$color$$) {
      if(0 < this.numColors() && this.hasSelectedTab()) {
        $color$$ = this.getSelectedColor()
      }else {
        return
      }
    }
    this.featuredColorDetailsLink.text("Color Details");
    this.previewColor = $color$$;
    this.setPreviewQuad(null);
    this.setColor($color$$, 0);
    $(".featured .title").hide();
    this.paintPreviewRoom($color$$);
    var $o$$ = {};
    $o$$.color = $color$$;
    this.dispatchEvent("onPreviewUpdated", $o$$)
  };
  this.setPreviewQuad = function $this$setPreviewQuad$($colors$$) {
    if(this.previewQuad = $colors$$) {
      this.featured.name.html($colors$$[0].name.toLowerCase());
      this.featured.id.html($colors$$[0].id);
      $(".featured .title").show();
      this.display.find(".previewControls").show();
      this.display.find(".featured").addClass("isQuad");
      this.featuredColorDetailsLink.text("Palette Details");
      this.setColors([], UndoRedoStack.IGNORE);
      this.display.find(".featured").addClass("isQuad");
      this.display.find(".color1").css("background-color", $colors$$[0].rgb);
      this.display.find(".color2").css("background-color", $colors$$[1].rgb);
      this.display.find(".color3").css("background-color", $colors$$[2].rgb);
      this.display.find(".color4").css("background-color", $colors$$[3].rgb);
      this.display.find(".featured .inner").html("<span class='name'>" + $colors$$[0].name + "</span><br/><span class='id'>" + $colors$$[0].id + "</span>");
      this.paintPreviewRoom($colors$$[0]);
      this.display.find(".ui-draggable").draggable({disabled:!0});
      var $o$$ = {};
      $o$$.quad = $colors$$;
      this.dispatchEvent("onPreviewUpdated", $o$$)
    }else {
      this.display.find(".featured").removeClass("isQuad")
    }
  };
  this.addTab = function $this$addTab$() {
    var $obj$$ = this, $tab$$ = this.tabTemplate.clone();
    this.tabContainerList.append($tab$$);
    $tab$$.on("click", function($e$$114_event$$) {
      $e$$114_event$$ = {};
      $e$$114_event$$.index = $($tab$$).index();
      $e$$114_event$$.color = $obj$$.getColor($e$$114_event$$.index);
      $e$$114_event$$.tab = $($tab$$);
      $obj$$.dispatchEvent("onTabClick", $e$$114_event$$)
    });
    $tab$$.droppable({drop:function($e$$, $u$$) {
      var $src$$ = $u$$.draggable.data("src"), $color$$ = $src$$.color, $index$$ = $tab$$.index();
      $src$$.type === DragType.ColorSearch ? userSession.palette.hasColor($color$$) || $obj$$.setColor($color$$, $index$$) : $src$$.type === DragType.UserPalette && ($index$$ != $src$$.index && $obj$$.getColor($index$$) instanceof ColorDef) && ($u$$.draggable.detach(), $obj$$.paletteData.swapColors($index$$, $src$$.index), $obj$$.selectedTab == $index$$ ? $obj$$.setSelectedTab($src$$.index) : $obj$$.selectedTab === $src$$.index && $obj$$.setSelectedTab($index$$))
    }})
  };
  this.init = function $this$init$() {
    function $wireDrag$$($item$$, $index$$) {
      var $data$$ = new DragData({color:null, index:$index$$, type:DragType.UserPalette});
      $item$$.draggable({revert:!0, cursorAt:{top:20, left:20}, helper:function() {
        var $s$$ = $swatch$$.clone();
        $s$$.css("background-color", $obj$$.getColor($index$$).rgb);
        return $s$$
      }, revertDuration:$revertDuration$$, distance:14, start:function() {
        $data$$.color = $obj$$.getColor($index$$);
        $item$$.data("src", $data$$);
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }})
    }
    function $wireClick$$($item$$, $index$$) {
      $item$$.on("click", function() {
        $obj$$.setSelectedTab($index$$)
      })
    }
    var $obj$$ = this;
    this.tabContainer = $display$$.find(".tabs");
    this.tabContainerList = this.tabContainer.find(".list");
    this.tabTemplate = this.tabContainerList.find(".colorTab");
    this.tabTemplate.remove();
    this.setPalette(new Palette);
    var $f$$7_x$$ = this.display.find(".tabs .quad .palette div");
    $f$$7_x$$.on("mouseover", function($color$$38_e$$) {
      $color$$38_e$$ = $obj$$.getColor($(this).index());
      showTooltip($color$$38_e$$.name, $color$$38_e$$.id, $(this))
    });
    $f$$7_x$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    this.initFeatured();
    for(var $revertDuration$$ = 50, $swatch$$ = this.tabTemplate.find(".colorSwatch"), $f$$7_x$$ = 0;4 > $f$$7_x$$;$f$$7_x$$++) {
      var $n$$ = this.display.find(".color" + ($f$$7_x$$ + 1));
      $wireDrag$$($n$$, $f$$7_x$$);
      $wireClick$$($n$$, $f$$7_x$$)
    }
    this.featuredColorDetailsLink = this.display.find(".featured .details");
    this.featuredColorDetailsLink.on("click", function($e$$) {
      $e$$ = {};
      null != $obj$$.previewQuad ? $e$$.colors = $obj$$.previewQuad : $e$$.color = $obj$$.previewColor;
      $obj$$.dispatchEvent("onDetails", $e$$)
    });
    this.display.find(".featured .save").on("click", function($e$$) {
      $e$$ = {};
      $obj$$.previewQuad ? $e$$.colors = $obj$$.previewQuad : $e$$.color = $obj$$.previewColor;
      $obj$$.dispatchEvent("onSave", $e$$)
    })
  };
  this.init()
}
;function SinglePalette($display$$) {
  this.display = $display$$;
  this._colorTemplate = this._colorsContainer = null;
  this._palettes = {};
  this._nextButton = this._prevButton = null;
  this._selected = 0;
  this.visibleSwatches = 8;
  EventDispatcher.enableEvents(this, "onSwatchClick", Palette.ON_COLORS_UPDATED);
  this.refreshColorSet = function $this$refreshColorSet$($colors$$) {
    for(var $colorIds$$ = [], $i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      $colors$$[$i$$] && ($colorIds$$[$i$$] = $colors$$[$i$$].id)
    }
    for($i$$ in this._palettes) {
      0 > $.inArray($i$$, $colorIds$$) && (this._palettes[$i$$].display.detach(), delete this._palettes[$i$$])
    }
    for($i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      $colors$$[$i$$] && this._addColor($colors$$[$i$$])
    }
    this._checkPrevNextArrows()
  };
  this.numColors = function $this$numColors$() {
    var $n$$ = 0, $i$$;
    for($i$$ in this._palettes) {
      $n$$ += this._palettes[$i$$].numColors()
    }
    return $n$$
  };
  this._addColor = function $this$_addColor$($color$$) {
    if($color$$) {
      var $webservice$$ = COLOR_MODEL_NX + "/similar/" + $color$$.id, $obj$$ = this, $p$$ = this._palettes[$color$$.id];
      if(!$p$$) {
        $p$$ = new SinglePaletteDisplay($("<div class='palettes'></div>"), this._colorTemplate);
        this._palettes[$color$$.id] = $p$$;
        $p$$.bind(SinglePalette.ON_SWATCH_CLICK, function($e$$) {
          $obj$$.dispatchEvent(SinglePalette.ON_SWATCH_CLICK, $e$$)
        });
        $p$$.bind(Palette.ON_COLORS_UPDATED, function($e$$) {
          $obj$$._checkPrevNextArrows()
        });
        var $__setColors$$ = function $$__setColors$$$($list$$) {
          var $cs$$ = [], $i$$;
          for($i$$ in $list$$) {
            var $c$$ = colorLookup[$list$$[$i$$]];
            $c$$ && $cs$$.push($c$$)
          }
          $p$$.setColors($cs$$, UndoRedoStack.IGNORE)
        };
        $.getJSON($webservice$$, function($json$$4_s$$) {
          $json$$4_s$$ = $json$$4_s$$.similar.split(",");
          $__setColors$$($json$$4_s$$)
        }).error(function() {
          var $s$$ = ColorUtilities._getRandomColorsFor($color$$.id, 7).toString().split(",");
          $__setColors$$($s$$)
        })
      }
      $p$$.display.detach();
      this._colorsContainer.append($p$$.display)
    }
  };
  this._checkPrevNextArrows = function $this$_checkPrevNextArrows$() {
    0 == this._selected ? this._prevButton.addClass("inactive") : this._prevButton.removeClass("inactive");
    this._selected <= this.numColors() - this.visibleSwatches ? this._nextButton.removeClass("inactive") : this._nextButton.addClass("inactive");
    for(var $numColors$$ = this.numColors();this._selected > $numColors$$;) {
      this._selected -= this.visibleSwatches
    }
    this._colorsContainer.css("left", -69 * this._selected + "px")
  };
  this._getNext = function $this$_getNext$() {
    this._selected >= this.numColors() - this.visibleSwatches || (this._selected += this.visibleSwatches, this._checkPrevNextArrows())
  };
  this._getPrev = function $this$_getPrev$() {
    0 >= this._selected || (this._selected -= this.visibleSwatches, this._checkPrevNextArrows())
  };
  var $obj$$0$$ = this;
  this._colorsContainer = this.display.find(".colors");
  this._colorTemplate = this.display.find(".palette").filter(":first");
  this._colorTemplate.remove();
  this._nextButton = this.display.find(".btnNext");
  this._nextButton.on("click", function() {
    $obj$$0$$._getNext()
  });
  this._prevButton = this.display.find(".btnPrev");
  this._prevButton.on("click", function() {
    $obj$$0$$._getPrev()
  })
}
SinglePalette.ON_SWATCH_CLICK = "onSwatchClick";
function SinglePaletteDisplay($display$$, $template$$) {
  Palette.call(this, !1);
  this.display = $display$$;
  this._template = $template$$;
  EventDispatcher.enableEvents(this, SinglePalette.ON_SWATCH_CLICK);
  this.setColors = function $this$setColors$($colors$$, $undoredoflag$$) {
    Palette.prototype.setColors.call(this, $colors$$, $undoredoflag$$);
    this.display.html("");
    for(var $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      var $swatch$$ = this._createDisplay($i$$);
      this.display.append($swatch$$)
    }
  };
  this._createDisplay = function $this$_createDisplay$($index$$) {
    var $obj$$ = this, $clone$$ = this._template.clone(), $color$$ = this.colors[$index$$];
    $clone$$.css("background-color", $color$$.rgb);
    $clone$$.on("click", function() {
      var $event$$ = {};
      $event$$.color = $color$$;
      $obj$$.dispatchEvent(SinglePalette.ON_SWATCH_CLICK, $event$$)
    });
    var $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
    $clone$$.draggable({revert:!0, revertDuration:50, distance:14, cursorAt:{top:20, left:20}, helper:function() {
      return $clone$$.clone()
    }, scroll:!1, appendTo:"body", start:function() {
      dragOp.startDrag($data$$)
    }, stop:function() {
      dragOp.stopDrag()
    }}).data("src", $data$$);
    $clone$$.on("mouseover", function($e$$) {
      t = $(this);
      showTooltip($color$$.name, $color$$.id, t)
    });
    $clone$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    return $clone$$
  }
}
SinglePaletteDisplay.prototype = new Palette;
function UserSession() {
  this.userId = null;
  this.palette = new Palette;
  this.savedColors = [];
  this.bindings = [];
  this.paletteQuad = !1;
  this.paletteIndex = 0;
  this.projectName = "My Project";
  this.projectId = null;
  this.autosave = !0;
  this.projectAppType = "vis";
  this.projectsList = [];
  this.currentRoomId = null;
  this.loginInProgress = this._autosaveInProgress = !1;
  this._serviceUrl = "http://" + window.location.host;
  this._roomSelected = !1;
  EventDispatcher.enableEvents(this, UserSession.ON_LOAD, UserSession.ON_SAVED_COLOR_ADDED, UserSession.ON_SAVED_COLOR_REMOVED, UserSession.ON_BINDINGS_UPDATED, UserSession.ON_PROJECT_NAME_UPDATED, UserSession.ON_PROJECTS_LIST_LOADED, UserSession.ON_PALETTE_UPDATED, UserSession.ON_SAVE_BEGIN, UserSession.ON_SAVE_COMPLETE, UserSession.ON_ERROR, UserSession.ON_DELETE, UserSession.ON_UPDATE_BEGIN, UserSession.ON_UPDATE_COMPLETE, UserSession.ON_LOGIN, UserSession.ON_CART_ADD_SUCCESS, UserSession.ON_CART_ADD_FAIL);
  this.isLoggedIn = function $this$isLoggedIn$() {
    return this.userId ? !0 : !1
  };
  this.setProjectName = function $this$setProjectName$($name$$) {
    this.projectName = $name$$;
    var $e$$ = {};
    $e$$.name = $name$$;
    this.dispatchEvent(UserSession.ON_PROJECT_NAME_UPDATED, $e$$);
    this.checkAutosave();
    saveUsed = "save";
    trySaveProject()
  };
  this.setProjectNameNewProject = function $this$setProjectNameNewProject$($name$$) {
    this.projectName = $name$$;
    var $e$$ = {};
    $e$$.name = $name$$;
    this.dispatchEvent(UserSession.ON_PROJECT_NAME_UPDATED, $e$$)
  };
  this.setPaletteIndex = function $this$setPaletteIndex$($index$$) {
    this.paletteIndex = $index$$;
    this.checkAutosave()
  };
  this.setCurrentRoomId = function $this$setCurrentRoomId$($id$$) {
    this.currentRoomId = $id$$;
    this.checkAutosave()
  };
  this.setProjectAppType = function $this$setProjectAppType$($type$$) {
    this.projectAppType = $type$$;
    this.checkAutosave()
  };
  this.clearBindings = function $this$clearBindings$($templateId$$) {
    delete this.bindings[$templateId$$]
  };
  this.setBindings = function $this$setBindings$($templateId$$, $bindings$$) {
    for(var $clear$$ = !0, $i$$ = 0;$i$$ < $bindings$$.length;$i$$++) {
      if(-1 != $bindings$$[$i$$]) {
        $clear$$ = !1;
        break
      }
    }
    $clear$$ ? this.clearBindings($templateId$$) : this.bindings[$templateId$$] = $bindings$$;
    this.checkAutosave()
  };
  this.getCurrentRoomBindings = function $this$getCurrentRoomBindings$() {
    var $b$$ = this.bindings[this.currentRoomId];
    return $b$$ ? $b$$ : null
  };
  this.checkAutosave = function $this$checkAutosave$() {
    if(this.autosave && !this._autosaveInProgress) {
      var $obj$$ = this;
      this._autosaveInProgress = !0;
      setTimeout(function() {
        $obj$$.save();
        $obj$$._autosaveInProgress = !1
      }, UserSession.AUTO_SAVE_DELAY)
    }
  };
  this.load = function $this$load$($data$$, $projectId$$) {
    this.projectId = $projectId$$ ? $projectId$$ : null;
    this.bindings = [];
    if($data$$) {
      if($data$$.projectName) {
        this.projectName = $data$$.projectName;
        var $e$$ = {};
        $e$$.name = this.projectName;
        this.dispatchEvent(UserSession.ON_PROJECT_NAME_UPDATED, $e$$)
      }
      this.bindings = [];
      var $e$$ = !1, $palette$$ = [null, null, null, null, null, null, null, null];
      if($data$$.palette) {
        for(var $fi_hasRoomData_room$$ = 0, $i$$ = 0;8 > $i$$;$i$$++) {
          var $id$$ = $data$$.palette[$i$$];
          $id$$ && ($palette$$[$fi_hasRoomData_room$$++] = colorLookup[$id$$], $e$$ = !0)
        }
      }
      if($data$$.rooms) {
        $fi_hasRoomData_room$$ = !1;
        for($i$$ in $data$$.rooms) {
          $fi_hasRoomData_room$$ = $data$$.rooms[$i$$], console.info($fi_hasRoomData_room$$), this.bindings[$fi_hasRoomData_room$$.id] = $fi_hasRoomData_room$$.bindings, $fi_hasRoomData_room$$ = !0
        }
        if($fi_hasRoomData_room$$ || $e$$) {
          this._roomSelected = !0
        }
      }
      this.palette.setColors($palette$$, UndoRedoStack.IGNORE);
      this.paletteQuad = $data$$.paletteQuad ? !0 : !1;
      this.paletteIndex = void 0 === $data$$.paletteIndex ? 0 : $data$$.paletteIndex;
      this.currentRoomId = $data$$.currentRoomId;
      this.projectAppType = $data$$.projectAppType;
      console.info("loaded project app type = " + this.projectAppType);
      this.userId == $data$$.userId ? $data$$.projectId && (this.projectId = $data$$.projectId) : this.projectId = null;
      $e$$ = {};
      $e$$.bindings = $data$$.rooms;
      "pyp" == this.projectAppType || "pypload" == this.projectAppType ? (hideVisualizerCanvas(), "pypload" == this.projectAppType ? (this.projectAppType = "pyp", sessionStorage.maskingLines = $data$$.maskingLines, sessionStorage.foundLumins = $data$$.foundLumins, sessionStorage.foundColors = $data$$.foundColors, loadUserPYPProject(this.projectId)) : "undefined" !== typeof Storage ? sessionStorage.drawingCanvas ? (luminMap || loadCanvasStates(), switchFromVisualizerToPYP()) : null != $data$$.projectId && 
      "" != $data$$.projectId ? recallUserPYPProject($data$$.projectId) : (console.info("no data project id to recall, goto viz"), switchFromPYPToVisualizer()) : (console.info("session storage does not exist"), switchFromPYPToVisualizer())) : switchFromPYPToVisualizer();
      this.dispatchEvent(UserSession.ON_LOAD, $e$$);
      this.checkAutosave()
    }
  };
  this.loadUserData = function $this$loadUserData$($id$$) {
    (this.userId = $id$$) && this.getFavoriteColors()
  };
  this.save = function $this$save$() {
    var $cookie$$ = this._getProjectJson();
    setCookie("projectData", JSON.stringify($cookie$$), 0)
  };
  this._init = function $this$_init$() {
    var $obj$$ = this;
    this.palette.bind("onColorsUpdated", function() {
      $obj$$.checkAutosave()
    })
  };
  this.getBlankProjectJson = function $this$getBlankProjectJson$() {
    return{userId:null, projectId:null, projectName:"", projectType:"interior", projectAppType:"vis", palette:[], paletteIndex:0, paletteQuad:!1, currentRoomId:null, rooms:null}
  };
  this._getProjectJson = function $this$_getProjectJson$() {
    var $json$$ = this.getBlankProjectJson();
    $json$$.userId = this.userId;
    $json$$.projectId = this.projectId;
    $json$$.projectName = this.projectName;
    $json$$.paletteIndex = this.paletteIndex;
    $json$$.paletteQuad = this.paletteQuad;
    $json$$.currentRoomId = this.currentRoomId;
    $json$$.rooms = this._getBindingsJson();
    $json$$.projectAppType = this.projectAppType;
    for(var $i$$ = 0;$i$$ < this.palette.colors.length;$i$$++) {
      var $color$$ = this.palette.colors[$i$$];
      $json$$.palette.push(null == $color$$ ? null : $color$$.id)
    }
    return $json$$
  };
  this._getBindingsJson = function $this$_getBindingsJson$() {
    for(var $r$$ = [], $c$$ = 0;$c$$ < this.bindings.length;$c$$++) {
      var $binding$$ = this.bindings[$c$$];
      $binding$$ && $r$$.push({id:$c$$, bindings:$binding$$})
    }
    return $r$$
  };
  this.addToCart = function $this$addToCart$($colors$$) {
    function $addSamplesToCartMain$$($colorCodes_samples$$) {
      $colorCodes_samples$$ = $colorCodes_samples$$.split(",");
      for(var $colorCode$$ = "", $noSample$$ = !1, $noSampleString$$ = "", $numAdded$$ = 0, $productInfo$$, $i$$ = 0;$i$$ < $colorCodes_samples$$.length;$i$$++) {
        if($colorCode$$ = $colorCodes_samples$$[$i$$], 0 < $colorCode$$.length) {
          var $colorName$$1_url$$ = "http://" + getUserServiceURL() + "/omsproductservice/services/getOmsByColorId?colorId=" + $colorCode$$;
          $.ajax({type:"get", url:$colorName$$1_url$$, dataType:"json", contentType:"application/json; charset=utf-8", async:!1, crossDomain:!0, success:function($response$$) {
            $productInfo$$ = JSON.stringify($response$$)
          }, error:function($xhr$$) {
            alert("Error connecting or sending data to service. Pleaes try again.")
          }});
          $productInfo$$ && ("[]" == $productInfo$$ || "" == $productInfo$$ || 5 > $productInfo$$.length) ? ($noSample$$ = !0, $colorName$$1_url$$ = getColorInformation($colorCode$$).split(",")[0], $noSampleString$$ += '<div class="fl" style="width:100%"><h4><img src="/colorsmart4/ColorChipPNGServlet?width=20&height=20&border=thin&colorCode=' + $colorCode$$ + '&bgcolor=FFFFFF" class="fl" style="margin:0 10px 0 0;" />' + $colorName$$1_url$$ + " " + $colorCode$$ + "</h4></div>") : (addToCart($colorCode$$), 
          $numAdded$$++)
        }
      }
      handleOverlayCloseClick();
      $noSample$$ ? ($("#overlay-no_samples div.overlay_content_row-static div.no-samples-list").html($noSampleString$$), showOverlayByID("no_samples")) : showOverlayByID("success_samples");
      return $numAdded$$
    }
    $colors$$ instanceof Array || ($colors$$ = [$colors$$]);
    for(var $samples$$ = "", $colorIds$$ = [], $n$$ = [], $i$$0$$ = 0;$i$$0$$ < $colors$$.length;$i$$0$$++) {
      $colorIds$$[$i$$0$$] = $colors$$[$i$$0$$] instanceof ColorDef ? $colors$$[$i$$0$$].id : null, $n$$[$i$$0$$] = $colors$$[$i$$0$$]
    }
    $colors$$ = $n$$;
    $i$$0$$ = readCookie("behr_shoppingcart");
    if(null != $i$$0$$) {
      $n$$ = $i$$0$$.split(":");
      for($i$$0$$ = 0;$i$$0$$ < $n$$.length - 1;$i$$0$$++) {
        var $cartItem_index$$ = $n$$[$i$$0$$].split(","), $cartItem_index$$ = $.inArray($cartItem_index$$[0], $colorIds$$);
        -1 < $cartItem_index$$ && ($colors$$[$cartItem_index$$] = null)
      }
    }
    for($i$$0$$ = 0;$i$$0$$ < $colors$$.length;$i$$0$$++) {
      $colors$$[$i$$0$$] && (0 < $samples$$.length && ($samples$$ += ","), $samples$$ += $colors$$[$i$$0$$].id)
    }
    showOverlayByID("adding_samples");
    var $obj$$ = this;
    window.setTimeout(function() {
      var $amount$$ = $addSamplesToCartMain$$($samples$$);
      console.info("Amount added:", $amount$$);
      0 < $amount$$ ? (console.info("Dispatching success"), $obj$$.dispatchEvent(UserSession.ON_CART_ADD_SUCCESS, {})) : (console.info("Dispatching fail"), $obj$$.dispatchEvent(UserSession.ON_CART_ADD_FAIL, {}))
    }, 500)
  };
  this.addFavoriteColor = function $this$addFavoriteColor$($color$$) {
    if(0 > $.inArray($color$$, this.savedColors)) {
      var $obj$$ = this;
      $.ajax({type:"post", accept:"application/json", headers:{Accept:"application/json", "Content-Type":"application/json"}, dataType:"json", url:this._serviceUrl + "/usercolor/nextgen/addusercolor", async:!1, data:'{"AddUserColorsVO":{"colors":["' + $color$$.id + '"],"userId":"' + this.userId + '"}}', success:function($e$$127_response$$) {
        $color$$.userColorId = $e$$127_response$$.userColorList[0].userColorId;
        0 > $.inArray($color$$, $obj$$.savedColors) && ($obj$$.savedColors.push($color$$), $e$$127_response$$ = {}, $e$$127_response$$.color = $color$$, $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_ADDED, $e$$127_response$$));
        showOverlayByID("color_save_success");
        setTimeout("handleOverlayCloseClick()", 1E4)
      }, error:function($xhr$$) {
        showOverlayByID("color_save_fail");
        console.log("fail")
      }})
    }
  };
  this.getFavoriteColors = function $this$getFavoriteColors$() {
    console.info("GET FAVORITE COLORS CALLED");
    var $e$$128_url$$ = this._serviceUrl + "/usercolor/nextgen/getusercolors?userid=" + this.userId + "&isoldcolorontop=true", $obj$$ = this;
    $obj$$.savedColors = [];
    $.ajax({type:"get", url:$e$$128_url$$, headers:{"Content-Type":"text/plain"}, async:!0, success:function($l$$5_response$$) {
      if($l$$5_response$$ = $l$$5_response$$.userColorList) {
        for(var $i$$ = 0;$i$$ < $l$$5_response$$.length;$i$$++) {
          var $c$$25_color$$ = colorLookup[$l$$5_response$$[$i$$].colorId];
          if($c$$25_color$$ && 0 > $.inArray($c$$25_color$$, $obj$$.savedColors) && ($c$$25_color$$.userColorId = $l$$5_response$$[$i$$].userColorId, $obj$$.savedColors.push($c$$25_color$$), $c$$25_color$$ = colorLookup[$c$$25_color$$.id])) {
            var $e$$ = {};
            $e$$.color = $c$$25_color$$;
            $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_ADDED, $e$$)
          }
        }
      }
    }, error:function($xhr$$) {
      console.info("Failed to load user colors")
    }});
    $e$$128_url$$ = {};
    $e$$128_url$$.colors = $obj$$.savedColors;
    $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_ADDED, $e$$128_url$$)
  };
  this._deleteFavoriteColorById = function $this$_deleteFavoriteColorById$($id$$) {
    var $obj$$ = this;
    $.ajax({type:"get", url:this._serviceUrl + "/usercolor/nextgen/deleteusercolors/" + $id$$, headers:{"Content-Type":"application/json"}, dataType:"json", async:!1, success:function($c$$26_i$$90_response$$) {
      for($c$$26_i$$90_response$$ = 0;$c$$26_i$$90_response$$ < $obj$$.savedColors.length;$c$$26_i$$90_response$$++) {
        if($obj$$.savedColors[$c$$26_i$$90_response$$].userColorId === $id$$) {
          $c$$26_i$$90_response$$ = $obj$$.savedColors.splice($c$$26_i$$90_response$$, 1);
          var $e$$ = {};
          $e$$.color = $c$$26_i$$90_response$$[0];
          $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_REMOVED, $e$$);
          return!0
        }
      }
    }, error:function($xhr$$) {
      console.error("Failed to delete color")
    }});
    return!1
  };
  this.removeFavoriteColor = function $this$removeFavoriteColor$($color$$) {
    console.info($color$$.userColorId);
    return!$color$$ || !$color$$.userColorId ? !1 : this._deleteFavoriteColorById($color$$.userColorId)
  };
  this.emailProject = function $this$emailProject$($email$$, $subject$$, $optIn$$) {
    $.ajax({type:"post", headers:{"Content-Type":"text/plain"}, url:this._serviceUrl + "/emailnx/send", async:!0, data:JSON.stringify({webVisualizerShare:{to:$email$$, subject:"NextGen Visualizer Project Share", optIn:"N", html:{}, objects:{StoreVO:{storeNumber:"WEB"}, ColorVO:{colorCode1:"S-G-340", colorCode2:"440C-3", colorCode3:"540C-1", colorCode4:"640E-1", colorCode5:"PPU6-11", colorCode6:"750E-3", colorCode7:"140C-1", colorCode8:"240F-7"}}, image1:{restURI:"render?roomId=1002&surfaceId1=1&color1=540C-1&surfaceId2=2&color2=440C-3&surfaceId3=3&color3=750E-3&surfaceId4=&color4=&surfaceId5=&color5=&surfaceId6=6&color6=640E-1&surfaceId7=7&color7=S-G-340&surfaceId8=8&color8=240F-7&surfaceId9=&color9=&surfaceId10=&color10="}}}), 
    success:function($response$$) {
      console.info("success", $response$$)
    }, error:function($xhr$$) {
      console.info("fail", $xhr$$)
    }})
  };
  this.saveProject = function $this$saveProject$() {
    var $obj$$ = this, $data$$ = this._getProjectJson();
    $data$$.projectId = null;
    $data$$.hasOwnProperty("projectAppType") ? "pyp" == $data$$.projectAppType && (console.info("pyp save"), $data$$.thumbnail = document.getElementById("thumbnail").toDataURL(), $data$$.foundColors = sessionStorage.foundColors, $data$$.foundLumins = sessionStorage.foundLumins, $data$$.maskingLines = sessionStorage.maskingLines, $data$$.drawingCanvas = sessionStorage.drawingCanvas, $data$$.segmentCanvas = sessionStorage.segmentCanvas, $data$$.colorCanvas = sessionStorage.colorCanvas, $data$$.mainImage = 
    sessionStorage.mainImage, $data$$.luminImage = sessionStorage.luminImage, void 0 === $data$$.luminImage && ($data$$.luminImage = "data:image/png")) : $data$$.projectAppType = "vis";
    var $data$$ = {NextGenProjectVO:$data$$}, $es$$ = {};
    $es$$.id = this.projectId;
    this.dispatchEvent(UserSession.ON_SAVE_BEGIN, $es$$);
    $.ajax({type:"post", headers:{"Content-Type":"text/plain"}, url:this._serviceUrl + "/project/nextgen/saveproject", async:!0, data:JSON.stringify($data$$), success:function($e$$131_response$$) {
      "/pro/" == consumerContext ? googleAnalyticsTagEvents("High Value-MyBehrPro", "Project Saved", "Saved") : googleAnalyticsTagEvents("High Value-MyBehr", "Project Saved", "Saved");
      $obj$$.projectId = $e$$131_response$$.NextGenProjectVO.projectId;
      $e$$131_response$$ = $obj$$._getProjectJson();
      setCookie("projectData", JSON.stringify($e$$131_response$$), 0);
      console.info("update cookie with id obj");
      $e$$131_response$$ = {};
      $e$$131_response$$.id = $obj$$.projectId;
      $obj$$.dispatchEvent(UserSession.ON_SAVE_COMPLETE, $e$$131_response$$)
    }, error:function($xhr$$) {
      console.info("Failed");
      e = {};
      e.type = UserSession.ERR_TYPE_SAVE;
      e.message = "Failed to save project.";
      $obj$$.dispatchEvent(UserSession.ON_ERROR, e)
    }})
  };
  this.saveAnonymousProject = function $this$saveAnonymousProject$() {
    var $prjdata$$ = this._getProjectJson();
    "pyp" === $prjdata$$.projectAppType && (console.info("save anonymous pyp project"), $prjdata$$.thumbnail = document.getElementById("thumbnail").toDataURL(), $prjdata$$.foundColors = sessionStorage.foundColors, $prjdata$$.foundLumins = sessionStorage.foundLumins, $prjdata$$.maskingLines = sessionStorage.maskingLines, $prjdata$$.drawingCanvas = sessionStorage.drawingCanvas, $prjdata$$.segmentCanvas = sessionStorage.segmentCanvas, $prjdata$$.colorCanvas = sessionStorage.colorCanvas, $prjdata$$.mainImage = 
    sessionStorage.mainImage);
    $prjdata$$.projectId = null;
    var $data$$ = {NextGenProjectVO:$prjdata$$};
    console.info("anonymous save project prjdata=" + JSON.stringify($prjdata$$));
    var $projectId$$ = null;
    $.ajax({type:"post", headers:{"Content-Type":"text/plain"}, url:this._serviceUrl + "/project/nextgen/anonymousproject", async:!1, data:JSON.stringify($data$$), success:function($response$$) {
      "pro" == consumerContext ? googleAnalyticsTagEvents("High Value-MyBehrPro", "Project Saved", "Saved") : googleAnalyticsTagEvents("High Value-MyBehr", "Project Saved", "Saved");
      $projectId$$ = $response$$.NextGenProjectVO.projectId
    }, error:function($xhr$$) {
    }});
    return $projectId$$
  };
  this.deleteProject = function $this$deleteProject$($projectId$$) {
    var $obj$$ = this;
    $.ajax({type:"get", headers:{"Content-Type":"application/json"}, url:this._serviceUrl + "/project/nextgen/deleteprojectx?projectid=" + $projectId$$, data:"application/json", async:!0, success:function($e$$132_response$$) {
      $obj$$.projectId == $projectId$$ && ($obj$$.projectId = null, $obj$$.checkAutosave());
      $e$$132_response$$ = {};
      $e$$132_response$$.projectId = $projectId$$;
      $obj$$.dispatchEvent(UserSession.ON_DELETE, $e$$132_response$$)
    }, error:function($xhr$$) {
      alert("An error occurred and we have failed to delete your project.  Sorry!")
    }})
  };
  this.updateProject = function $this$updateProject$() {
    var $obj$$ = this, $data$$35_prjdata$$ = this._getProjectJson();
    $data$$35_prjdata$$.hasOwnProperty("projectAppType") ? "pyp" == $data$$35_prjdata$$.projectAppType && ($data$$35_prjdata$$.thumbnail = document.getElementById("thumbnail").toDataURL(), $data$$35_prjdata$$.foundColors = sessionStorage.foundColors, $data$$35_prjdata$$.foundLumins = sessionStorage.foundLumins, $data$$35_prjdata$$.maskingLines = sessionStorage.maskingLines, $data$$35_prjdata$$.drawingCanvas = sessionStorage.drawingCanvas, $data$$35_prjdata$$.segmentCanvas = sessionStorage.segmentCanvas, 
    $data$$35_prjdata$$.colorCanvas = sessionStorage.colorCanvas, $data$$35_prjdata$$.mainImage = sessionStorage.mainImage) : $data$$35_prjdata$$.projectAppType = "vis";
    var $data$$35_prjdata$$ = {NextGenProjectVO:{created:"", jsonData:{NextGenProjectVO:$data$$35_prjdata$$}, modified:"", projectId:this.projectId, userId:this.userId}}, $es$$ = {};
    $es$$.id = this.projectId;
    this.dispatchEvent(UserSession.ON_UPDATE_BEGIN, $es$$);
    $.ajax({type:"put", accept:"application/json", headers:{Accept:"application/json", "Content-Type":"text/plain"}, url:this._serviceUrl + "/project/nextgen/updateproject", async:!0, data:JSON.stringify($data$$35_prjdata$$), success:function($e$$133_response$$) {
      "pro" == consumerContext ? googleAnalyticsTagEvents("High Value-MyBehrPro", "Project Saved", "Saved") : googleAnalyticsTagEvents("High Value-MyBehr", "Project Saved", "Saved");
      $e$$133_response$$ = {};
      $e$$133_response$$.id = $obj$$.projectId;
      $obj$$.dispatchEvent(UserSession.ON_UPDATE_COMPLETE, $e$$133_response$$)
    }, error:function($xhr$$) {
      console.info("Failed", $xhr$$);
      e = {};
      e.type = UserSession.ERR_TYPE_UPDATE;
      e.message = "Failed to save project.";
      $obj$$.dispatchEvent(UserSession.ON_ERROR, e)
    }})
  };
  this.saveFavoriteColors = function $this$saveFavoriteColors$() {
    $.ajax({type:"post", accept:"application/json", headers:{Accept:"application/json", "Content-Type":"application/json"}, dataType:"json", url:this._serviceUrl + "/usercolor/nextgen/addusercolor", async:!0, data:JSON.stringify({AddUserColorsVO:{colors:["PPU7-12", "PPU11-8"], userId:this.userId}}), success:function($response$$) {
      "pro" == consumerContext ? googleAnalyticsTagEvents("High Value-MyBehrPro", "Colors Saved", "Saved") : googleAnalyticsTagEvents("High Value-MyBehr", "Colors Saved", "Saved");
      alert(JSON.stringify($response$$))
    }, error:function($xhr$$) {
      alert("Error!  Status = " + $xhr$$.status + " Message = " + $xhr$$.statusText)
    }})
  };
  this.loadProject = function $this$loadProject$($id$$) {
    console.info("load single project");
    var $obj$$ = this;
    $.getJSON(this._serviceUrl + "/project/nextgen/getproject?projectid=" + $id$$, function($json$$) {
    }).success(function($json$$9_nextGenProjectVO$$) {
      $json$$9_nextGenProjectVO$$ = eval("(" + $json$$9_nextGenProjectVO$$.NextGenProjectVO.jsonData + ")").NextGenProjectVO;
      "pyp" == $json$$9_nextGenProjectVO$$.projectAppType && ($json$$9_nextGenProjectVO$$.projectAppType = "pypload");
      $obj$$.load($json$$9_nextGenProjectVO$$, $id$$);
      return!0
    }).error(function() {
      console.info("Failed to reach service")
    });
    return!1
  };
  this.getAllProjects = function $this$getAllProjects$() {
    var $obj$$ = this;
    this.userId && ($obj$$.projectsList = [], $.getJSON(this._serviceUrl + "/project/nextgen/getallprojects?userid=" + this.userId, function($json$$) {
    }).success(function($e$$134_json$$) {
      if(!$e$$134_json$$.status) {
        if($e$$134_json$$.list["com.behr.colorsmart4.project.service.NextGenProjectVO"]) {
          var $p$$ = $e$$134_json$$.list["com.behr.colorsmart4.project.service.NextGenProjectVO"];
          $p$$ instanceof Array || ($p$$ = [$p$$]);
          for(var $i$$ = 0;$i$$ < $p$$.length;$i$$++) {
            var $project_projectId$$ = eval("(" + $p$$[$i$$].jsonData + ")").NextGenProjectVO;
            $project_projectId$$.projectId = $p$$[$i$$].projectId;
            $project_projectId$$.hasOwnProperty("projectAppType") && "pyp" == $project_projectId$$.projectAppType && ($project_projectId$$.projectAppType = "pypload");
            $obj$$.projectsList.push($project_projectId$$)
          }
        }
        if($e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"]) {
          for($p$$ = 0;$p$$ < $e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"].length;$p$$++) {
            if($e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$] instanceof Object) {
              console.info($e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$]);
              var $project_projectId$$ = $e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].projectId, $projectName$$ = $e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].projectName, $userId$$ = $e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].userId, $palette$$ = $e$$134_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].palette, $colors$$ = [], $i$$ = !1;
              if($palette$$) {
                var $paletteVO$$ = $palette$$.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
                $paletteVO$$ instanceof Array || ($paletteVO$$ = [$paletteVO$$]);
                for(var $rawcolors$$ = [], $i$$ = 0;$i$$ < $paletteVO$$.length;$i$$++) {
                  $rawcolors$$[$paletteVO$$[$i$$].order] = $paletteVO$$[$i$$].colorId
                }
                for($i$$ = 0;$i$$ < $rawcolors$$.length;$i$$++) {
                  $rawcolors$$[$i$$] && colorLookup[$rawcolors$$[$i$$]] && $colors$$.push($rawcolors$$[$i$$])
                }
                $i$$ = 0 == $palette$$.paletteType
              }
              $palette$$ = $obj$$.getBlankProjectJson();
              $palette$$.userId = $userId$$;
              $palette$$.projectId = $project_projectId$$;
              $palette$$.projectName = $projectName$$;
              $palette$$.palette = $colors$$;
              $palette$$.paletteIndex = 0;
              $palette$$.paletteQuad = $i$$;
              $palette$$.currentRoomId = null;
              $palette$$.rooms = null;
              $palette$$.projectAppType = "vis";
              $obj$$.projectsList.push($palette$$)
            }
          }
        }
      }
      $e$$134_json$$ = {};
      $e$$134_json$$.projectsList = $obj$$.projectsList;
      $obj$$.dispatchEvent(UserSession.ON_PROJECTS_LIST_LOADED, $e$$134_json$$)
    }).error(function() {
      $obj$$.projectsList = [];
      e = {};
      e.type = UserSession.ERR_TYPE_PROJECTS_LIST;
      e.message = "Failed to load projects list.";
      $obj$$.dispatchEvent(UserSession.ON_ERROR, e)
    }))
  };
  this._init()
}
UserSession.ON_LOAD = "load";
UserSession.ON_SAVED_COLOR_ADDED = "favoritecoloradded";
UserSession.ON_SAVED_COLOR_REMOVED = "favoritecolorremoved";
UserSession.ON_PALETTE_UPDATED = "paletteUpdated";
UserSession.ON_BINDINGS_UPDATED = "bindingsupdated";
UserSession.ON_PROJECT_NAME_UPDATED = "projectnameupdated";
UserSession.ON_PROJECTS_LIST_LOADED = "projectslistloaded";
UserSession.ON_ERROR = "error";
UserSession.ON_DELETE = "delete";
UserSession.ON_UPDATE_COMPLETE = "updatecomplete";
UserSession.ON_UPDATE_BEGIN = "updatebegin";
UserSession.ON_SAVE_BEGIN = "savebegin";
UserSession.ON_SAVE_COMPLETE = "savecomplete";
UserSession.ON_LOGIN = "login";
UserSession.ON_CART_ADD_SUCCESS = "cartaddsuccess";
UserSession.ON_CART_ADD_FAIL = "cartaddfail";
UserSession.ERR_TYPE_PROJECTS_LIST = 0;
UserSession.ERR_TYPE_UPDATE = 1;
UserSession.ERR_TYPE_SAVE = 2;
UserSession.ERR_TYPE_LOGIN = 3;
UserSession.AUTO_SAVE_DELAY = 350;
function Visualizer($display$$, $params$$0$$) {
  this.display = $display$$;
  this.mode = Visualizer.MODE_COLORS;
  this.suggestedPalettesTab = this.roomPicker = this.colorPicker = this.room = this.palette = this.colorBrowser = null;
  this.targetPaletteIndex = -1;
  this.isExterior = !1;
  this.noColorWarning = "Please select at least one color to paint the room.";
  this.roomTemplates = {};
  this.roomTemplateCategories = [];
  this.roomTemplatesById = [];
  this.currentRoom = null;
  this.activeIndex = this.activeCategory = -1;
  this.fastSwitch = !1;
  this.isRoom = this.firstVisit = !0;
  this.setMode = function $this$setMode$($mode$$, $immediate$$) {
    if(this.mode !== $mode$$) {
      var $obj$$ = this, $x$$ = 0, $a$$ = "", $r$$ = "";
      switch($mode$$) {
        case Visualizer.MODE_COLORS:
          this.mode = $mode$$;
          helpManager.removeHelp(".tsh_firstPaint", !0, !0);
          $a$$ = "_colorMode";
          $r$$ = "_paintMode";
          this.palette.isQuad ? this.palette.transitionQuad() : 0 === $obj$$.palette.numColors() && $obj$$.palette.resetToInitPaletteArea(!0);
          this.palette.setPreviewColor();
          "block" == $("div.smallPYPPreview").css("display") && ($("div.smallPreview").hide(), $("ul.roomCarosuel").hide());
          $("div.paletteArea div.initial.initial-pyp").css("display", "none");
          googleAnalyticsTagEvents("Medium Value-StartCS", "ColorSmart Started", "");
          break;
        case Visualizer.MODE_PAINT:
          this.mode = $mode$$;
          $a$$ = "_paintMode";
          $r$$ = "_colorMode";
          $x$$ = -726;
          this.fastSwitch = !1;
          this.palette.previewQuad ? this.applyQuadPaletteColors(this.room.paletteBindings, this.palette.previewQuad) : this.palette.previewColor instanceof ColorDef && 0 == this.palette.numColors() && this.palette.setColor(this.palette.previewColor);
          0 < userSession.palette.numColors() && $("div#disablePYP").hide();
          var $pypParameter$$ = getParameterByName("pyp");
          !userSession._roomSelected && this.firstVisit ? (this.showRoomPicker(), this.roomPicker.bind(RoomPicker.OnClose, function($e$$) {
            $obj$$.roomPicker.unbind(RoomPicker.OnClose);
            "pyp" != userSession.projectAppType && "PYP" != userSession.projectAppType ? !$obj$$.room.isPainted() && "start" != $pypParameter$$ && setTimeout(function() {
              helpManager.showHelp($(".help.tsh_firstPaint"))
            }, 400) : console.info("pyp project, do not show first paint help")
          }), "start" != $pypParameter$$ && setTimeout(function() {
            helpManager.showHelp($(".help.tsh_firstPaint"))
          }, 400)) : "pyp" != userSession.projectAppType && "PYP" != userSession.projectAppType ? !$obj$$.room.isPainted() && (0 < userSession.palette.numColors() && "start" != $pypParameter$$) && setTimeout(function() {
            helpManager.showHelp($(".help.tsh_firstPaint"))
          }, 400) : console.info("pyp project, do not show first paint help");
          googleAnalyticsTagEvents("Medium Value-Preview", "Room Previewed", "");
          break;
        default:
          console.info("unknown mode");
          return
      }
      this.mode = $mode$$;
      this.palette.showHidePreviewRoom();
      var $modes$$ = this.display.find(".modes");
      $modes$$.animate({left:$x$$}, 250, "easeOutQuad");
      $modes$$.removeClass($r$$);
      $modes$$.addClass($a$$);
      this.firstVisit = !1
    }
  };
  this.load = function $this$load$($json$$) {
    var $categoryToShow$$ = 0, $roomToShow$$ = 0, $g$$;
    for($g$$ in $json$$) {
      var $group_ordered$$ = $json$$[$g$$], $i$$ = $group_ordered$$.visualizerRooms;
      if(!(0 >= $i$$.length)) {
        var $groupName$$ = $group_ordered$$.groupName, $isExterior$$1_t$$ = $group_ordered$$.isExterior;
        -1 == $.inArray($groupName$$, this.roomTemplateCategories) && (this.roomTemplateCategories[$group_ordered$$.order - 1] = $groupName$$);
        this.roomTemplates[$groupName$$] = [];
        1 == $group_ordered$$.order && ($categoryToShow$$ = $groupName$$);
        for(var $r$$ = 0;$r$$ < $i$$.length;$r$$++) {
          var $overlay$$1_template$$ = $i$$[$r$$].shadowMap, $base$$ = $i$$[$r$$].baseImg;
          "null" == $base$$ && ($base$$ = null);
          var $thumb$$ = $i$$[$r$$].thumbNail, $id$$ = $i$$[$r$$].roomId, $surfaces$$ = [], $compareBase$$ = $i$$[$r$$].compareBase, $compareShadow$$ = $i$$[$r$$].compareShadow, $comparePaintable$$ = $i$$[$r$$].comparePaintable, $shadowX$$ = $i$$[$r$$].shadowX, $shadowY$$ = $i$$[$r$$].shadowY;
          1 == $i$$[$r$$].order && 1 == $group_ordered$$.order && ($roomToShow$$ = $r$$);
          for(var $offsets$$ = [], $areas$$ = [], $highlights$$ = [], $bindings$$ = [], $surfaces$$ = $i$$[$r$$].visualizerSurfaces, $v$$ = 0;$v$$ < $surfaces$$.length;$v$$++) {
            var $surface$$ = $surfaces$$[$v$$];
            $areas$$[$v$$] = $surface$$.paintableAreaImage;
            $highlights$$[$v$$] = $surface$$.overlayImage;
            $bindings$$[$v$$] = -1;
            $offsets$$[2 * $v$$] = $surface$$.x;
            $offsets$$[2 * $v$$ + 1] = $surface$$.y
          }
          $overlay$$1_template$$ = new RoomTemplate($id$$, $groupName$$, $overlay$$1_template$$, $base$$, $areas$$, $highlights$$, $offsets$$, $bindings$$, $thumb$$, $isExterior$$1_t$$, $surfaces$$, $compareBase$$, $compareShadow$$, $comparePaintable$$, $shadowX$$, $shadowY$$);
          this.roomTemplates[$groupName$$][$i$$[$r$$].order - 1] = $overlay$$1_template$$;
          this.roomTemplatesById[$id$$] = $overlay$$1_template$$
        }
        $group_ordered$$ = [];
        for($i$$ = 0;$i$$ < this.roomTemplates[$groupName$$].length;$i$$++) {
          ($isExterior$$1_t$$ = this.roomTemplates[$groupName$$][$i$$]) && ($group_ordered$$[$group_ordered$$.length] = $isExterior$$1_t$$)
        }
        this.roomTemplates[$groupName$$] = $group_ordered$$
      }
    }
    this.showRoom($categoryToShow$$, $roomToShow$$);
    this._showRoomCarosuel()
  };
  this.setUserRoomBindings = function $this$setUserRoomBindings$($userBindings$$) {
    console.info($userBindings$$);
    for(var $i$$ = 0;$i$$ < this.roomTemplatesById.length;$i$$++) {
      var $o$$ = this.roomTemplatesById[$i$$];
      if($o$$) {
        if($userBindings$$[$o$$.id]) {
          console.info("Loading room:", $o$$.id, $o$$.bindings);
          for(var $b$$ = 0;$b$$ < $o$$.bindings.length;$b$$++) {
            $o$$.bindings[$b$$] = $userBindings$$.length <= $b$$ ? $userBindings$$[$b$$] : -1
          }
        }else {
          for($b$$ = 0;$b$$ < $o$$.bindings.length;$b$$++) {
            $o$$.bindings[$b$$] = -1
          }
        }
      }
    }
  };
  this.loadUserBindings = function $this$loadUserBindings$($userBindings$$) {
    if($userBindings$$) {
      var $byid$$ = [], $i$$;
      for($i$$ in this.roomTemplates) {
        var $current_group$$ = this.roomTemplates[$i$$], $t$$;
        for($t$$ in $current_group$$) {
          $byid$$[$current_group$$[$t$$].id] = $current_group$$[$t$$];
          for(var $bs_template$$ = $current_group$$[$t$$].bindings, $b$$ = 0;$b$$ < $bs_template$$.length;$b$$++) {
            $bs_template$$[$b$$] = -1
          }
        }
      }
      $current_group$$ = this.roomTemplates[this.activeCategory][this.activeIndex];
      for($i$$ in $userBindings$$) {
        if($t$$ = $userBindings$$[$i$$], ($bs_template$$ = $byid$$[$i$$]) && $t$$) {
          $bs_template$$.bindings = $t$$
        }
      }
      console.info("Load User bindings");
      this.room.setBindings($current_group$$.bindings)
    }
  };
  this.showRoomById = function $this$showRoomById$($id$$, $undoredoflag$$) {
    this.roomTemplatesById[$id$$] && this._showRoom(this.roomTemplatesById[$id$$], $undoredoflag$$)
  };
  this.showRoom = function $this$showRoom$($templateName$$, $index$$, $undoredoflag$$) {
    if(!($templateName$$ == this.activeCategory && $index$$ == this.activeIndex)) {
      var $template$$ = null;
      -1 != $.inArray($templateName$$, this.roomTemplateCategories) && ($template$$ = this.roomTemplates[$templateName$$][$index$$], this._showRoom($template$$, $undoredoflag$$))
    }
  };
  this._showRoom = function $this$_showRoom$($template$$, $undoredoflag$$) {
    if($template$$) {
      var $category$$ = $template$$.category, $index$$ = $.inArray($template$$, this.roomTemplates[$category$$]);
      console.info("Showing room");
      -1 != this.activeCategory && (oldTemplate = this.roomTemplates[this.activeCategory][this.activeIndex], oldTemplate.roomData = this.room.paletteBindings, undoRedoStack.register(this, this._showRoom, [oldTemplate], $undoredoflag$$));
      this.activeCategory = $category$$;
      this.activeIndex = $index$$;
      this.palette.setRoomMessageType("exterior" === $category$$.toLowerCase() ? "exterior" : "interior");
      this.isExterior = this.roomTemplates[$category$$][$index$$].isExterior ? !0 : !1;
      this.currentRoom = $template$$;
      this.room.loadRoom($template$$, $template$$.bindings);
      this.palette.loadPreviewRoom($template$$);
      userSession && userSession.setCurrentRoomId($template$$.id);
      colorCompare.loadRoom($template$$.compareShadow, $template$$.compareBase, $template$$.comparePaintable)
    }
  };
  this.showRoomPicker = function $this$showRoomPicker$() {
    hidePaintSliderByUser();
    _isPYPRoom ? roomPicker.showThumbs("My Custom Images", 0) : "start" == getParameterByName("pyp") ? (roomPicker.showThumbs("My Custom Images", 0), console.info("got it")) : roomPicker.showThumbs(this.activeCategory, this.palette.getColor(0));
    showModal(this.roomPicker)
  };
  this.pr = [];
  this.rt = [];
  this.isFlash = !0;
  this._showRoomCarosuel = function $this$_showRoomCarosuel$() {
    if(this.isFlash) {
      for(var $roomCarosuel$$ = this.display.find(".roomCarosuel"), $categories$$ = "Bedroom Bathroom Living Kitchen Dining Exterior Other".split(" "), $i$$ = 0;$i$$ < $categories$$.length;$i$$++) {
        var $t$$8_template$$ = this.roomTemplates[$categories$$[$i$$]][0], $previewRoom_room$$ = loadModuleDisplay("PaintRoom");
        $($roomCarosuel$$).append("<li id='room" + ($i$$ + 1) + "'></li>");
        $($previewRoom_room$$).appendTo($("li#room" + ($i$$ + 1)));
        $previewRoom_room$$ = new PaintRoom($previewRoom_room$$, !0, 190, 136);
        $previewRoom_room$$.palette = new Palette;
        this.pr[$i$$] = $previewRoom_room$$;
        $t$$8_template$$ = new RoomTemplate("-1", "", $t$$8_template$$.compareShadow, $t$$8_template$$.compareBase, [$t$$8_template$$.comparePaintable], [$t$$8_template$$.comparePaintable], [0, 0], [0], null, !1, null, null, null, null, null, null);
        this.rt[$i$$] = $t$$8_template$$
      }
      $(".roomCarosuel > li:first").show()
    }
    this.isFlash = !1
  };
  this.paintFlashRooms = function $this$paintFlashRooms$($pr$$, $rt$$, $c$$) {
    if(!(null === $pr$$ || null === $rt$$ || 0 === $pr$$.length || 0 === $rt$$.length)) {
      if(null === $c$$ || "undefined" === typeof $c$$) {
        $c$$ = nullColor
      }
      $pr$$[0].onready = function $$pr$$$0$onready$() {
        $pr$$[0].paintSectionByIndex($c$$, 0)
      };
      $pr$$[0].loadRoom($rt$$[0], null);
      $pr$$[1].onready = function $$pr$$$1$onready$() {
        $pr$$[1].paintSectionByIndex($c$$, 0)
      };
      $pr$$[1].loadRoom($rt$$[1], null);
      $pr$$[2].onready = function $$pr$$$2$onready$() {
        $pr$$[2].paintSectionByIndex($c$$, 0)
      };
      $pr$$[2].loadRoom($rt$$[2], null);
      $pr$$[3].onready = function $$pr$$$3$onready$() {
        $pr$$[3].paintSectionByIndex($c$$, 0)
      };
      $pr$$[3].loadRoom($rt$$[3], null);
      $pr$$[4].onready = function $$pr$$$4$onready$() {
        $pr$$[4].paintSectionByIndex($c$$, 0)
      };
      $pr$$[4].loadRoom($rt$$[4], null);
      $pr$$[5].onready = function $$pr$$$5$onready$() {
        $pr$$[5].paintSectionByIndex($c$$, 0)
      };
      $pr$$[5].loadRoom($rt$$[5], null);
      $pr$$[6].onready = function $$pr$$$6$onready$() {
        $pr$$[6].paintSectionByIndex($c$$, 0)
      };
      $pr$$[6].loadRoom($rt$$[6], null)
    }
  };
  this.flash = null;
  this.startFlash = !0;
  this.loadRoomSlider = function $this$loadRoomSlider$() {
    if(this.startFlash) {
      var $current$$ = 0;
      this.flash = setInterval(function() {
        $(".roomCarosuel > li:eq(" + $current$$ + ")").fadeOut(1500);
        $current$$ == $(".roomCarosuel > li:last").index() && ($current$$ = -1);
        $current$$ += 1;
        $(".roomCarosuel > li:eq(" + $current$$ + ")").fadeIn(1500)
      }, 4500)
    }
    this.startFlash = !1
  };
  this.stopRoomSlider = function $this$stopRoomSlider$() {
    clearInterval(this.flash);
    this.display.find(".roomCarosuel").hide();
    this.display.find(".smallPreview").show()
  };
  this.showPalette = function $this$showPalette$() {
    this.display.find(".paletteArea .initial").hide();
    this.display.find(".paletteArea .post").show();
    var $co$$ = this.display.find(".colorOptions");
    $co$$.find(".list").show();
    $co$$.find(".initialText").hide();
    this.showCoordinatedText();
    this.changeBtnVisualize();
    this.display.find(".dividerShadow").show()
  };
  this.changeBtnVisualize = function $this$changeBtnVisualize$() {
    var $btnVisualize$$ = this.display.find(".btnVisualize"), $btnBuyNow$$ = this.display.find(".btnBuyNow"), $featured$$ = this.display.find(".featured");
    $($featured$$).is(":visible") || ($btnVisualize$$.removeClass("_paintMode"), $btnVisualize$$.addClass("_colorMode"), $btnBuyNow$$.addClass("_featuredMode"))
  };
  this.showCoordinatedText = function $this$showCoordinatedText$() {
    var $m$$ = this.display.find(".message");
    $m$$.find("div").hide();
    3 > this.palette.numColors() || this.palette.isQuad ? null != this.palette.previewQuad || this.palette.isQuad ? $m$$.find(".morePaletteText").show() : $m$$.find(".paletteText").show() : $m$$.find(".colorsText").show()
  };
  this.attachColorPicker = function $this$attachColorPicker$($colorPicker$$) {
    this.colorPicker = $colorPicker$$
  };
  this.attachModifyColor = function $this$attachModifyColor$($modifyColor$$) {
    var $obj$$ = this;
    this.modifyColor = $modifyColor$$;
    this.modifyColor.bind("onColorConfirm", function($e$$) {
      console.info("test");
      $obj$$.palette.setColor($e$$.color, $obj$$.palette.selectedTab)
    })
  };
  this.attachRoomPicker = function $this$attachRoomPicker$($picker$$) {
    this.roomPicker = $picker$$;
    this.roomPicker.bind(RoomPicker.OnRoomSelect, function showRoom($e$$) {
      $obj$$.showRoom($e$$.templateName, $e$$.index);
      hideModal($obj$$.roomPicker)
    });
    var $obj$$ = this
  };
  this.applyQuadPaletteColors = function $this$applyQuadPaletteColors$($bindings$$, $colors$$) {
    this.room.suspendPainting = !0;
    this._applyBindingsAndColors($bindings$$, $colors$$, !0);
    this.room.suspendPainting = !1;
    this.room.paint()
  };
  this.displaySimilarColors = function $this$displaySimilarColors$() {
    $display$$.find(".colorOptions .list .items").animate({top:-72}, 200, "linear")
  };
  this.prepareViewReturnFromBuyNow = function $this$prepareViewReturnFromBuyNow$() {
    if(this.palette.isQuad && this.mode === Visualizer.MODE_COLORS) {
      var $n$$ = [this.palette.getColor(0), this.palette.getColor(1), this.palette.getColor(2), this.palette.getColor(3)];
      this.palette.setPreviewQuad($n$$)
    }
  };
  this.hideQuadPalettes = function $this$hideQuadPalettes$() {
    var $co$$ = $display$$.find(".colorOptions");
    $co$$.find(".initialText").show();
    $co$$.find(".paletteText").hide();
    $display$$.find(".col.palettes").hide()
  };
  this.displayQuadPalettes = function $this$displayQuadPalettes$() {
    $display$$.find(".col.palettes").show();
    var $s$$ = $display$$.find(".colorOptions .list .items");
    $s$$.show();
    $s$$.animate({top:0}, 200, "linear")
  };
  this.initOverlayControls = function $this$initOverlayControls$() {
    var $obj$$ = this, $overlay$$ = this.display;
    this.thumbsOverlay = $overlay$$.find(".thumbs");
    $overlay$$.find(".unpaint").on("click", function($e$$) {
      -1 == $obj$$.room.selectedArea && $obj$$.room.isPainted() ? $obj$$.room.clearPaletteBindings() : $obj$$.room.isAreaPainted($obj$$.room.selectedArea) && $obj$$.room.clearSelectedPaletteBinding()
    });
    $overlay$$.find(".undo").on("click", function($e$$) {
      undoRedoStack.undo()
    });
    $overlay$$.find(".redo").on("click", function($e$$) {
      undoRedoStack.redo()
    });
    $overlay$$.find(".pick").on("click", function($e$$) {
      $obj$$.showRoomPicker()
    })
  };
  this.initPaintRoom = function $this$initPaintRoom$() {
    var $obj$$ = this, $unpaintButton$$ = this.display.find(".canvasOverlay .unpaint"), $room$$ = loadModuleDisplay("PaintRoom");
    this.display.find(".canvas").append($room$$);
    this.room = new PaintRoom($room$$);
    this.room.showLoader = !0;
    this.room.bind(PaintRoom.ON_AREA_CLICK, function($e$$) {
      $obj$$.palette.hasSelectedTab() ? ($obj$$.room.paintSectionByIndex($obj$$.palette.getSelectedColor(), $e$$.area), $obj$$.room.updateBinding($e$$.area, $obj$$.palette.selectedTab), helpManager.removeHelp(".tsh_firstPaint")) : $obj$$.room.toggleSelectedArea($e$$.area)
    });
    this.room.bind(PaintRoom.ON_PAINT, function($e$$) {
      $obj$$.room.isPainted() ? $unpaintButton$$.removeClass("inactive") : $unpaintButton$$.addClass("inactive");
      window.navigator && 0 < window.navigator.userAgent.indexOf("534.30") && ($obj$$.room.display.css("opacity", "0.99"), setTimeout(function() {
        $obj$$.room.display.css("opacity", "1")
      }, 5))
    });
    this.room.bind(PaintRoom.ON_BINDINGS_UPDATED, function($e$$) {
      userSession.setBindings($obj$$.roomTemplates[$obj$$.activeCategory][$obj$$.activeIndex].id, $e$$.bindings)
    });
    this.room.bind(PaintRoom.ON_ITEM_DROP, function($e$$) {
      helpManager.removeHelp(".tsh_firstPaint")
    });
    this.room.bind(PaintRoom.ON_EXTERNAL_ITEM_DROP, function($e$$) {
      var $i$$96_index$$;
      if(-1 === ($i$$96_index$$ = $obj$$.palette.indexOf($e$$.item))) {
        helpManager.removeHelp(".tsh_firstPaint");
        var $b$$30_colors$$, $bindings$$;
        if(8 > $obj$$.palette.numColors()) {
          $b$$30_colors$$ = $obj$$.room.paletteBindings;
          $bindings$$ = [];
          for($i$$96_index$$ = 0;$i$$96_index$$ < $b$$30_colors$$.length;$i$$96_index$$++) {
            $bindings$$[$i$$96_index$$] = $b$$30_colors$$[$i$$96_index$$] == $e$$.index ? -1 : $b$$30_colors$$[$i$$96_index$$] >= $e$$.index ? $b$$30_colors$$[$i$$96_index$$] - 1 : $b$$30_colors$$[$i$$96_index$$]
          }
          $b$$30_colors$$ = [];
          for($i$$96_index$$ = 0;$i$$96_index$$ < $obj$$.palette.numColors();$i$$96_index$$++) {
            var $color$$ = $obj$$.palette.getColor($i$$96_index$$);
            $color$$ !== $e$$.color && $b$$30_colors$$.push($color$$)
          }
        }
        $i$$96_index$$ = $obj$$.palette.addColor($e$$.item, UndoRedoStack.IGNORE);
        if(void 0 != $i$$96_index$$) {
          var $helper$$ = $($e$$.ui.helper).clone();
          $("#colorsmart").append($helper$$);
          var $co$$ = colorsmart.offset(), $color$$ = $(".Visualizer .RowPalette .colorTab")[$i$$96_index$$], $o$$ = $($color$$).offset(), $color$$ = $helper$$.offset();
          $helper$$.offset({top:$color$$.top - $co$$.top, left:$color$$.left - $co$$.left});
          setTimeout(function() {
            $helper$$.animate({left:$o$$.left - $co$$.left, top:$o$$.top - $co$$.top, opacity:0.25}, {duration:450, easting:"easeInQuad", complete:function() {
              console.info("completed", $helper$$);
              $helper$$.remove()
            }})
          }, 50);
          $obj$$.room.updateBinding($e$$.surfaceIndex, $i$$96_index$$, UndoRedoStack.IGNORE);
          undoRedoStack.register($obj$$, $obj$$._applyBindingsAndColors, [$bindings$$, $b$$30_colors$$, $obj$$.palette.isQuad])
        }
      }else {
        $obj$$.room.updateBinding($e$$.surfaceIndex, $i$$96_index$$), helpManager.removeHelp(".tsh_firstPaint")
      }
    });
    $(document).on("mousemove", function($e$$) {
      if($obj$$.mode === Visualizer.MODE_PAINT && !currentModal && dragOp.dragging && (dragOp.data.type === DragType.UserPalette || dragOp.data.type === DragType.ColorSearch)) {
        var $o$$ = $room$$.offset();
        $e$$.pageX > $o$$.left && ($e$$.pageY > $o$$.top && $e$$.pageX < $o$$.left + $room$$.outerWidth() && $e$$.pageY < $o$$.top + $room$$.outerHeight()) && $obj$$.room.selectArea($e$$.pageX - $o$$.left, $e$$.pageY - $o$$.top)
      }
    })
  };
  this._applyBindingsAndColors = function $this$_applyBindingsAndColors$($bindings$$, $colors$$, $isQuad$$, $undoredoflag$$) {
    for(var $currentBindings$$ = [], $currentColors$$ = [], $i$$ = 0;$i$$ < this.room.paletteBindings.length;$i$$++) {
      $currentBindings$$[$i$$] = this.room.paletteBindings[$i$$]
    }
    for($i$$ = 0;$i$$ < this.palette.paletteSize();$i$$++) {
      $currentColors$$[$i$$] = this.palette.getColor($i$$)
    }
    undoRedoStack.register(this, this._applyBindingsAndColors, [$currentBindings$$, $currentColors$$, this.palette.isQuad], $undoredoflag$$);
    this.room.setBindings($bindings$$, UndoRedoStack.IGNORE);
    $isQuad$$ ? this.palette.setQuad($colors$$, UndoRedoStack.IGNORE) : this.palette.setColors($colors$$, UndoRedoStack.IGNORE)
  };
  this.initPalette = function $this$initPalette$() {
    var $palette$$ = loadModuleDisplay("RowPalette");
    this.display.find(".palette").append($palette$$);
    this.palette = new RowPalette($palette$$)
  };
  this.initQuadPalette = function $this$initQuadPalette$() {
    var $obj$$ = this, $quadPalette$$ = loadModuleDisplay("QuadPalette");
    this.display.find(".paletteCombos").append($quadPalette$$);
    this.quadPalette = new QuadPalette($quadPalette$$);
    this.quadPalette.bind("onSwatchClick", function($dest$$1_e$$148_ho$$1_ui$$) {
      var $colors$$ = $dest$$1_e$$148_ho$$1_ui$$.colors;
      if($obj$$.mode === Visualizer.MODE_COLORS) {
        $obj$$.palette.setPreviewQuad($dest$$1_e$$148_ho$$1_ui$$.colors)
      }else {
        $obj$$.quadPalette.isUpdating = !0;
        var $oi$$ = [null, null, null], $ni$$ = [0, 1, 2];
        quadPaletteColorsChanged = 3;
        for(var $i$$ = 0;3 > $i$$;$i$$++) {
          if($oi$$[$i$$] = $obj$$.palette.indexOf($colors$$[$i$$]), -1 == $oi$$[$i$$] || $oi$$[$i$$] == $i$$) {
            $oi$$[$i$$] = null, $ni$$[$i$$] = null, $oi$$[$i$$] == $i$$ && quadPaletteColorsChanged--
          }
        }
        $colors$$[4] = $colors$$[5] = $colors$$[6] = $colors$$[7] = null;
        for(var $newBindings$$ = [], $i$$ = 0;$i$$ < $obj$$.room.paletteBindings.length;$i$$++) {
          for(var $set$$ = !1, $a$$ = 0;3 > $a$$;$a$$++) {
            var $oldArea$$ = $oi$$[$a$$], $newArea$$ = $ni$$[$a$$];
            $obj$$.room.paletteBindings[$i$$] == $oldArea$$ && ($newBindings$$[$i$$] = $newArea$$, $set$$ = !0);
            $newBindings$$[$i$$] = $oldArea$$
          }
          $set$$ || ($newBindings$$[$i$$] = $obj$$.room.paletteBindings[$i$$])
        }
        $obj$$.applyQuadPaletteColors($newBindings$$, $colors$$);
        $obj$$.quadPalette.isUpdating = !1;
        $dest$$1_e$$148_ho$$1_ui$$ = $($dest$$1_e$$148_ho$$1_ui$$.ui);
        var $helper$$ = $dest$$1_e$$148_ho$$1_ui$$.clone(), $o$$ = $dest$$1_e$$148_ho$$1_ui$$.offset();
        $helper$$.css("position", "absolute");
        $helper$$.css("left", $o$$.left);
        $helper$$.css("top", $o$$.top);
        $("#colorsmart").append($helper$$);
        $dest$$1_e$$148_ho$$1_ui$$ = $(".Visualizer .RowPalette .tabs .color1");
        var $o$$ = $($dest$$1_e$$148_ho$$1_ui$$).offset(), $co$$ = colorsmart.offset();
        $dest$$1_e$$148_ho$$1_ui$$ = $helper$$.offset();
        $helper$$.offset({top:$dest$$1_e$$148_ho$$1_ui$$.top - $co$$.top, left:$dest$$1_e$$148_ho$$1_ui$$.left - $co$$.left});
        setTimeout(function() {
          $helper$$.animate({left:$o$$.left + 50 - $co$$.left, top:$o$$.top + 60 - $co$$.top, opacity:0.25}, {duration:450, easting:"easeInQuad", complete:function() {
            $helper$$.remove()
          }})
        }, 50)
      }
    })
  };
  this.initColors = function $this$initColors$($params$$) {
    this.colorBrowser = new ColorBrowser($params$$);
    this.display.find(".colorMode").append(this.colorBrowser.display);
    var $obj$$ = this;
    this.colorBrowser.bind(ColorBrowser.ON_COLOR_CLICK, function($e$$) {
      if(0 === $obj$$.palette.numColors()) {
        null == $obj$$.palette.previewColor && null == $obj$$.palette.previewQuad && $obj$$.showPalette();
        if($e$$.roomType && "string" === typeof $e$$.roomType && !userSession._roomSelected) {
          switch($e$$.roomType.toLowerCase()) {
            case "marquee":
            ;
            case "exterior":
              $obj$$.showRoom("Exterior", 0);
              break;
            case "bedroom":
            ;
            case "kids room":
              $obj$$.showRoom("Bedroom", 0);
              break;
            case "bathroom":
              $obj$$.showRoom("Bathroom", 0);
              break;
            case "dining":
              $obj$$.showRoom("Dining", 0);
              break;
            case "living room":
              $obj$$.showRoom("Living", 0);
              break;
            case "kitchen":
              $obj$$.showRoom("Kitchen", 0);
              break;
            case "office":
              $obj$$.showRoom("Other", 0)
          }
        }else {
          !0 === $e$$.color.marquee && $obj$$.showRoom("Exterior", 0)
        }
        $obj$$.palette.setPreviewColor($e$$.color);
        $obj$$.paintFlashRooms($obj$$.pr, $obj$$.rt, $e$$.color);
        setTimeout(function() {
          visualizer.loadRoomSlider()
        }, 500)
      }else {
        $obj$$.palette.hasColor($e$$.color) ? -1 < SITE.search("consumer_ca") ? visualizer.showGenericMessage("Please Note:", "The colour you have selected (" + $e$$.color.name + ") is already in your colour list.", "", null) : visualizer.showGenericMessage("Please Note:", "The color you have selected (" + $e$$.color.name + ") is already in your color list.", "", null) : ($obj$$.palette.addColorSwitch ? $obj$$.palette.addColor($e$$.color) : $obj$$.palette.replaceColor($e$$.color), $obj$$.fastSwitch && 
        ($obj$$.fastSwitch = !1))
      }
    })
  };
  this.updateSimilarColors = function $this$updateSimilarColors$() {
    var $cs$$ = [], $selectedColor$$ = this.palette.getSelectedColor();
    $cs$$.push($selectedColor$$);
    for(var $colors$$ = this.palette.paletteData.colors, $i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      var $c$$ = $colors$$[$i$$];
      $c$$ && $c$$ != $selectedColor$$ && $cs$$.push($c$$)
    }
    this.singlePalette.refreshColorSet($cs$$)
  };
  this.init = function $this$init$($params$$) {
    if(-1 < SITE.search("architect")) {
      $(".no-architect").each(function() {
        $(this).remove()
      }), $(".consumerca-only").each(function() {
        $(this).remove()
      }), $("#lpChatButton").remove(), Visualizer.BUY_NOW = "BUY NOW", Visualizer.PREVIEW_PAINT_COLORS = "PREVIEW PAINT COLORS", $(".toUpperCase").each(function() {
        var $upper$$ = $(this).text().toUpperCase();
        $(this).text($upper$$);
        ("NEXT" == $(this).text() || "ADD TO CART" == $(this).text()) && $(this).css("color", "#000");
        "BUY NOW" == $(this).text() && $(this).css("font-size", "#000")
      }), $(".orange_button.upload_button").each(function() {
        $(this).css("background-color", "#fada00")
      }), $("#one_coat_text").css("font-size", "8px"), $("#btnOneCoatLearnMore").css("font-size:10px", "vertical-align:baseline"), $(".pyp.pyp_position .position_photo_canvas .position_photo_buttons a.orange_button").css("color", "#000")
    }else {
      $(".no-consumer").each(function() {
        $(this).remove()
      });
      $(".orange_button-edit_project").each(function() {
        $(this).addClass("orange_button-gray")
      });
      var $colourBefore$$, $colourAfter$$;
      -1 < SITE.search("consumer_ca/color") ? ($(".no-consumerca").each(function() {
        $(this).remove()
      }), $("p").each(function() {
        if(($colourBefore$$ = $(this).html()) && -1 < $colourBefore$$.search(/color/i)) {
          ($colourAfter$$ = localizeColor($colourBefore$$)) && $(this).html($colourAfter$$)
        }
      }), $("span").each(function() {
        if(($colourBefore$$ = $(this).text()) && -1 < $colourBefore$$.search(/color/i)) {
          ($colourAfter$$ = localizeColor($colourBefore$$)) && $(this).text($colourAfter$$)
        }
      }), $("input").each(function() {
        if(($colourBefore$$ = $(this).val()) && -1 < $colourBefore$$.search(/color/i)) {
          ($colourAfter$$ = localizeColor($colourBefore$$)) && $(this).val($colourAfter$$)
        }
      }), $(":header").each(function() {
        if(($colourBefore$$ = $(this).html()) && -1 < $colourBefore$$.search(/color/i)) {
          ($colourAfter$$ = localizeColor($colourBefore$$)) && $(this).html($colourAfter$$)
        }
      }), $("div.emptyMessage").each(function() {
        if(($colourBefore$$ = $(this).html()) && -1 < $colourBefore$$.search(/color/i)) {
          ($colourAfter$$ = localizeColor($colourBefore$$)) && $(this).html($colourAfter$$)
        }
      }), $("div.my_behr_signup_text li").each(function() {
        if(($colourBefore$$ = $(this).html()) && -1 < $colourBefore$$.search(/color/i)) {
          ($colourAfter$$ = localizeColor($colourBefore$$)) && $(this).html($colourAfter$$)
        }
      }), $(".buy.btnRed").each(function() {
        $(this).remove()
      }), $(".Visualizer .paletteArea .initial.initialMain").css("background-image", "url(/cma/Behr_Assets/Consumer/Paint_Color/images/vis/initial_ca.jpg)"), $(".imgBrochureGry .imgBrochure").attr("src", "/cma/Behr_Assets/Consumer/Paint_Color/images/vis/grays_ca.png"), $(".pyp_intro_billboard").css("background-image", "url(/cma/Behr_Assets/Consumer/Paint_Color/images/pyp/pyp_intro_billboard_ca.jpg)")) : $(".consumerca-only").each(function() {
        $(this).remove()
      })
    }
    googleAnalyticsTagEvents("Medium Value-StartCS", "ColorSmart Started", "");
    var $obj$$ = this, $btnBuyNow$$ = $obj$$.display.find(".btnBuyNow");
    $(window).on("hashchange", function($e$$) {
      switch(window.location.hash) {
        case "#paint":
          $obj$$.setMode(Visualizer.MODE_PAINT);
          $btnBuyNow$$.addClass("_prevMode");
          $obj$$.stopRoomSlider();
          break;
        default:
          $obj$$.setMode(Visualizer.MODE_COLORS), $btnBuyNow$$.removeClass("_prevMode")
      }
    });
    this.display.find(".tsh_compare").removeClass("help");
    this.display.find(".btnVisualize").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      var $isQuad$$ = $obj$$.palette.display.find(".featured").hasClass("isQuad");
      0 === $obj$$.palette.numColors() && !$isQuad$$ ? visualizer.showGenericMessage("Please Note:", visualizer.noColorWarning, "", null) : window.location.hash = "paint"
    });
    this.display.find(".btnExplore").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      window.location.hash = "colors";
      0 === $obj$$.palette.numColors() && !$obj$$.palette.isQuad && $obj$$.palette.resetToInitPaletteArea(!0)
    });
    var $saveUsed$$;
    this.btnSave = this.display.find(".btnSave");
    this.btnSaveAs = this.display.find(".btnSaveAs");
    if(userSession) {
      userSession.bind(UserSession.ON_SAVE_COMPLETE, function($e$$) {
        $saveCompleteDisplay$$()
      });
      userSession.bind(UserSession.ON_UPDATE_COMPLETE, function($e$$) {
        $saveCompleteDisplay$$()
      });
      userSession.bind(UserSession.ON_SAVE_BEGIN, function($e$$) {
        $saveBeginDisplay$$()
      });
      userSession.bind(UserSession.ON_UPDATE_BEGIN, function($e$$) {
        $saveBeginDisplay$$()
      });
      var $saveCompleteDisplay$$ = function $$saveCompleteDisplay$$$() {
        "save" === $saveUsed$$ ? $obj$$.btnSave.text("Saved!") : $obj$$.btnSaveAs.text("Saved!");
        setTimeout($clearDisplay$$, 5E3, $saveUsed$$)
      }, $saveBeginDisplay$$ = function $$saveBeginDisplay$$$() {
        "save" === $saveUsed$$ ? $obj$$.btnSave.text("Saving...") : $obj$$.btnSaveAs.text("Saving...")
      }, $clearDisplay$$ = function $$clearDisplay$$$($d$$) {
        "save" === $d$$ ? $obj$$.btnSave.text("Save") : $obj$$.btnSaveAs.text("Save As")
      }
    }
    this.btnPrint = this.display.find(".btnPrint");
    this.btnPrint.on("click", function() {
      hidePaintSliderByUser();
      printProjectMain("session")
    });
    this.btnSave.on("click", function() {
      hidePaintSliderByUser();
      $saveUsed$$ = "save";
      trySaveProject()
    });
    this.btnSaveAs.on("click", function() {
      hidePaintSliderByUser();
      $saveUsed$$ = "saveAs";
      loginIntercept(saveProject)
    });
    this.display.find(".myProjects").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      showMyProjects()
    });
    this.display.find(".newProject").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      showStartOver()
    });
    var $replaceColor$$ = addModuleToModal("ReplaceColor");
    this.display.find(".note").on("click", function() {
      showModal(renameProject)
    });
    userSession && (userSession.bind(UserSession.ON_PROJECT_NAME_UPDATED, function($e$$) {
      $obj$$.display.find(".projectName").text($e$$.name)
    }), this.display.find(".projectName").text(userSession.projectName));
    var $mod$$ = loadModuleDisplay("RoomVisualizer");
    $obj$$.display.find(".container").html($mod$$);
    this.initOverlayControls();
    this.initPaintRoom();
    this.initPalette();
    this.initQuadPalette();
    this.initColors($params$$);
    $params$$ = loadModuleDisplay("SinglePalette");
    this.display.find(".similarColors").append($params$$);
    this.singlePalette = new SinglePalette($params$$);
    this.singlePalette.bind("onSwatchClick", function($c$$29_e$$) {
      $c$$29_e$$ = $c$$29_e$$.color;
      $obj$$.palette.hasColor($c$$29_e$$) || (8 > $obj$$.palette.numColors() ? ($obj$$.palette.addColorSwitch ? $obj$$.palette.addColor($c$$29_e$$) : $obj$$.palette.replaceColor($c$$29_e$$), $obj$$.palette.isQuad ? $obj$$.quadPalette.generateColors([$obj$$.palette.paletteData.colors[0]]) : $obj$$.quadPalette.generateColors($obj$$.palette.paletteData.colors)) : 8 == $obj$$.palette.numColors() && showModal($replaceColor$$))
    });
    this.palette.bind("onPaletteFull", function($e$$) {
      showModal($replaceColor$$)
    });
    this.palette.bind("onSelectChange", function($e$$) {
      $obj$$.updateSimilarColors()
    });
    this.palette.bind("onRemove", function($e$$) {
      for(var $b$$31_colors$$ = $obj$$.room.paletteBindings, $bindings$$ = [], $i$$ = 0;$i$$ < $b$$31_colors$$.length;$i$$++) {
        $bindings$$[$i$$] = $b$$31_colors$$[$i$$] == $e$$.index ? -1 : $b$$31_colors$$[$i$$] >= $e$$.index ? $b$$31_colors$$[$i$$] - 1 : $b$$31_colors$$[$i$$]
      }
      $b$$31_colors$$ = [];
      for($i$$ = 0;$i$$ < $obj$$.palette.numColors();$i$$++) {
        var $color$$ = $obj$$.palette.getColor($i$$);
        $color$$ !== $e$$.color && $b$$31_colors$$.push($color$$)
      }
      $obj$$._applyBindingsAndColors($bindings$$, $b$$31_colors$$, !1)
    });
    this.palette.bind("onColorsUpdated", function($e$$) {
      $obj$$.onColorsUpdatedHandler()
    });
    this.onColorsUpdatedHandler = function $this$onColorsUpdatedHandler$() {
      var $nc$$ = this.palette.numColors(), $isQuad$$ = $obj$$.display.find(".featured").hasClass("isQuad") || this.palette.isQuad;
      0 === $nc$$ && !$isQuad$$ ? this.hideQuadPalettes() : 3 > $nc$$ || $isQuad$$ ? (this.palette.isQuad || this.quadPalette.generateColors(this.palette.paletteData.colors), this.displayQuadPalettes()) : (this.updateSimilarColors(), this.displaySimilarColors());
      0 !== $nc$$ && (this.showPalette(), this.showCoordinatedText(), this.palette.setSelectedTab(), this.btnBuy.text(Visualizer.BUY_NOW))
    };
    this.palette.bind("onPreviewUpdated", function($e$$) {
      $obj$$.onPreviewUpdatedHandler($e$$.color)
    });
    this.palette.bind("onTabClick", function($e$$) {
      null == $e$$.color && ($obj$$.fastSwitch = !0, window.location.hash = "colors")
    });
    this.palette.bind("onDetails", function($e$$) {
      var $link$$ = "";
      if($e$$.colors) {
        for(var $i$$ = 0;$i$$ < $e$$.colors.length;$i$$++) {
          "" != $link$$ && ($link$$ += ","), $link$$ += $e$$.colors[$i$$].id
        }
        $link$$ = "PaletteDetailView/" + $link$$
      }else {
        $link$$ = "ColorDetailView/" + $e$$.color.id
      }
      window.location.href = CONTEXT_ROOT + $link$$
    });
    this.palette.bind("onSave", function($e$$) {
      userSession.isLoggedIn() || (document.cookie = "mybehr_colorid=" + ($e$$.color ? $e$$.color.id : $e$$.colors[0].id) + "; path=/");
      loginIntercept(function() {
        if(userSession) {
          if($e$$.colors) {
            for(var $i$$ = 0;$i$$ < $e$$.colors.length;$i$$++) {
              $e$$.colors[$i$$] && userSession.addFavoriteColor($e$$.colors[$i$$])
            }
          }else {
            $e$$.color && userSession.addFavoriteColor($e$$.color)
          }
        }
      })
    });
    this.naColors = 0;
    this.btnBuy = this.display.find(".buy");
    this.btnBuy.on("click", function($buttonText_e$$165_isQuad$$) {
      $buttonText_e$$165_isQuad$$ = $obj$$.palette.display.find(".featured").hasClass("isQuad");
      0 === $obj$$.palette.numColors() && !$buttonText_e$$165_isQuad$$ ? visualizer.showGenericMessage("Please Note:", "Please select at least one color to configure and buy paint.", "", null) : ($buttonText_e$$165_isQuad$$ = $($obj$$.btnBuy[0]).text(), $buttonText_e$$165_isQuad$$ === Visualizer.BUY_NOW ? (googleAnalyticsTagEvents("High Value-BuyNow", "Paint Configuration", ""), $obj$$.buyPaints()) : "View Cart" === $buttonText_e$$165_isQuad$$ && (window.location.href = EXTERNAL_LINK_ROOT + "shopping-cart"))
    });
    this.buyPaints = function $this$buyPaints$() {
      $("#white_curtain").hide();
      var $selColorsArr$$ = [], $userSelColors$$ = 0, $unavlColors$$ = 0, $notAvlList$$ = "<br/><b>The following color(s) are not available for purchase.</b><br/><br/>";
      1 > userSession.palette.numColors() && !$obj$$.palette.previewQuad && ($obj$$.palette.previewColor instanceof ColorDef && 0 == $obj$$.palette.numColors()) && $obj$$.palette.setColor($obj$$.palette.previewColor);
      $obj$$.palette.paletteData && ($selColorsArr$$ = $obj$$.palette.paletteData.colors[0] ? $obj$$.palette.paletteData.colors : $obj$$.palette.previewQuad);
      for(var $i$$103_j$$ = 0;$i$$103_j$$ < $selColorsArr$$.length;$i$$103_j$$++) {
        $selColorsArr$$[$i$$103_j$$] instanceof ColorDef && ($userSelColors$$ += 1)
      }
      for(var $omsDataArr$$ = [], $i$$103_j$$ = 0;$i$$103_j$$ < $userSelColors$$;$i$$103_j$$++) {
        var $avlAttrbInfoArr$$ = $obj$$.getOmsData($selColorsArr$$[$i$$103_j$$].id);
        $omsDataArr$$[$selColorsArr$$[$i$$103_j$$].id] = $avlAttrbInfoArr$$;
        0 == $avlAttrbInfoArr$$.length && ($notAvlList$$ += '<div style="padding:3px;">' + ('<div style="float:left; width:20px; height:20px; border-radius:5px; background-color:rgb(' + $selColorsArr$$[$i$$103_j$$].rgbshadow + ');"></div>') + ('<div style="width:300px; height:20px; line-height:20px;">&nbsp;&nbsp;' + $selColorsArr$$[$i$$103_j$$].id + "&nbsp;-&nbsp;" + $selColorsArr$$[$i$$103_j$$].name + "</div>") + "</div>", $unavlColors$$ += 1)
      }
      $obj$$.naColors = $unavlColors$$;
      0 < $unavlColors$$ ? $unavlColors$$ == $userSelColors$$ ? $obj$$.showGenericMessage("Color Not Available.", $notAvlList$$, "", null) : $obj$$.showGenericMessage("Color Not Available.", $notAvlList$$, function() {
        return $obj$$.loadBuyNow($omsDataArr$$)
      }, null) : $obj$$.loadBuyNow($omsDataArr$$)
    };
    this.loadBuyNow = function $this$loadBuyNow$($omsDataArr$$) {
      $obj$$.mode == Visualizer.MODE_COLORS && $obj$$.palette.previewQuad && $obj$$.applyQuadPaletteColors($obj$$.room.paletteBindings, $obj$$.palette.previewQuad);
      buyNow.showBuyNow();
      buyNow.setPalette($obj$$.palette, $obj$$.room.paletteBindings, $omsDataArr$$, this.isRoom)
    };
    this.showGenericMessage = function $this$showGenericMessage$($titleMessage$$, $contentMessage$$, $okCallBack$$, $cancelCallBack$$) {
      genericMessage.setIntialContent($titleMessage$$, $contentMessage$$, $okCallBack$$, $cancelCallBack$$);
      showModal(genericMessage)
    };
    this.getOmsData = function $this$getOmsData$($colorCode$$1_url$$) {
      $colorCode$$1_url$$ = "http://" + getUserServiceURL() + "/omsproductservice/services/getOmsByColorId?colorId=" + $colorCode$$1_url$$;
      var $productInfoJson$$, $avlAttrbInfoArr$$ = [];
      $.ajax({type:"get", url:$colorCode$$1_url$$, dataType:"json", contentType:"application/json; charset=utf-8", async:!1, crossDomain:!0, success:function($response$$) {
        $productInfoJson$$ = JSON.stringify($response$$)
      }, error:function($xhr$$) {
        $productInfoJson$$ = "[]"
      }});
      3 < $productInfoJson$$.length && ($avlAttrbInfoArr$$ = $.parseJSON($productInfoJson$$));
      return $avlAttrbInfoArr$$
    };
    userSession.bind(UserSession.ON_CART_ADD_SUCCESS, function($e$$166_n$$) {
      $obj$$.btnBuy.text("View Cart");
      $e$$166_n$$ = $obj$$.palette.paletteData.colors;
      for(var $s$$ = "", $i$$ = 0;$i$$ < $e$$166_n$$.length;$i$$++) {
        "" != $s$$ && ($s$$ += ","), null != $e$$166_n$$[$i$$] && ($s$$ += $e$$166_n$$[$i$$].id)
      }
      setCookie("vcpstatus", $s$$)
    });
    userSession.bind(UserSession.ON_CART_ADD_FAIL, function($e$$) {
      $obj$$.btnBuy.text(Visualizer.BUY_NOW)
    });
    this.compareColors = function $this$compareColors$($e$$) {
      1 < userSession.palette.numColors() ? (showModal(colorCompare), colorCompare.setPalette($obj$$.palette.paletteData.colors)) : null != $obj$$.palette.previewQuad && (showModal(colorCompare), colorCompare.setPalette($obj$$.palette.previewQuad))
    };
    this.display.find(".btnAddColor").on("click", function($e$$) {
      showColorPickerForSlot(0)
    });
    this.display.find(".suggestedPalettesTab").on("click", function() {
      $obj$$.displayQuadPalettes()
    });
    this.display.find(".suggestedColorsTab").on("click", function() {
      $obj$$.displaySimilarColors()
    });
    $("body").on("mousedown touchstart", function($e$$) {
      if(-1 < $obj$$.room.selectedArea) {
        $e$$ = $($e$$.target).parents();
        for(var $i$$ = 0;$i$$ < $e$$.length;$i$$++) {
          var $p$$ = $e$$[$i$$];
          if($p$$ === $obj$$.room.display[0] || $p$$ === $obj$$.palette.display[0]) {
            return
          }
        }
        $obj$$.room.clearSelectedArea()
      }
    });
    $(".facebookShare").click(function() {
      hidePaintSliderByUser();
      shareMyBehrProject("facebook")
    });
    $(".twitterShare").click(function() {
      hidePaintSliderByUser();
      shareMyBehrProject("twitter")
    });
    $(".pinterestShare").click(function() {
      hidePaintSliderByUser();
      shareMyBehrProject("pinterest")
    });
    $(".emailShare").click(function() {
      hidePaintSliderByUser();
      shareMyBehrProject("email")
    });
    $params$$ = this.display.find(".preview");
    $($params$$).css("cursor", "pointer");
    $($params$$).on("click", function() {
      var $isQuad$$ = $obj$$.palette.display.find(".featured").hasClass("isQuad");
      0 === $obj$$.palette.numColors() && !$isQuad$$ ? visualizer.showGenericMessage("Please Note:", visualizer.noColorWarning, "", null) : (window.location.hash = "paint", $obj$$.stopRoomSlider())
    });
    this.display.find(".btnVisualize_featured").on("click", function() {
      var $isQuad$$ = $obj$$.palette.display.find(".featured").hasClass("isQuad");
      0 === $obj$$.palette.numColors() && !$isQuad$$ ? visualizer.showGenericMessage("Please Note:", visualizer.noColorWarning, "", null) : ($(window).scrollTop(colorsmart.offset().top), window.location.hash = "paint", $obj$$.stopRoomSlider())
    })
  };
  this.setPalette = function $this$setPalette$($palette$$) {
    this.palette.setPalette($palette$$);
    this.room.bindPalette(this.palette.paletteData, this.room.paletteBindings);
    visualizerInitFlag = !1
  };
  this.redirectToBuyNow = function $this$redirectToBuyNow$() {
    console.info("Landing on buynow page.");
    this.buyPaints()
  };
  this.onPreviewUpdatedHandler = function $this$onPreviewUpdatedHandler$($color$$) {
    0 === this.palette.numColors() && this.quadPalette.generateColors([$color$$]);
    this.showCoordinatedText();
    this.btnBuy.text(Visualizer.BUY_NOW)
  };
  this.init($params$$0$$)
}
function localizeColor($o$$) {
  var $changed$$ = !1;
  -1 < $o$$.search("colors") && ($o$$ = $o$$.replace(/\bcolors\b/g, "colours"), $changed$$ = !0);
  -1 < $o$$.search("Colors") && ($o$$ = $o$$.replace(/\bColors\b/g, "Colours"), $changed$$ = !0);
  -1 < $o$$.search("Color") && ($o$$ = $o$$.replace(/\bColor\b/g, "Colour"), $changed$$ = !0);
  -1 < $o$$.search("color") && ($o$$ = $o$$.replace(/\bcolor\b/g, "colour"), $changed$$ = !0);
  return $changed$$ ? $o$$ : ""
}
SITE = window.location.href;
Visualizer.NAME = "Visualizer";
Visualizer.MODE_COLORS = "colors";
Visualizer.MODE_PAINT = "vis";
Visualizer.PREVIEW_PAINT_COLORS = "Preview Paint Colors";
Visualizer.EXPLORE_PAINT_COLORS = "Explore Paint Colors";
Visualizer.BACK_TO_PROJECT = "Back to Project";
Visualizer.BUY_NOW = "Buy Now";
Visualizer.NEXT = "Next";
Visualizer.MY_PROJECTS = "My Projects";
Visualizer.MY_PROJECT = "My Project";
Visualizer.NEW_PROJECT = "New Project";
function RoomPicker($display$$) {
  this.display = $display$$;
  this.roomTemplates = {};
  this.roomTemplateCategories = [];
  this.currentRoom = null;
  this.activeIndex = this.activeCategory = 1;
  this.lastColor = this.thumbsOverlay = null;
  EventDispatcher.enableEvents(this, RoomPicker.OnRoomSelect, RoomPicker.OnClose);
  var $pypIntroOverlay$$ = this.display.find(".pyp.pyp_intro"), $pypSelectOverlay$$ = this.display.find(".pyp.pyp_select"), $pypUploadOverlay$$ = this.display.find(".pyp.pyp_upload"), $pypPositionOverlay$$ = this.display.find(".pyp.pyp_position"), $pypErrorOverlay$$ = this.display.find(".pyp.pyp_no_upload"), $pypNoStorageOverlay$$ = this.display.find(".pyp.pyp_no_browser_storage"), $site$$ = "/consumer/";
  -1 !== document.URL.toLowerCase().indexOf("/consumer/") ? $site$$ = "/consumer/" : -1 !== document.URL.toLowerCase().indexOf("/consumer_ca/") ? $site$$ = "/consumer_ca/" : -1 !== document.URL.toLowerCase().indexOf("/pro/") ? $site$$ = "/pro/" : -1 !== document.URL.toLowerCase().indexOf("/architect/") && ($site$$ = "/architect/");
  $("#terms_of_use").attr("href", $site$$ + "terms-of-use");
  $("#fileToUpload").fileReader({filereader:"/cma/Behr_Assets/Consumer/Paint_Color/js/fileupload/filereader.swf", expressInstall:"/cma/Behr_Assets/Consumer/Paint_Color/js/fileupload/expressInstall.swf", debugMode:!1, callback:function() {
    console.info("filereader ready")
  }});
  $("#fileToUpload").on("change", function($e$$) {
    readImageUrl($e$$)
  });
  recallUserImagesFromStorage();
  loadUserPYPSavedImages($pypSelectOverlay$$);
  this.load = function $this$load$($json$$) {
    this.thumbsOverlay = this.display.find(".thumbs");
    for(var $g$$ in $json$$) {
      var $group$$2_r$$20_t$$ = $json$$[$g$$], $ordered$$1_rooms$$ = $group$$2_r$$20_t$$.visualizerRooms;
      if(!(0 >= $ordered$$1_rooms$$.length)) {
        var $groupName$$ = $group$$2_r$$20_t$$.groupName, $i$$106_isExterior$$ = $group$$2_r$$20_t$$.isExterior;
        -1 == $.inArray($groupName$$, this.roomTemplateCategories) && (this.roomTemplateCategories[$group$$2_r$$20_t$$.order - 1] = $groupName$$);
        this.roomTemplates[$groupName$$] = [];
        for($group$$2_r$$20_t$$ = 0;$group$$2_r$$20_t$$ < $ordered$$1_rooms$$.length;$group$$2_r$$20_t$$++) {
          var $overlay$$3_template$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].shadowMap, $base$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].baseImg;
          "null" == $base$$ && ($base$$ = null);
          for(var $thumb$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].thumbNail, $id$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].roomId, $surfaces$$ = [], $compareBase$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].compareBase, $compareShadow$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].compareShadow, $comparePaintable$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].comparePaintable, $shadowX$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].shadowX, $shadowY$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].shadowY, 
          $offsets$$ = [], $areas$$ = [], $highlights$$ = [], $bindings$$ = [], $surfaces$$ = $ordered$$1_rooms$$[$group$$2_r$$20_t$$].visualizerSurfaces, $v$$ = 0;$v$$ < $surfaces$$.length;$v$$++) {
            var $surface$$ = $surfaces$$[$v$$];
            $areas$$[$v$$] = $surface$$.paintableAreaImage;
            $highlights$$[$v$$] = $surface$$.overlayImage;
            $bindings$$[$v$$] = -1;
            $offsets$$[2 * $v$$] = $surface$$.x;
            $offsets$$[2 * $v$$ + 1] = $surface$$.y
          }
          $overlay$$3_template$$ = new RoomTemplate($id$$, $groupName$$, $overlay$$3_template$$, $base$$, $areas$$, $highlights$$, $offsets$$, $bindings$$, $thumb$$, $i$$106_isExterior$$, $surfaces$$, $compareBase$$, $compareShadow$$, $comparePaintable$$, $shadowX$$, $shadowY$$);
          this.roomTemplates[$groupName$$][$ordered$$1_rooms$$[$group$$2_r$$20_t$$].order - 1] = $overlay$$3_template$$
        }
        $ordered$$1_rooms$$ = [];
        for($i$$106_isExterior$$ = 0;$i$$106_isExterior$$ < this.roomTemplates[$groupName$$].length;$i$$106_isExterior$$++) {
          ($group$$2_r$$20_t$$ = this.roomTemplates[$groupName$$][$i$$106_isExterior$$]) && ($ordered$$1_rooms$$[$ordered$$1_rooms$$.length] = $group$$2_r$$20_t$$)
        }
        this.roomTemplates[$groupName$$] = $ordered$$1_rooms$$
      }
    }
    $ordered$$1_rooms$$ = [];
    for($i$$106_isExterior$$ = 0;$i$$106_isExterior$$ < this.roomTemplateCategories.length;$i$$106_isExterior$$++) {
      ($group$$2_r$$20_t$$ = this.roomTemplateCategories[$i$$106_isExterior$$]) && ($ordered$$1_rooms$$[$ordered$$1_rooms$$.length] = $group$$2_r$$20_t$$)
    }
    this.roomTemplateCategories = $ordered$$1_rooms$$;
    this.updateUI()
  };
  this.updateUI = function $this$updateUI$() {
    var $obj$$ = this, $pypParameter$$ = this.display.find(".types");
    $pypParameter$$.html("");
    for(var $categoryIndex_customNode_i$$ = 0;$categoryIndex_customNode_i$$ < this.roomTemplateCategories.length;$categoryIndex_customNode_i$$++) {
      var $categoryName$$ = this.roomTemplateCategories[$categoryIndex_customNode_i$$], $node$$ = $("<div class='type'><span>" + $categoryName$$ + "</span></div>");
      $pypParameter$$.append($node$$);
      $node$$.on("click", function($ei$$) {
        return function($e$$) {
          $obj$$.handleCategoryClick($ei$$, !0)
        }
      }($categoryName$$))
    }
    $categoryIndex_customNode_i$$ = $("<div class='type custom'><div class='icon'></div><span>Paint My Room</span></div>");
    $pypParameter$$.append($categoryIndex_customNode_i$$);
    $categoryIndex_customNode_i$$.on("click", function($ei$$) {
      return function($e$$) {
        $obj$$.handleCategoryClick($ei$$, !0)
      }
    }("My Custom Images"));
    $pypParameter$$.append("<div class='arrow'></div>");
    $pypParameter$$ = getParameterByName("pyp");
    $categoryIndex_customNode_i$$ = $.inArray(this.activeCategory, this.roomTemplateCategories);
    "start" == $pypParameter$$ && (console.info("category 7 attempt"), this.activeIndex = this.activeCategory = $categoryIndex_customNode_i$$ = 7);
    this.highlightCategoryButton($categoryIndex_customNode_i$$);
    console.info("_isPYPRoom: " + _isPYPRoom)
  };
  this.handleCategoryClick = function $this$handleCategoryClick$($clickedCategory$$) {
    this.showThumbs($clickedCategory$$)
  };
  this.showRoom = function $this$showRoom$($a$$, $b$$) {
    var $e$$ = {};
    $e$$.templateName = $a$$;
    $e$$.index = $b$$;
    this.dispatchEvent(RoomPicker.OnRoomSelect, $e$$)
  };
  this.highlightCategoryButton = function $this$highlightCategoryButton$($categoryIndex$$) {
    console.info("categoryIndex: " + $categoryIndex$$);
    var $arrow_buttons$$ = this.display.find(".arrow"), $arrowOffset_button$$ = 32.5;
    6 < $categoryIndex$$ && ($arrowOffset_button$$ += 33);
    $arrow_buttons$$.css("left", 80 * $categoryIndex$$ + $arrowOffset_button$$);
    $arrow_buttons$$ = $display$$.find(".types .type");
    $arrowOffset_button$$ = $($arrow_buttons$$[$categoryIndex$$]);
    6 < $categoryIndex$$ && ($arrowOffset_button$$ = $(".types .type.custom"));
    $arrow_buttons$$.removeClass("active");
    $arrowOffset_button$$.addClass("active")
  };
  this.showThumbs = function $this$showThumbs$($category$$, $color$$) {
    $pypIntroOverlay$$.hide();
    $pypSelectOverlay$$.hide();
    $pypUploadOverlay$$.hide();
    $pypPositionOverlay$$.hide();
    $pypErrorOverlay$$.hide();
    $pypNoStorageOverlay$$.hide();
    $color$$ || ($color$$ = this.lastColor);
    this.lastColor = $color$$;
    var $obj$$ = this, $categoryIndex$$2_i$$ = $.inArray($category$$, this.roomTemplateCategories), $isLessThanIE11_templates$$ = this.roomTemplates[$category$$];
    this.display.find(".indexer");
    "My Custom Images" == $category$$ && ($isLessThanIE11_templates$$ = [], this.activeIndex = this.activeCategory = $categoryIndex$$2_i$$ = 7, console.info("this is getting called now"));
    this.highlightCategoryButton($categoryIndex$$2_i$$);
    this.thumbsOverlay.html("");
    for($categoryIndex$$2_i$$ = 0;$categoryIndex$$2_i$$ < $isLessThanIE11_templates$$.length;$categoryIndex$$2_i$$++) {
      var $template$$ = $isLessThanIE11_templates$$[$categoryIndex$$2_i$$];
      (function() {
        $("<div></div>");
        var $room$$4_t$$ = loadModuleDisplay("PaintRoom");
        $obj$$.thumbsOverlay.append($room$$4_t$$);
        var $previewRoom$$ = new PaintRoom($room$$4_t$$, !0, 173, 127);
        $previewRoom$$.palette = new Palette;
        $room$$4_t$$ = new RoomTemplate("-1", "", $template$$.compareShadow, $template$$.compareBase, [$template$$.comparePaintable], [$template$$.comparePaintable], [0, 0], [0], null, !1, null, null, null, null, null, null);
        $previewRoom$$.onready = function $$previewRoom$$$onready$() {
          $previewRoom$$.paintSectionByIndex($color$$, 0)
        };
        $previewRoom$$.loadRoom($room$$4_t$$, null)
      })()
    }
    if("My Custom Images" == $category$$) {
      $pypIntroOverlay$$.find("a.orange_button.pyp_intro-continue").unbind().bind("click", function() {
        $pypIntroOverlay$$.hide();
        $pypSelectOverlay$$.show()
      });
      $pypIntroOverlay$$.find("a.orange_button.pyp_intro-upload").unbind().bind("click", function() {
        $pypIntroOverlay$$.hide();
        $pypSelectOverlay$$.show()
      });
      $pypIntroOverlay$$.find("a.orange_button.pyp_intro-use").unbind().bind("click", function() {
        $pypIntroOverlay$$.hide();
        $obj$$.showThumbs("Bedroom");
        return!1
      });
      $isLessThanIE11_templates$$ = !1;
      if(-1 != navigator.appName.indexOf("Internet Explorer") && (-1 != navigator.appVersion.indexOf("MSIE 8") || -1 != navigator.appVersion.indexOf("MSIE 9") || -1 != navigator.appVersion.indexOf("MSIE 10"))) {
        $isLessThanIE11_templates$$ = !0
      }
      $categoryIndex$$2_i$$ = !1;
      try {
        localStorage.test = 2
      }catch($e$$) {
        $categoryIndex$$2_i$$ = !0
      }
      userHasSavedImages ? $isLessThanIE11_templates$$ ? ($pypIntroOverlay$$.hide(), $pypSelectOverlay$$.hide(), $pypNoStorageOverlay$$.hide(), $pypErrorOverlay$$.show()) : $categoryIndex$$2_i$$ ? ($pypIntroOverlay$$.hide(), $pypSelectOverlay$$.hide(), $pypErrorOverlay$$.hide(), $pypNoStorageOverlay$$.show()) : ($pypIntroOverlay$$.hide(), $pypErrorOverlay$$.hide(), $pypNoStorageOverlay$$.hide(), $pypSelectOverlay$$.show()) : $isLessThanIE11_templates$$ ? ($pypIntroOverlay$$.hide(), $pypSelectOverlay$$.hide(), 
      $pypNoStorageOverlay$$.hide(), $pypErrorOverlay$$.show()) : $categoryIndex$$2_i$$ ? ($pypIntroOverlay$$.hide(), $pypSelectOverlay$$.hide(), $pypErrorOverlay$$.hide(), $pypNoStorageOverlay$$.show()) : ("standard" == pypIntroContent ? ($pypIntroOverlay$$.find("div.pyp_intro_content_deep_link").hide(), $pypIntroOverlay$$.find("div.pyp_intro_content_standard").show()) : "pypdeeplink" == pypIntroContent ? ($pypIntroOverlay$$.find("div.pyp_intro_content_standard").hide(), $pypIntroOverlay$$.find("div.pyp_intro_content_deep_link").show()) : 
      ($pypIntroOverlay$$.find("div.pyp_intro_content_deep_link").hide(), $pypIntroOverlay$$.find("div.pyp_intro_content_standard").show()), $pypIntroOverlay$$.show())
    }else {
      this.thumbsOverlay.find("div").on("click", function() {
        switchFromPYPToVisualizer();
        var $thumb$$ = $(this);
        $obj$$.showRoom($category$$, $thumb$$.index())
      })
    }
  };
  this.hide = function $this$hide$() {
    Modal.prototype.hide.call(this);
    console.info("Dispatching close event");
    this.dispatchEvent(RoomPicker.OnClose, {})
  };
  this.init = function $this$init$() {
    this.display.find(".close").on("click", function() {
      hideModal()
    })
  };
  this.init()
}
RoomPicker.OnRoomSelect = "onRoomSelect";
RoomPicker.OnClose = "close";
RoomPicker.prototype = new Modal;
var drawingCanvas, drawingCanvasContext, tempImage1, tempImage2, tempImage3, userSavedImagesThumbnails, userHasSavedImages = !1;
function ColorBrowser($params$$0$$) {
  this.tabCarat = this.tabs = this.display = null;
  var $oneCoatFamilies$$ = [];
  EventDispatcher.enableEvents(this, ColorBrowser.ON_COLOR_CLICK);
  this.family = {browser:null, colorSelector:null, swatchSelector:null, colorCycle:"Red Orange Yellow Green Blue Purple".split(" "), colorCycleDoNotTranslate:"Red Orange Yellow Green Blue Purple".split(" "), upButton:null, downButton:null, currentColor:0, currentIndex:0, isColorCycle:!0, selectColor:function $this$family$selectColor$($i$$, $index$$, $skipAnimation$$) {
    this.colorSelector.css("top", 52 * $i$$ + 6 + "px");
    this.colorSelector.find(".rep").css("background-image", $(this.display.find(".color .rep")[$i$$]).css("background-image"));
    this.populateChipsets($i$$, $index$$, $skipAnimation$$)
  }, selectChipset:function $this$family$selectChipset$($i$$) {
    var $cs$$ = this.display.find(".chipsets > .chipset");
    "first" === $i$$ ? $i$$ = 0 : "last" === $i$$ && ($i$$ = $cs$$.length - 1);
    this.swatchSelector.css("top", 46 * $i$$ + 1 + "px");
    this.swatchSelector.fadeIn(300);
    $cs$$ = $($cs$$[$i$$]);
    this.populateChips($cs$$);
    this.currentIndex = $i$$;
    this.swatchSelector.html($cs$$.clone())
  }, up:function $this$family$up$() {
    this.display.find(".chipsets > .chipset");
    var $i$$ = this.currentIndex;
    0 == $i$$ ? this.isColorCycle ? this.selectColor(0 == this.currentColor ? 5 : this.currentColor - 1, "last", !0) : this.selectChipset("last") : this.selectChipset(--$i$$)
  }, down:function $this$family$down$() {
    var $cs$$ = this.display.find(".chipsets > .chipset"), $i$$ = this.currentIndex;
    $i$$ >= $cs$$.length - 1 ? this.isColorCycle ? this.selectColor(5 == this.currentColor ? 0 : this.currentColor + 1, "first", !0) : this.selectChipset("first") : this.selectChipset(++$i$$)
  }, populateChips:function $this$family$populateChips$($chipset_s$$) {
    var $obj$$ = this, $chips$$ = this.display.find(".chips");
    $chips$$.html("");
    $chipset_s$$ = $chipset_s$$.clone();
    $chips$$.append($chipset_s$$);
    $chipset_s$$ = $chipset_s$$.find(".swatch");
    $chipset_s$$.on("mouseover", function($e$$) {
      t = $(this);
      showTooltip(t.find(".name").text(), t.find(".id").text(), t)
    });
    $chipset_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chipset_s$$.on("click", function($color$$49_e$$) {
      $color$$49_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$49_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chipset_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    })
  }, _getColor:function $this$family$_getColor$($index$$) {
    for(;8 < $index$$;) {
      $index$$ -= 9
    }
    for(;0 > $index$$;) {
      $index$$ += 9
    }
    switch($index$$) {
      case 0:
        return"Red";
      case 1:
        return"Orange";
      case 2:
        return"Yellow";
      case 3:
        return"Green";
      case 4:
        return"Blue";
      case 5:
        return"Purple";
      case 6:
        return"Brown";
      case 7:
        return"Gray";
      case 8:
        return"White"
    }
  }, _getColorIndex:function $this$family$_getColorIndex$($color$$) {
    if("string" !== typeof $color$$) {
      return-1
    }
    switch($color$$.toLowerCase()) {
      case "red":
        return 0;
      case "orange":
        return 1;
      case "yellow":
        return 2;
      case "green":
        return 3;
      case "blue":
        return 4;
      case "purple":
        return 5;
      case "brown":
        return 6;
      case "gray":
        return 7;
      case "white":
        return 9;
      default:
        return-1
    }
  }, populateChipsets:function $this$family$populateChipsets$($color$$, $index$$0$$, $disableAnimation$$) {
    function $delayedRenderChipset$$($group$$, $index$$, $selected$$, $c$$) {
      setTimeout(function() {
        $renderChipset$$($group$$, $index$$, $selected$$, $c$$)
      }, 80 * $index$$)
    }
    function $renderChipset$$($group$$, $index$$, $selected$$, $c$$31_chipset$$) {
      if($obj$$.currentColor == $c$$31_chipset$$) {
        $c$$31_chipset$$ = $("<div class='chipset'><table><tr><td></td></tr></table></div>");
        for(var $td$$ = $c$$31_chipset$$.find("td"), $r$$ = 0;$r$$ < $group$$.length;$r$$++) {
          var $swatches$$ = $group$$[$r$$].split(","), $numColors$$ = 0, $tr$$ = $("<div></div>");
          $td$$.append($tr$$);
          for(var $s$$ = 0;$s$$ < $swatches$$.length;$s$$++) {
            var $color$$53_swatch$$ = colorLookup[$swatches$$[$s$$].trim()];
            $color$$53_swatch$$ && ($numColors$$++, $color$$53_swatch$$ = $("<div class='swatch' style='background-color:" + $color$$53_swatch$$.rgb + "'><div class='id'>" + $color$$53_swatch$$.id + "</div><div class='name'>" + $color$$53_swatch$$.name + "</div></div>"), $tr$$.append($color$$53_swatch$$))
          }
          $tr$$.append($("<div class='clear'></div>"))
        }
        $c$$31_chipset$$.on("mouseup", function($e$$181_set$$) {
          $e$$181_set$$ = $($e$$181_set$$.target);
          $e$$181_set$$.hasClass("chipset") || ($e$$181_set$$ = $e$$181_set$$.closest(".chipset"));
          $obj$$.selectChipset($e$$181_set$$.index() - 1)
        });
        $chipsets$$.append($c$$31_chipset$$);
        $selected$$ && $obj$$.selectChipset($index$$)
      }
    }
    var $obj$$ = this, $st$$ = this._getColor($color$$);
    if(6 > $color$$) {
      var $bottom$$1_i$$ = 5 < $color$$ + 1 ? this.colorCycle[0] : this.colorCycle[$color$$ + 1], $bottomImg_fam_numSwatches$$ = 5 < $color$$ + 1 ? this.colorCycleDoNotTranslate[0] : this.colorCycleDoNotTranslate[$color$$ + 1];
      this.upButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + (0 > $color$$ - 1 ? this.colorCycleDoNotTranslate[5] : this.colorCycleDoNotTranslate[$color$$ - 1]) + "_up.png'/> <span>" + (0 > $color$$ - 1 ? this.colorCycle[5] : this.colorCycle[$color$$ - 1]) + "</span>");
      this.downButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $bottomImg_fam_numSwatches$$ + "_down.png'/> <span>" + $bottom$$1_i$$ + "</span>");
      this.isColorCycle = !0
    }else {
      this.upButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $st$$ + "_up.png'/> <span>Cool</span>"), this.downButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $st$$ + "_down.png'/><span>Warm</span>"), this.isColorCycle = !1
    }
    this.currentColor = $color$$;
    $bottomImg_fam_numSwatches$$ = 9;
    $disableAnimation$$ || this.swatchSelector.hide();
    for($bottom$$1_i$$ = 0;$bottom$$1_i$$ < _families.length;$bottom$$1_i$$++) {
      if($bottomImg_fam_numSwatches$$ = _families[$bottom$$1_i$$], $bottomImg_fam_numSwatches$$.name == $st$$) {
        var $chipsets$$ = this.display.find(".chipsets");
        $chipsets$$.html("");
        $chipsets$$.append(this.swatchSelector);
        var $groups$$ = $bottomImg_fam_numSwatches$$.groups, $bottomImg_fam_numSwatches$$ = $groups$$.length;
        void 0 === $index$$0$$ ? $index$$0$$ = parseInt($bottomImg_fam_numSwatches$$ / 2 - 0.5) : "first" === $index$$0$$ ? $index$$0$$ = 0 : "last" === $index$$0$$ && ($index$$0$$ = $bottomImg_fam_numSwatches$$ - 1);
        for(var $g$$ = 0;$g$$ < $bottomImg_fam_numSwatches$$;$g$$++) {
          var $group$$0$$ = $groups$$[$g$$];
          $disableAnimation$$ ? $renderChipset$$($group$$0$$, $g$$, $g$$ == $index$$0$$, $color$$) : $delayedRenderChipset$$($group$$0$$, $g$$, $g$$ == $index$$0$$, $color$$)
        }
      }
    }
  }, init:function $this$family$init$($parent$$, $params$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    var $fam$$ = this.display = $parent$$.display.find(".family");
    this.colorSelector = $fam$$.find(".colors .selected");
    this.swatchSelector = $fam$$.find(".chipsets .selected");
    this.upButton = this.display.find(".up .button span");
    this.downButton = this.display.find(".down .button span");
    $obj$$ = this;
    $fam$$.find(".color .rep").on("click", function($e$$) {
      $e$$ = $($e$$.target).parent();
      $obj$$.selectColor($e$$.index())
    });
    this.upButton.on("click", function($e$$) {
      $obj$$.up()
    });
    this.downButton.on("click", function($e$$) {
      $obj$$.down()
    });
    var $defaultColor$$ = 0;
    $params$$ && $params$$.family && ($defaultColor$$ = this._getColorIndex($params$$.family), 0 > $defaultColor$$ && ($defaultColor$$ = 0));
    setTimeout(function() {
      $obj$$.selectColor($defaultColor$$)
    }, 10)
  }};
  this.decorator = {browser:null, display:null, swatchSelector:null, section:null, selectChipset:function $this$decorator$selectChipset$($i$$) {
    var $cs$$6_csi$$ = this.display.find(".chipset");
    $cs$$6_csi$$.removeClass("active");
    $cs$$6_csi$$ = $($cs$$6_csi$$[$i$$]);
    $cs$$6_csi$$.addClass("active");
    this.swatchSelector.css("top", 94 * $i$$ + 1 + "px");
    this.populateChips($(this.display.find(".chipsets .chipset")[$i$$]));
    this.swatchSelector.html($cs$$6_csi$$.clone())
  }, populateChips:function $this$decorator$populateChips$($chipset$$) {
    var $obj$$ = this, $chips$$1_s$$ = this.display.find(".chips");
    $chips$$1_s$$.html("");
    $chipset$$ = $chipset$$.clone();
    $chips$$1_s$$.append($chipset$$);
    var $bg_printPDF$$ = $chipset$$.find(".bg").text();
    $chips$$1_s$$.css("background-image", "url(" + $bg_printPDF$$ + ")");
    0 <= location.href.indexOf("/pro/") && ($bg_printPDF$$ = $chipset$$.find(".pdf").text(), $chips$$1_s$$.append('<a target="_blank" class="button orange_button orange_button-print_chipset" href="' + $bg_printPDF$$ + '">Print Palette</a>'));
    $chips$$1_s$$ = $chipset$$.find(".swatch");
    $chips$$1_s$$.on("click", function($color$$54_e$$) {
      $color$$54_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$54_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chips$$1_s$$.on("mouseover", function($e$$186_t$$) {
      $e$$186_t$$ = $(this);
      showTooltip($e$$186_t$$.find(".name").text(), $e$$186_t$$.find(".id").text(), $e$$186_t$$)
    });
    $chips$$1_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chips$$1_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    });
    $chipset$$.find("span").remove()
  }, populateChipsets:function $this$decorator$populateChipsets$($chipsets$$) {
    var $obj$$ = this;
    $chipsets$$ = this.display.find(".chipsets");
    $chipsets$$.html("");
    for(var $i$$ = 0;$i$$ < _decorators.length;$i$$++) {
      var $chips$$2_dec$$ = _decorators[$i$$], $bg$$1_s$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$2_dec$$.bg, $title$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$2_dec$$.title, $chipset$$;
      $chipset$$ = 0 <= location.href.indexOf("devpreview") ? "/cma/Behr_Assets/Pro/Paint_Color/" : "/cma/Behr_Assets/Professional/Paint_Color/";
      var $color$$ = IMAGE_ROOT + $chipset$$ + $chips$$2_dec$$.pdf, $chips$$2_dec$$ = $chips$$2_dec$$.group.split(",");
      $chipset$$ = $("<div class='chipset'></div>");
      $chipset$$.append("<div class='bg'>" + $bg$$1_s$$ + "</div>");
      $chipset$$.append("<div class='pdf' style='display:none;'>" + $color$$ + "</div>");
      for($bg$$1_s$$ = 0;$bg$$1_s$$ < $chips$$2_dec$$.length;$bg$$1_s$$++) {
        var $c$$32_swatch$$ = $chips$$2_dec$$[$bg$$1_s$$].trim();
        ($color$$ = colorLookup["HDC-" + $c$$32_swatch$$]) || ($color$$ = colorLookup[$c$$32_swatch$$]);
        $color$$ && ($c$$32_swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$.id + "</div><div class='name'>" + $color$$.name + "</div></div>"), $c$$32_swatch$$.css("background-color", $color$$.rgb), $chipset$$.append($c$$32_swatch$$))
      }
      $chipset$$.append("<img src='" + $title$$ + "'/>");
      $chipset$$.on("mouseup", function($e$$189_set$$) {
        $e$$189_set$$ = $($e$$189_set$$.target);
        $e$$189_set$$.hasClass("chipset") || ($e$$189_set$$ = $e$$189_set$$.parent());
        $obj$$.selectChipset($e$$189_set$$.index())
      });
      $chipsets$$.append($chipset$$)
    }
    $chipsets$$.append(this.swatchSelector)
  }, populateChipsets:function $this$decorator$populateChipsets$($list$$2_region$$) {
    var $obj$$ = this, $columns_title$$ = this.display.find(".columns"), $chipsets$$ = this.display.find(".chipsets");
    $chipsets$$.html("");
    for(var $chips$$3_classes$$3_dec$$ = $columns_title$$.attr("class").split(/\s+/), $i$$ = 0;$i$$ < $chips$$3_classes$$3_dec$$.length;$i$$++) {
      "columns" != $chips$$3_classes$$3_dec$$[$i$$] && $columns_title$$.removeClass($chips$$3_classes$$3_dec$$[$i$$])
    }
    $columns_title$$.addClass($list$$2_region$$);
    $list$$2_region$$ = _decorators[$list$$2_region$$];
    for($i$$ = 0;$i$$ < $list$$2_region$$.length;$i$$++) {
      var $chips$$3_classes$$3_dec$$ = $list$$2_region$$[$i$$], $bg$$2_s$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$3_classes$$3_dec$$.bg, $columns_title$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$3_classes$$3_dec$$.title, $chipset$$4_filePath$$;
      $chipset$$4_filePath$$ = 0 <= location.href.indexOf("devpreview") ? "/cma/Behr_Assets/Pro/Paint_Color/" : "/cma/Behr_Assets/Professional/Paint_Color/";
      var $color$$57_pdf$$ = IMAGE_ROOT + $chipset$$4_filePath$$ + $chips$$3_classes$$3_dec$$.pdf, $chips$$3_classes$$3_dec$$ = $chips$$3_classes$$3_dec$$.group.split(",");
      $chipset$$4_filePath$$ = $("<div class='chipset'></div>");
      $chipset$$4_filePath$$.append("<div class='bg'>" + $bg$$2_s$$ + "</div>");
      $chipset$$4_filePath$$.append("<div class='pdf' style='display:none;'>" + $color$$57_pdf$$ + "</div>");
      for($bg$$2_s$$ = 0;$bg$$2_s$$ < $chips$$3_classes$$3_dec$$.length;$bg$$2_s$$++) {
        var $c$$33_swatch$$ = $chips$$3_classes$$3_dec$$[$bg$$2_s$$].trim();
        ($color$$57_pdf$$ = colorLookup["HDC-" + $c$$33_swatch$$]) || ($color$$57_pdf$$ = colorLookup[$c$$33_swatch$$]);
        $color$$57_pdf$$ ? ($c$$33_swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$57_pdf$$.id + "</div><div class='name'>" + $color$$57_pdf$$.name + "</div></div>"), $c$$33_swatch$$.css("background-color", $color$$57_pdf$$.rgb), $chipset$$4_filePath$$.append($c$$33_swatch$$)) : console.info("missing: " + $chips$$3_classes$$3_dec$$[$bg$$2_s$$])
      }
      $chipset$$4_filePath$$.append("<img src='" + $columns_title$$ + "'/>");
      $chipset$$4_filePath$$.on("mouseup", function($e$$190_set$$) {
        $e$$190_set$$ = $($e$$190_set$$.target);
        $e$$190_set$$.hasClass("chipset") || ($e$$190_set$$ = $e$$190_set$$.parent());
        $obj$$.selectChipset($e$$190_set$$.index())
      });
      $chipsets$$.append($chipset$$4_filePath$$)
    }
    $chipsets$$.append(this.swatchSelector)
  }, init:function $this$decorator$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".decorator");
    this.swatchSelector = this.display.find(".chipsets .selected");
    this.populateChipsets("home");
    this.selectChipset(0);
    var $options$$ = this.display.find(".set");
    $($options$$[0]).on("click", function() {
      $obj$$.section = "home";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[1]).parent().removeClass("active");
      $($options$$[0]).parent().addClass("active")
    });
    $($options$$[1]).on("click", function() {
      $obj$$.section = "springsummer";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[0]).parent().removeClass("active");
      $($options$$[1]).parent().addClass("active")
    })
  }};
  this.popular = {browser:null, display:null, swatchSelector:null, section:null, selectChipset:function $this$popular$selectChipset$($i$$) {
    var $cs$$7_csi$$ = this.display.find(".chipset");
    $cs$$7_csi$$.removeClass("active");
    $cs$$7_csi$$ = $($cs$$7_csi$$[$i$$]);
    $cs$$7_csi$$.addClass("active");
    this.swatchSelector.css("top", ("hue" === this.section ? 55 * $i$$ + 5 : 66 * $i$$ + 16) + "px");
    this.populateChips($(this.display.find(".chipsets .chipset")[$i$$]));
    this.swatchSelector.html($cs$$7_csi$$.clone())
  }, populateChips:function $this$popular$populateChips$($chipset$$) {
    var $obj$$ = this, $chips$$4_s$$ = this.display.find(".chips");
    $chips$$4_s$$.html("");
    $chipset$$ = $chipset$$.clone();
    $chips$$4_s$$.append($chipset$$);
    var $name$$ = $chipset$$.find("span").text(), $bg$$3_printPDF$$ = $chipset$$.find(".bg").text();
    $bg$$3_printPDF$$ ? $chips$$4_s$$.css("background-image", "url(" + $bg$$3_printPDF$$ + ")") : $chips$$4_s$$.css("background-image", "");
    0 <= location.href.indexOf("/pro/") && ($bg$$3_printPDF$$ = $chipset$$.find(".pdf").text(), $chips$$4_s$$.append('<a target="_blank" class="button orange_button orange_button-print_chipset" href="' + $bg$$3_printPDF$$ + '">Print Palette</a>'));
    $chips$$4_s$$ = $chipset$$.find(".swatch");
    $chips$$4_s$$.on("click", function($color$$58_e$$) {
      $color$$58_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$58_e$$;
      $o$$.roomType = "exterior" === $obj$$.section ? "exterior" : $name$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chips$$4_s$$.on("mouseover", function($e$$192_t$$) {
      $e$$192_t$$ = $(this);
      showTooltip($e$$192_t$$.find(".name").text(), $e$$192_t$$.find(".id").text(), $e$$192_t$$)
    });
    $chips$$4_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chips$$4_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    });
    $chipset$$.find("span").remove()
  }, populateChipsets:function $this$popular$populateChipsets$($list$$3_region$$) {
    var $obj$$ = this, $columns$$1_name$$ = this.display.find(".columns"), $chipsets$$ = this.display.find(".chipsets");
    $chipsets$$.html("");
    for(var $classes$$4_title$$ = $columns$$1_name$$.attr("class").split(/\s+/), $i$$ = 0;$i$$ < $classes$$4_title$$.length;$i$$++) {
      "columns" != $classes$$4_title$$[$i$$] && $columns$$1_name$$.removeClass($classes$$4_title$$[$i$$])
    }
    $columns$$1_name$$.addClass($list$$3_region$$);
    $list$$3_region$$ = _popular[$list$$3_region$$];
    for($i$$ = 0;$i$$ < $list$$3_region$$.length;$i$$++) {
      var $chips$$5_dec$$ = $list$$3_region$$[$i$$], $columns$$1_name$$ = $chips$$5_dec$$.name;
      -1 < SITE.search("consumer_ca") && "Gray" === $columns$$1_name$$ && ($columns$$1_name$$ = "Grey");
      var $bg$$ = $chips$$5_dec$$.bg ? IMAGE_ROOT + "/cma/vz/vis/" + $chips$$5_dec$$.bg : null, $classes$$4_title$$ = $chips$$5_dec$$.title ? IMAGE_ROOT + "/cma/vz/vis/" + $chips$$5_dec$$.title : null, $chipset$$6_filePath$$;
      $chipset$$6_filePath$$ = 0 <= location.href.indexOf("devpreview") ? "/cma/Behr_Assets/Pro/Paint_Color/" : "/cma/Behr_Assets/Professional/Paint_Color/";
      var $pdf$$2_s$$ = $chips$$5_dec$$.pdf ? IMAGE_ROOT + $chipset$$6_filePath$$ + $chips$$5_dec$$.pdf : null, $chips$$5_dec$$ = $chips$$5_dec$$.group.split(",");
      $chipset$$6_filePath$$ = $("<div class='chipset'></div>");
      $bg$$ && $chipset$$6_filePath$$.append("<div class='bg'>" + $bg$$ + "</div>");
      $pdf$$2_s$$ && $chipset$$6_filePath$$.append("<div class='pdf' style='display:none;'>" + $pdf$$2_s$$ + "</div>");
      $bg$$ = null != $classes$$4_title$$ && "" != $classes$$4_title$$ && -1 < $classes$$4_title$$.indexOf("2016Trends") ? $("<div class='chipblock trends-chipblock'></div>") : $("<div class='chipblock'></div>");
      $chipset$$6_filePath$$.append($bg$$);
      for($pdf$$2_s$$ = 0;$pdf$$2_s$$ < $chips$$5_dec$$.length;$pdf$$2_s$$++) {
        var $color$$ = colorLookup[$chips$$5_dec$$[$pdf$$2_s$$].trim()];
        if($color$$) {
          var $swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$.id + "</div><div class='name'>" + $color$$.name + "</div></div>");
          $swatch$$.css("background-color", $color$$.rgb);
          $bg$$.append($swatch$$)
        }else {
          console.info("missing: " + $chips$$5_dec$$[$pdf$$2_s$$])
        }
      }
      $bg$$.append("<div class='clear'></div>");
      $classes$$4_title$$ ? $chipset$$6_filePath$$.append("<img src='" + $classes$$4_title$$ + "'/>") : $chipset$$6_filePath$$.append("<div class='clear'></div><span>" + $columns$$1_name$$ + "</span>");
      $chipset$$6_filePath$$.on("mouseup", function($e$$195_set$$) {
        for($e$$195_set$$ = $($e$$195_set$$.target);!$e$$195_set$$.hasClass("chipset");) {
          if($e$$195_set$$ = $e$$195_set$$.parent(), !$e$$195_set$$) {
            return
          }
        }
        $obj$$.selectChipset($e$$195_set$$.index())
      });
      $chipsets$$.append($chipset$$6_filePath$$)
    }
    $chipsets$$.append(this.swatchSelector)
  }, init:function $this$popular$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".popular");
    this.swatchSelector = this.display.find(".chipsets .selected");
    $obj$$.section = "trends2016";
    this.populateChipsets("trends2016");
    this.selectChipset(0);
    var $options$$ = this.display.find(".set");
    $($options$$[0]).on("click", function() {
      $obj$$.section = "trends2016";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[0]).parent().addClass("active");
      $($options$$[1]).parent().removeClass("active");
      $($options$$[2]).parent().removeClass("active");
      $($options$$[3]).parent().removeClass("active")
    });
    $($options$$[1]).on("click", function() {
      $obj$$.section = "interior";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[1]).parent().addClass("active");
      $($options$$[0]).parent().removeClass("active");
      $($options$$[2]).parent().removeClass("active");
      $($options$$[3]).parent().removeClass("active")
    });
    $($options$$[2]).on("click", function() {
      $obj$$.section = "exterior";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[2]).parent().addClass("active");
      $($options$$[0]).parent().removeClass("active");
      $($options$$[1]).parent().removeClass("active");
      $($options$$[3]).parent().removeClass("active")
    });
    $($options$$[3]).on("click", function() {
      $obj$$.section = "hue";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[3]).parent().addClass("active");
      $($options$$[0]).parent().removeClass("active");
      $($options$$[1]).parent().removeClass("active");
      $($options$$[2]).parent().removeClass("active")
    })
  }};
  this.marquee = {browser:null, display:null, swatchSelector:null, section:null, colorCycle:"RED ORANGE YELLOW GREEN BLUE PURPLE".split(" "), colorCycleDoNotTranslate:"Red Orange Yellow Green Blue Purple".split(" "), upButton:null, downButton:null, currentColor:0, currentIndex:0, isColorCycle:!0, defaultColor:-1, selectColor:function $this$marquee$selectColor$($i$$, $index$$, $skipAnimation$$) {
    -1 == $i$$ && ($i$$ = 0);
    this.colorSelector.css("top", 52 * $i$$ + 6 + "px");
    this.colorSelector.find(".rep").css("background-image", $(this.display.find(".color .rep")[$i$$]).css("background-image"));
    this.populateOneCoatFamilyChipsets($i$$, $index$$, $skipAnimation$$)
  }, up:function $this$marquee$up$() {
    this.display.find(".chipsets > .chipset");
    var $i$$ = this.currentIndex;
    0 == $i$$ ? this.isColorCycle ? this.selectColor(0 == this.currentColor ? 5 : this.currentColor - 1, "last", !0) : this.selectChipset("last", !0, !0) : this.selectChipset(--$i$$, !0, !0)
  }, down:function $this$marquee$down$() {
    var $cs$$ = this.display.find(".chipsets > .chipset"), $i$$ = this.currentIndex;
    $i$$ >= $cs$$.length - 1 ? this.isColorCycle ? this.selectColor(5 == this.currentColor ? 0 : this.currentColor + 1, "first", !0) : this.selectChipset("first", !0, !0) : this.selectChipset(++$i$$, !0, !0)
  }, selectSection:function $this$marquee$selectSection$($sectionName$$, $tabIndex$$) {
    this.display.find(".chipset").html("");
    this.display.find(".chips").css("background-image", "");
    this.section = $sectionName$$;
    this.populateChipsets(this.section);
    var $o$$ = this.display.find(".set").parent();
    $o$$.removeClass("active");
    $($o$$[$tabIndex$$]).addClass("active");
    $sectionName$$ = "oneCoatFamilies";
    var $c$$ = this.display.find(".marquee").find(".color .rep");
    setTimeout(function() {
      $($c$$[$o$$]).trigger("click")
    }, 10)
  }, _getColor:function $this$marquee$_getColor$($index$$) {
    for(;8 < $index$$;) {
      $index$$ -= 9
    }
    for(;0 > $index$$;) {
      $index$$ += 9
    }
    switch($index$$) {
      case 0:
        return"Red";
      case 1:
        return"Orange";
      case 2:
        return"Yellow";
      case 3:
        return"Green";
      case 4:
        return"Blue";
      case 5:
        return"Purple";
      case 6:
        return"Brown";
      case 7:
        return"Gray";
      case 8:
        return"White"
    }
  }, _getColorIndex:function $this$marquee$_getColorIndex$($color$$) {
    if("string" !== typeof $color$$) {
      return-1
    }
    switch($color$$.toLowerCase()) {
      case "red":
        return 0;
      case "orange":
        return 1;
      case "yellow":
        return 2;
      case "green":
        return 3;
      case "blue":
        return 4;
      case "purple":
        return 5;
      case "brown":
        return 6;
      case "gray":
        return 7;
      case "white":
        return 9;
      default:
        return-1
    }
  }, selectChipset:function $this$marquee$selectChipset$($i$$, $isOneCoatColorFamily$$) {
    if($isOneCoatColorFamily$$) {
      var $cs$$10_csi$$ = this.display.find(".chipsets > .chipset");
      "first" === $i$$ ? $i$$ = 0 : "last" === $i$$ && ($i$$ = $cs$$10_csi$$.length - 1);
      this.swatchSelector.css("top", 46 * $i$$ + 1 + "px");
      this.swatchSelector.fadeIn(300);
      $cs$$10_csi$$ = $($cs$$10_csi$$[$i$$]);
      this.populateChips($cs$$10_csi$$);
      this.currentIndex = $i$$
    }else {
      $cs$$10_csi$$ = this.display.find(".chipset"), $cs$$10_csi$$.removeClass("active"), $cs$$10_csi$$ = $($cs$$10_csi$$[$i$$]), $cs$$10_csi$$.addClass("active"), this.swatchSelector.css("top", 82 * $i$$ + 7 - $i$$ + "px"), this.populateChips($(this.display.find(".chipsets .chipset")[$i$$]))
    }
    this.swatchSelector.html($cs$$10_csi$$.clone())
  }, populateChips:function $this$marquee$populateChips$($chipset$$) {
    var $obj$$ = this, $chips$$6_s$$ = this.display.find(".chips");
    $chips$$6_s$$.html("");
    $chipset$$ = $chipset$$.clone();
    $chips$$6_s$$.append($chipset$$);
    var $bg$$ = $chipset$$.find(".bg").text();
    $chips$$6_s$$.css("background-image", "url(" + $bg$$ + ")");
    $chips$$6_s$$ = $chipset$$.find(".swatch");
    $chips$$6_s$$.on("mouseup", function($color$$62_e$$) {
      $color$$62_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$62_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chips$$6_s$$.on("mouseover", function($e$$197_t$$) {
      $e$$197_t$$ = $(this);
      showTooltip($e$$197_t$$.find(".name").text(), $e$$197_t$$.find(".id").text(), $e$$197_t$$)
    });
    $chips$$6_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chips$$6_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    });
    $chipset$$.find("span").remove()
  }, populateOneCoatFamilyChipsets:function $this$marquee$populateOneCoatFamilyChipsets$($color$$, $index$$0$$, $disableAnimation$$) {
    function $delayedRenderChipset$$($group$$, $index$$, $selected$$, $c$$) {
      setTimeout(function() {
        $renderChipset$$($group$$, $index$$, $selected$$, $c$$)
      }, 80 * $index$$)
    }
    function $renderChipset$$($group$$, $index$$, $selected$$, $c$$36_chipset$$) {
      if($obj$$.currentColor == $c$$36_chipset$$) {
        $c$$36_chipset$$ = $("<div class='chipset'><table><tr><td></td></tr></table></div>");
        for(var $td$$ = $c$$36_chipset$$.find("td"), $r$$ = 0;$r$$ < $group$$.length;$r$$++) {
          var $swatches$$ = $group$$[$r$$].split(","), $numColors$$ = 0, $tr$$ = $("<div></div>");
          $td$$.append($tr$$);
          for(var $s$$ = 0;$s$$ < $swatches$$.length;$s$$++) {
            var $color$$65_swatch$$ = colorLookup[$swatches$$[$s$$].trim()];
            $color$$65_swatch$$ && ($numColors$$++, $color$$65_swatch$$ = $("<div class='swatch' style='background-color:" + $color$$65_swatch$$.rgb + "'><div class='id'>" + $color$$65_swatch$$.id + "</div><div class='name'>" + $color$$65_swatch$$.name + "</div></div>"), $tr$$.append($color$$65_swatch$$))
          }
          $tr$$.append($("<div class='clear'></div>"))
        }
        $c$$36_chipset$$.on("mouseup", function($e$$200_set$$) {
          $e$$200_set$$ = $($e$$200_set$$.target);
          $e$$200_set$$.hasClass("chipset") || ($e$$200_set$$ = $e$$200_set$$.closest(".chipset"));
          $obj$$.selectChipset($e$$200_set$$.index() - 1, !0)
        });
        $chipsets$$.append($c$$36_chipset$$);
        $selected$$ && $obj$$.selectChipset($index$$, !0)
      }
    }
    var $obj$$ = this, $st$$ = this._getColor($color$$);
    if(6 > $color$$) {
      var $bottom$$2_i$$ = 5 < $color$$ + 1 ? this.colorCycle[0] : this.colorCycle[$color$$ + 1], $bottomImg$$1_fam$$2_numSwatches$$ = 5 < $color$$ + 1 ? this.colorCycleDoNotTranslate[0] : this.colorCycleDoNotTranslate[$color$$ + 1];
      this.upButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + (0 > $color$$ - 1 ? this.colorCycleDoNotTranslate[5] : this.colorCycleDoNotTranslate[$color$$ - 1]) + "_up.png'/> <span>" + (0 > $color$$ - 1 ? this.colorCycle[5] : this.colorCycle[$color$$ - 1]) + "</span>");
      this.downButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $bottomImg$$1_fam$$2_numSwatches$$ + "_down.png'/> <span>" + $bottom$$2_i$$ + "</span>");
      this.isColorCycle = !0
    }else {
      this.upButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $st$$ + "_up.png'/> <span>Cool</span>"), this.downButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $st$$ + "_down.png'/><span>Warm</span>"), this.isColorCycle = !1
    }
    this.currentColor = $color$$;
    $bottomImg$$1_fam$$2_numSwatches$$ = 9;
    for($bottom$$2_i$$ = 0;$bottom$$2_i$$ < _families.length;$bottom$$2_i$$++) {
      if($bottomImg$$1_fam$$2_numSwatches$$ = $oneCoatFamilies$$[$bottom$$2_i$$], $bottomImg$$1_fam$$2_numSwatches$$.name == $st$$) {
        var $chipsets$$ = this.display.find(".chipsets");
        $chipsets$$.html("");
        $chipsets$$.append(this.swatchSelector);
        var $groups$$ = $bottomImg$$1_fam$$2_numSwatches$$.groups, $bottomImg$$1_fam$$2_numSwatches$$ = $groups$$.length;
        void 0 === $index$$0$$ ? $index$$0$$ = parseInt($bottomImg$$1_fam$$2_numSwatches$$ / 2 - 0.5) : "first" === $index$$0$$ ? $index$$0$$ = 0 : "last" === $index$$0$$ && ($index$$0$$ = $bottomImg$$1_fam$$2_numSwatches$$ - 1);
        for(var $g$$ = 0;$g$$ < $bottomImg$$1_fam$$2_numSwatches$$;$g$$++) {
          var $group$$0$$ = $groups$$[$g$$];
          $disableAnimation$$ ? $renderChipset$$($group$$0$$, $g$$, $g$$ == $index$$0$$, $color$$) : $delayedRenderChipset$$($group$$0$$, $g$$, $g$$ == $index$$0$$, $color$$)
        }
      }
    }
  }, populateChipsets:function $this$marquee$populateChipsets$($aa_list$$4_region$$) {
    var $columns$$2_title$$ = this.display.find(".columns"), $category$$3_chipsets$$ = this.display.find(".category"), $obj$$ = this;
    if("marqueecollection" == $aa_list$$4_region$$) {
      $(".ColorBrowser .marquee .chipsets").css("background", "url(/cma/vz/vis/decorator_bg.png)");
      $(".ColorBrowser .marquee .chipsets").css("border-top", "1px solid #dcdada;");
      $columns$$2_title$$.show();
      $category$$3_chipsets$$.hide();
      $category$$3_chipsets$$ = this.display.find(".chipsets");
      $category$$3_chipsets$$.html("");
      for(var $bg$$6_classes$$5_color$$ = $columns$$2_title$$.attr("class").split(/\s+/), $i$$0$$ = 0;$i$$0$$ < $bg$$6_classes$$5_color$$.length;$i$$0$$++) {
        "columns" != $bg$$6_classes$$5_color$$[$i$$0$$] && $columns$$2_title$$.removeClass($bg$$6_classes$$5_color$$[$i$$0$$])
      }
      $columns$$2_title$$.addClass($aa_list$$4_region$$);
      $aa_list$$4_region$$ = _marquee[$aa_list$$4_region$$];
      for($i$$0$$ = 0;$i$$0$$ < $aa_list$$4_region$$.length;$i$$0$$++) {
        var $chips$$7_dec$$ = $aa_list$$4_region$$[$i$$0$$], $bg$$6_classes$$5_color$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$7_dec$$.bg, $columns$$2_title$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$7_dec$$.title, $chips$$7_dec$$ = $chips$$7_dec$$.group.split(","), $chipset$$ = $("<div class='chipset'></div>");
        $chipset$$.append("<div class='bg'>" + $bg$$6_classes$$5_color$$ + "</div>");
        for(var $s$$ = 0;$s$$ < $chips$$7_dec$$.length;$s$$++) {
          var $c$$37_swatch$$ = $chips$$7_dec$$[$s$$].trim();
          ($bg$$6_classes$$5_color$$ = colorLookup[$c$$37_swatch$$]) || ($bg$$6_classes$$5_color$$ = colorLookup[$c$$37_swatch$$]);
          $bg$$6_classes$$5_color$$ ? ($c$$37_swatch$$ = $("<div class='swatch'><div class='id'>" + $bg$$6_classes$$5_color$$.id + "</div><div class='name'>" + $bg$$6_classes$$5_color$$.name + "</div></div>"), $c$$37_swatch$$.css("background-color", $bg$$6_classes$$5_color$$.rgb)) : $c$$37_swatch$$ = $("<div class='emptyswatch'><div class='id'></div><div class='name'></div></div>");
          $chipset$$.append($c$$37_swatch$$)
        }
        $chipset$$.append("<img src='" + $columns$$2_title$$ + "'/>");
        $chipset$$.on("mouseup", function($e$$201_set$$) {
          $e$$201_set$$ = $($e$$201_set$$.target);
          $e$$201_set$$.hasClass("chipset") || ($e$$201_set$$ = $e$$201_set$$.parent());
          $obj$$.selectChipset($e$$201_set$$.index())
        });
        $category$$3_chipsets$$.append($chipset$$)
      }
      $category$$3_chipsets$$.append(this.swatchSelector)
    }else {
      if("oneCoatFamilies" == $aa_list$$4_region$$) {
        $(".ColorBrowser .marquee .chipsets").css("background", "url(/cma/vz/vis/family_bg.png)");
        $(".ColorBrowser .marquee .chipsets").css("border-top", "0px solid #dcdada");
        $columns$$2_title$$.show();
        $category$$3_chipsets$$.hide();
        $category$$3_chipsets$$ = this.display.find(".chipsets");
        $category$$3_chipsets$$.html("");
        $bg$$6_classes$$5_color$$ = $columns$$2_title$$.attr("class").split(/\s+/);
        for($i$$0$$ = 0;$i$$0$$ < $bg$$6_classes$$5_color$$.length;$i$$0$$++) {
          "columns" != $bg$$6_classes$$5_color$$[$i$$0$$] && $columns$$2_title$$.removeClass($bg$$6_classes$$5_color$$[$i$$0$$])
        }
        $columns$$2_title$$.addClass($aa_list$$4_region$$);
        $aa_list$$4_region$$ = $oneCoatFamilies$$ = _marquee[$aa_list$$4_region$$];
        $obj$$.selectColor(0)
      }else {
        $columns$$2_title$$.hide();
        $category$$3_chipsets$$.show();
        $category$$3_chipsets$$.html("");
        $aa_list$$4_region$$ = _marquee;
        for($i$$0$$ = 0;$i$$0$$ < $aa_list$$4_region$$.length;$i$$0$$++) {
          $bg$$6_classes$$5_color$$ = colorLookup[$aa_list$$4_region$$[$i$$0$$].trim()], $bg$$6_classes$$5_color$$.marquee = !0, $bg$$6_classes$$5_color$$.name = $bg$$6_classes$$5_color$$.name, $bg$$6_classes$$5_color$$ ? ($c$$37_swatch$$ = $("<div class='swatch'><div class='id'>" + $bg$$6_classes$$5_color$$.id + "</div><div class='name'>" + $bg$$6_classes$$5_color$$.name + "</div></div>"), $c$$37_swatch$$.css("background-color", $bg$$6_classes$$5_color$$.rgb), $category$$3_chipsets$$.append($c$$37_swatch$$)) : 
          console.info("missing: " + $aa_list$$4_region$$[$i$$0$$])
        }
        $category$$3_chipsets$$.append("<div class='clear'></div>");
        $s$$ = $category$$3_chipsets$$.find(".swatch");
        $s$$.on("mouseup", function($color$$67_e$$) {
          $color$$67_e$$ = colorLookup[$(this).find(".id").text()];
          var $o$$ = {};
          $o$$.color = $color$$67_e$$;
          $o$$.roomType = "marquee";
          $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
        });
        $s$$.on("mouseover", function($e$$203_t$$) {
          $e$$203_t$$ = $(this);
          showTooltip($e$$203_t$$.find(".name").text(), $e$$203_t$$.find(".id").text(), $e$$203_t$$)
        });
        $s$$.on("mouseout", function($e$$) {
          hideTooltip()
        });
        $s$$.each(function($i$$, $e$$) {
          var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
          $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
            dragOp.startDrag($data$$)
          }, stop:function() {
            dragOp.stopDrag()
          }}).data("src", $data$$)
        })
      }
    }
  }, init:function $this$marquee$init$($fam$$3_parent$$) {
    var $obj$$ = this;
    this.browser = $fam$$3_parent$$;
    $fam$$3_parent$$ = this.display = $fam$$3_parent$$.display.find(".marquee");
    this.colorSelector = $fam$$3_parent$$.find(".colors .selected");
    this.upButton = this.display.find(".up .button span");
    this.downButton = this.display.find(".down .button span");
    this.upButtonClk = this.display.find("#outerbtnup");
    this.downButtonClk = this.display.find("#outerbtndwn");
    $fam$$3_parent$$.find(".color .rep").on("click", function($e$$206_rep$$) {
      $e$$206_rep$$ = $($e$$206_rep$$.target).parent();
      $obj$$.selectColor($e$$206_rep$$.index())
    });
    this.upButtonClk.on("click", function($e$$) {
      $obj$$.up()
    });
    this.downButtonClk.on("click", function($e$$) {
      $obj$$.down()
    });
    this.defaultColor = -1;
    $params$$0$$ && $params$$0$$.family && (this.defaultColor = this._getColorIndex($params$$0$$.family), 0 > this.defaultColor && (this.defaultColor = -1));
    this.swatchSelector = this.display.find(".chipsets .selected");
    this.populateChipsets("marqueecollection");
    this.selectChipset(0);
    var $options$$ = this.display.find(".set");
    $($options$$[0]).on("click", function() {
      $obj$$.section = "marqueecollection";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0);
      $($options$$[1]).parent().removeClass("active");
      $($options$$[0]).parent().addClass("active")
    });
    $($options$$[1]).on("click", function() {
      $obj$$.selectSection("oneCoatFamilies", "1")
    });
    this.display.find(".btnOneCoatLearnMore").unbind().bind("click", function() {
      showModal(oneCoat)
    })
  }};
  this.search = {browser:null, display:null, input:null, inputInitialized:!1, inputHelpMessage:"", chipTemplate:null, chips:null, cache:[], previousTerm:"", resultMessage:"", addChip:function $this$search$addChip$($color$$) {
    var $chip$$ = this.chipTemplate.clone(), $swatch$$ = $chip$$.find(".swatch");
    $swatch$$.css("background-color", $color$$.rgb);
    $chip$$.find(".name").html($color$$.name);
    $chip$$.find(".id").text($color$$.id);
    var $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
    $chip$$.draggable({revert:!0, revertDuration:50, distance:14, helper:function() {
      return $swatch$$.clone()
    }, scroll:!1, cursorAt:{top:22, left:22}, start:function() {
      dragOp.startDrag($data$$)
    }, stop:function() {
      dragOp.stopDrag()
    }}).data("src", $data$$);
    this.chips.append($chip$$)
  }, colorReplace:function $this$search$colorReplace$($colorToReplace$$) {
    return{"PPU1-1":"PPU1-01", "PPU1-2":"PPU1-02", "PPU1-3":"PPU1-03", "PPU1-4":"PPU1-04A", "PPU1-4A":"PPU1-04A", "PPU1-5":"PPU1-05A", "PPU1-5A":"PPU1-05A", "PPU1-6":"PPU1-06", "PPU1-7":"PPU1-07", "PPU1-8":"PPU1-08", "PPU1-9":"PPU1-09", "PPU2-1":"PPU2-01", "PPU2-2":"PPU2-02", "PPU2-3":"PPU2-03", "PPU2-4":"PPU2-04", "PPU2-5":"PPU2-05", "PPU2-6":"PPU2-06", "PPU2-7":"PPU2-07", "PPU2-8":"PPU2-08", "PPU2-9":"PPU2-09", "PPU3-1":"PPU3-01", "PPU3-2":"PPU3-02", "PPU3-3":"PPU3-03", "PPU3-4":"PPU3-04", "PPU3-5":"PPU3-05", 
    "PPU3-6":"PPU3-06", "PPU3-7":"PPU3-07", "PPU3-8":"PPU3-08", "PPU3-9":"PPU3-09", "PPU4-1":"PPU4-01", "PPU4-2":"PPU4-02", "PPU4-3":"PPU4-03", "PPU4-4":"PPU4-04", "PPU4-5":"PPU4-05", "PPU4-6":"PPU4-06", "PPU4-7":"PPU4-07", "PPU4-8":"PPU4-08", "PPU4-9":"PPU4-09", "PPU5-1":"PPU5-01", "PPU5-2":"PPU5-02", "PPU5-3":"PPU5-03", "PPU5-4":"PPU5-04", "PPU5-5":"PPU5-05", "PPU5-6":"PPU5-06", "PPU5-7":"PPU5-07", "PPU5-8":"PPU5-08", "PPU5-9":"PPU5-09", "PPU6-1":"PPU6-01", "PPU6-2":"PPU6-02", "PPU6-3":"PPU6-03", 
    "PPU6-4":"PPU6-04", "PPU6-5":"PPU6-05", "PPU6-6":"PPU6-06", "PPU6-7":"PPU6-07", "PPU6-8":"PPU6-08", "PPU6-9":"PPU6-09", "PPU7-1":"PPU7-01", "PPU7-2":"PPU7-02", "PPU7-3":"PPU7-03A", "PPU7-3A":"PPU7-03A", "PPU7-4":"PPU7-04", "PPU7-5":"PPU7-05", "PPU7-6":"PPU7-06", "PPU7-7":"PPU7-07", "PPU7-8":"PPU7-08", "PPU7-9":"PPU7-09", "PPU8-1":"PPU8-01", "PPU8-2":"PPU8-02", "PPU8-3":"PPU8-03", "PPU8-4":"PPU8-04", "PPU8-5":"PPU8-05", "PPU8-6":"PPU8-06", "PPU8-7":"PPU8-07", "PPU8-8":"PPU8-08", "PPU8-9":"PPU8-09", 
    "PPU9-1":"PPU9-01", "PPU9-2":"PPU9-02", "PPU9-3":"PPU9-03", "PPU9-4":"PPU9-04", "PPU9-5":"PPU9-05", "PPU9-6":"PPU9-06", "PPU9-7":"PPU9-07", "PPU9-8":"PPU9-08", "PPU9-9":"PPU9-09", "PPU10-1":"PPU10-01", "PPU10-2":"PPU10-02", "PPU10-3":"PPU10-03", "PPU10-4":"PPU10-04", "PPU10-5":"PPU10-05", "PPU10-6":"PPU10-06", "PPU10-7":"PPU10-07", "PPU10-8":"PPU10-08", "PPU10-9":"PPU10-09", "PPU11-1":"PPU11-01", "PPU11-2":"PPU11-02", "PPU11-3":"PPU11-03", "PPU11-4":"PPU11-04", "PPU11-5":"PPU11-05", "PPU11-6":"PPU11-06", 
    "PPU11-7":"PPU11-07", "PPU11-8":"PPU11-08", "PPU11-9":"PPU11-09", "PPU12-1":"PPU12-01", "PPU12-2":"PPU12-02", "PPU12-3":"PPU12-03", "PPU12-4":"PPU12-04", "PPU12-5":"PPU12-05", "PPU12-6":"PPU12-06", "PPU12-7":"PPU12-07", "PPU12-8":"PPU12-08", "PPU12-9":"PPU12-09", "PPU13-1":"PPU13-01", "PPU13-2":"PPU13-02", "PPU13-3":"PPU13-03", "PPU13-4":"PPU13-04", "PPU13-5":"PPU13-05", "PPU13-6":"PPU13-06", "PPU13-7":"PPU13-07", "PPU13-8":"PPU13-08", "PPU13-9":"PPU13-09", "PPU14-1":"PPU14-01", "PPU14-2":"PPU14-02", 
    "PPU14-3":"PPU14-03", "PPU14-4":"PPU14-04", "PPU14-5":"PPU14-05", "PPU14-6":"PPU14-06", "PPU14-7":"PPU14-07", "PPU14-8":"PPU14-08", "PPU14-9":"PPU14-09", "PPU15-1":"PPU15-01", "PPU15-2":"PPU15-02", "PPU15-3":"PPU15-03", "PPU15-4":"PPU15-04", "PPU15-5":"PPU15-05", "PPU15-6":"PPU15-06", "PPU15-7":"PPU15-07", "PPU15-8":"PPU15-08", "PPU15-9":"PPU15-09", "PPU16-1":"PPU16-01", "PPU16-2":"PPU16-02", "PPU16-3":"PPU16-03", "PPU16-4":"PPU16-04", "PPU16-5":"PPU16-05", "PPU16-6":"PPU16-06", "PPU16-7":"PPU16-07", 
    "PPU16-8":"PPU16-08", "PPU16-9":"PPU16-09", "PPU17-1":"PPU17-01", "PPU17-2":"PPU17-02", "PPU17-3":"PPU17-03", "PPU17-4":"PPU17-04", "PPU17-5":"PPU17-05", "PPU17-6":"PPU17-06", "PPU17-7":"PPU17-07", "PPU17-8":"PPU17-08", "PPU17-9":"PPU17-09", "PPU18-1":"PPU18-01", "PPU18-2":"PPU18-02", "PPU18-3":"PPU18-03", "PPU18-4":"PPU18-04", "PPU18-5":"PPU18-05", "PPU18-6":"PPU18-06", "PPU18-7":"PPU18-07", "PPU18-8":"PPU18-08", "PPU18-9":"PPU18-09", "MQ1-1":"MQ1-01", "MQ1-2":"MQ1-02", "MQ1-3":"MQ1-03", "MQ1-4":"MQ1-04", 
    "MQ1-5":"MQ1-05", "MQ1-6":"MQ1-06", "MQ1-7":"MQ1-07", "MQ1-8":"MQ1-08", "MQ1-9":"MQ1-09", "MQ2-1":"MQ2-01", "MQ2-2":"MQ2-02", "MQ2-3":"MQ2-03", "MQ2-4":"MQ2-04", "MQ2-5":"MQ2-05", "MQ2-6":"MQ2-06", "MQ2-7":"MQ2-07", "MQ2-8":"MQ2-08", "MQ2-9":"MQ2-09", "MQ3-1":"MQ3-01", "MQ3-2":"MQ3-02", "MQ3-3":"MQ3-03", "MQ3-4":"MQ3-04", "MQ3-5":"MQ3-05", "MQ3-6":"MQ3-06", "MQ3-7":"MQ3-07", "MQ3-8":"MQ3-08", "MQ3-9":"MQ3-09", "MQ4-1":"MQ4-01", "MQ4-2":"MQ4-02", "MQ4-3":"MQ4-03", "MQ4-4":"MQ4-04", "MQ4-5":"MQ4-05", 
    "MQ4-6":"MQ4-06", "MQ4-7":"MQ4-07", "MQ4-8":"MQ4-08", "MQ4-9":"MQ4-09", "MQ5-1":"MQ5-01", "MQ5-2":"MQ5-02", "MQ5-3":"MQ5-03", "MQ5-4":"MQ5-04", "MQ5-5":"MQ5-05", "MQ5-6":"MQ5-06", "MQ5-7":"MQ5-07", "MQ5-8":"MQ5-08", "MQ5-9":"MQ5-09", "MQ6-1":"MQ6-01", "MQ6-2":"MQ6-02", "MQ6-3":"MQ6-03", "MQ6-4":"MQ6-04", "MQ6-5":"MQ6-05", "MQ6-6":"MQ6-06", "MQ6-7":"MQ6-07", "MQ6-8":"MQ6-08", "MQ6-9":"MQ6-09", "BL-W1":"BL-W01", "BL-W2":"BL-W02", "BL-W3":"BL-W03", "BL-W4":"BL-W04", "BL-W5":"BL-W05", "BL-W6":"BL-W06", 
    "BL-W7":"BL-W07", "BL-W8":"BL-W08", "BL-W9":"BL-W09", "GR-W1":"GR-W01", "GR-W2":"GR-W02", "GR-W3":"GR-W03", "GR-W4":"GR-W04", "GR-W5":"GR-W05", "GR-W6":"GR-W06", "GR-W7":"GR-W07", "GR-W8":"GR-W08", "GR-W9":"GR-W09", "OR-W1":"OR-W01", "OR-W2":"OR-W02", "OR-W3":"OR-W03", "OR-W4":"OR-W04", "OR-W5":"OR-W05", "OR-W6":"OR-W06", "OR-W7":"OR-W07", "OR-W8":"OR-W08", "PR-W1":"PR-W01", "PR-W2":"PR-W02", "PR-W3":"PR-W03", "PR-W4":"PR-W04", "PR-W5":"PR-W05", "PR-W6":"PR-W06", "PR-W7":"PR-W07", "PR-W8":"PR-W08", 
    "PR-W9":"PR-W09", "RD-W1":"RD-W01", "RD-W2":"RD-W02", "RD-W3":"RD-W03", "RD-W4":"RD-W04", "RD-W5":"RD-W05", "RD-W6":"RD-W06", "RD-W7":"RD-W07", "RD-W8":"RD-W08", "RD-W9":"RD-W09", "YL-W1":"YL-W01", "YL-W2":"YL-W02", "YL-W3":"YL-W03", "YL-W7":"YL-W07", "YL-W8":"YL-W08", "YL-W9":"YL-W09"}[$colorToReplace$$]
  }, search:function $this$search$search$($r$$) {
    var $searchGroup$$ = colorLookup, $repcolorid_term$$1_x$$ = this.input.val(), $obj$$ = this;
    this.chips.html("");
    if("BehrChip" === $r$$) {
      if(2 > $repcolorid_term$$1_x$$.length) {
        return
      }
      "" != this.previousTerm && 0 <= $repcolorid_term$$1_x$$.indexOf(this.previousTerm) && ($searchGroup$$ = this.cache);
      this.previousTerm = $repcolorid_term$$1_x$$;
      $r$$ = ColorUtilities.search($repcolorid_term$$1_x$$, $searchGroup$$);
      void 0 !== this.colorReplace($repcolorid_term$$1_x$$.toUpperCase()) && ($repcolorid_term$$1_x$$ = this.colorReplace($repcolorid_term$$1_x$$.toUpperCase()), $r$$.push(colorLookup[$repcolorid_term$$1_x$$]))
    }else {
      this.inputInitialized = !1, $r$$ = ColorUtilities.brochure($r$$, $searchGroup$$)
    }
    this.cache = $r$$;
    if(0 < $r$$.length) {
      for($repcolorid_term$$1_x$$ = 0;$repcolorid_term$$1_x$$ < $r$$.length;$repcolorid_term$$1_x$$++) {
        color = $r$$[$repcolorid_term$$1_x$$], this.addChip(color)
      }
      this.display.find(".results .count").text(this.cache.length);
      this.display.find(".results .msg").text(this.resultMessage);
      this.chips.find(".chip").on("click", function($color$$70_e$$) {
        $color$$70_e$$ = colorLookup[$(this).find(".id").text()];
        var $o$$ = {};
        $o$$.color = $color$$70_e$$;
        $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
      })
    }else {
      this.showNoResultsMessage()
    }
  }, showNoResultsMessage:function $this$search$showNoResultsMessage$() {
    this.display.find(".results .count").text("");
    0 < this.input.val().length && this.input.val() != this.inputHelpMessage ? this.display.find(".results .msg").text("Sorry! We are unable to find a match to your color search. Please try your search again.") : this.display.find(".results .msg").text("")
  }, initInput:function $this$search$initInput$($initialize$$) {
    $initialize$$ ? this.inputInitialized || (this.input.addClass("init"), this.input.val("")) : this.inputInitialized && (this.input.removeClass("init"), this.input.val(this.inputHelpMessage));
    this.inputInitialized = $initialize$$
  }, init:function $this$search$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".search");
    this.input = this.display.find(".searchText");
    this.chips = this.display.find(".chips");
    this.chipTemplate = this.chips.find(".chip");
    this.chipTemplate.remove();
    this.inputHelpMessage = this.input.val();
    this.brochure = this.display.find(".selectbro");
    this.radio = this.display.find(".radio");
    this.whtimg = this.display.find(".imgBrochureWht");
    this.gryimg = this.display.find(".imgBrochureGry");
    this.extimg = this.display.find(".imgBrochureExt");
    this.intimg = this.display.find(".imgBrochureInt");
    this.resultMessage = this.display.find(".results .msg").text();
    this.showNoResultsMessage();
    this.input.on("focus", function() {
      $obj$$.initInput(!0)
    });
    this.input.on("focusout", function() {
      "" == $obj$$.input.val() && ($obj$$.initInput(!1), $obj$$.showNoResultsMessage())
    });
    this.display.find(".btnSearch").on("click", function() {
      $obj$$.brochure.val("BehrDef");
      $obj$$.search("BehrChip")
    });
    this.input.on("change keyup", function() {
      $obj$$.radio.prop("disabled", !1);
      $obj$$.brochure.val("BehrDef");
      $obj$$.extimg.hide();
      $obj$$.intimg.hide();
      $obj$$.whtimg.hide();
      $obj$$.gryimg.hide();
      $obj$$.search("BehrChip")
    });
    this.radio.on("change", function() {
      "BehrDef" === $obj$$.brochure.val() && $obj$$.search("BehrChip")
    });
    this.brochure.change(function() {
      $obj$$.radio[1].checked = !0;
      $obj$$.radio.prop("disabled", !0);
      $obj$$.input.val($obj$$.inputHelpMessage);
      switch($obj$$.brochure.val()) {
        case "BehrDef":
          $obj$$.extimg.hide();
          $obj$$.intimg.hide();
          $obj$$.whtimg.hide();
          $obj$$.gryimg.hide();
          break;
        case "BehrWhtNeu":
          $obj$$.extimg.hide();
          $obj$$.intimg.hide();
          $obj$$.whtimg.show();
          $obj$$.gryimg.hide();
          break;
        case "BehrGry":
          $obj$$.extimg.hide();
          $obj$$.intimg.hide();
          $obj$$.whtimg.hide();
          $obj$$.gryimg.show();
          break;
        case "BehrExt":
          $obj$$.whtimg.hide();
          $obj$$.gryimg.hide();
          $obj$$.intimg.hide();
          $obj$$.extimg.show();
          break;
        case "BehrInt":
          $obj$$.whtimg.hide(), $obj$$.gryimg.hide(), $obj$$.extimg.hide(), $obj$$.intimg.show()
      }
      "BehrDef" === $obj$$.brochure.val() ? $obj$$.search("BehrChip") : $obj$$.search($obj$$.brochure.val())
    })
  }};
  this.saved = {browser:null, display:null, chipTemplate:null, chips:null, emptyMessage:null, addChip:function $this$saved$addChip$($color$$) {
    this.emptyMessage.remove();
    var $chip$$ = this.chipTemplate.clone(), $swatch$$ = $chip$$.find(".swatch");
    $swatch$$.css("background-color", $color$$.rgb);
    $chip$$.find(".name").html($color$$.name);
    $chip$$.find(".id").text($color$$.id);
    this.chips.append($chip$$);
    var $obj$$ = this;
    $chip$$.on("click", function($color$$72_e$$) {
      $color$$72_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$72_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chip$$.find(".close").on("click", function($e$$211_id$$17_p$$) {
      $e$$211_id$$17_p$$.stopPropagation();
      $e$$211_id$$17_p$$ = $(this).parent();
      $e$$211_id$$17_p$$.remove();
      $e$$211_id$$17_p$$ = $e$$211_id$$17_p$$.find(".id").text();
      userSession.removeFavoriteColor(colorLookup[$e$$211_id$$17_p$$]);
      0 === $obj$$.chips.find(".chip").length && $obj$$.chips.append($obj$$.emptyMessage)
    });
    var $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
    $chip$$.draggable({revert:!0, revertDuration:50, distance:14, helper:function() {
      return $swatch$$.clone()
    }, scroll:!1, cursorAt:{top:22, left:22}, start:function() {
      dragOp.startDrag($data$$)
    }, stop:function() {
      dragOp.stopDrag()
    }}).data("src", $data$$)
  }, showColors:function $this$saved$showColors$($colors$$) {
    this.chips.html("");
    0 === $colors$$.length && this.chips.append(this.emptyMessage);
    for(var $x$$ = 0;$x$$ < $colors$$.length;$x$$++) {
      color = $colors$$[$x$$], this.addChip(color)
    }
  }, init:function $this$saved$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".saved");
    this.emptyMessage = this.display.find(".emptyMessage");
    this.chips = this.display.find(".chips");
    this.chipTemplate = this.chips.find(".chip");
    this.chipTemplate.remove();
    userSession.bind(UserSession.ON_SAVED_COLOR_ADDED, function($e$$) {
      if($e$$.color) {
        $obj$$.addChip($e$$.color)
      }else {
        if($e$$.colors) {
          for(var $i$$ = 0;$i$$ < $e$$.colors.length;$i$$++) {
            $obj$$.addChip($e$$.colors[$i$$])
          }
        }
      }
    })
  }};
  this.selectTab = function $this$selectTab$($i$$) {
    this.tabs = this.display.find(".tabs li");
    var $groups$$2_tab$$ = $(this.tabs[$i$$]);
    this.tabs.removeClass("active");
    $groups$$2_tab$$.addClass("active");
    $groups$$2_tab$$.append(this.tabCarat);
    $groups$$2_tab$$ = this.display.find(".groups > div");
    $groups$$2_tab$$.hide();
    $($groups$$2_tab$$[$i$$]).show();
    $("#sort_radio").show()
  };
  this.init = function $this$init$($params$$) {
    var $colorset$$ = getParameterByName("colorset"), $index$$ = 0, $i$$;
    for($i$$ in colorLookup) {
      $index$$++
    }
    var $obj$$ = this;
    this.display = loadModuleDisplay("ColorBrowser");
    this.tabCarat = this.display.find(".tabs .carat");
    this.display.find(".tabs li span").on("click", function($e$$213_index$$) {
      $e$$213_index$$ = $($e$$213_index$$.target).parent().index();
      if(5 == $e$$213_index$$) {
        $obj$$.chips = $obj$$.display.find(".chips");
        $obj$$.chipTemplate = $obj$$.chips.find(".chip");
        $obj$$.chipTemplate.remove();
        var $userData$$1_userId$$ = getCookie("mybehr_id");
        $userData$$1_userId$$ || ($userData$$1_userId$$ = getCookie("userData"), null != $userData$$1_userId$$ && eval("userData = " + $userData$$1_userId$$));
        userSession.loadUserData($userData$$1_userId$$)
      }
      $obj$$.selectTab($e$$213_index$$)
    });
    this.deepLink = function $this$deepLink$() {
      if($colorset$$) {
        var $_tab$$ = $colorset$$.split("_"), $TAB_INDEX$$ = 0;
        switch($_tab$$[0].toLowerCase()) {
          case "colorfamily":
            $TAB_INDEX$$ = 0;
            break;
          case "marquee":
            $TAB_INDEX$$ = 1;
            break;
          case "decorator":
            $TAB_INDEX$$ = 2;
            break;
          case "popular":
            $TAB_INDEX$$ = 3;
            break;
          case "search":
            $TAB_INDEX$$ = 4
        }
        setTimeout(function() {
          $obj$$.selectTab($TAB_INDEX$$)
        }, 10);
        var $_option$$ = $_tab$$[1] ? $_tab$$[1].toLowerCase() : "", $_chipset$$ = $_tab$$[2] ? $_tab$$[2].toLowerCase() : "";
        switch($_tab$$[0].toLowerCase()) {
          case "colorfamily":
            var $COLOR_INDEX$$ = 0, $COLOR_INDEX$$ = "red" == $_option$$ ? 0 : "orange" == $_option$$ ? 1 : "yellow" == $_option$$ ? 2 : "green" == $_option$$ ? 3 : "blue" == $_option$$ ? 4 : "purple" == $_option$$ ? 5 : "brown" == $_option$$ ? 6 : "gray" == $_option$$ ? 7 : "white" == $_option$$ ? 8 : 0, $c$$ = this.display.find(".family").find(".color .rep");
            setTimeout(function() {
              $($c$$[$COLOR_INDEX$$]).trigger("click")
            }, 10);
            break;
          case "marquee":
            "interioronecoat" == $_option$$ ? (this.display.find("div#marquee_onecoat").trigger("click"), $COLOR_INDEX$$ = "reds" == $_chipset$$ || "red" == $_chipset$$ ? 0 : "oranges" == $_chipset$$ || "orange" == $_chipset$$ ? 1 : "yellows" == $_chipset$$ || "yellow" == $_chipset$$ ? 2 : "greens" == $_chipset$$ || "green" == $_chipset$$ ? 3 : "blues" == $_chipset$$ || "blue" == $_chipset$$ ? 4 : "purples" == $_chipset$$ || "purple" == $_chipset$$ ? 5 : "browns" == $_chipset$$ || "brown" == $_chipset$$ ? 
            6 : "grays" == $_chipset$$ || "gray" == $_chipset$$ ? 7 : "whites" == $_chipset$$ || "white" == $_chipset$$ ? 8 : 0, $c$$ = this.display.find(".marquee").find(".color .rep"), setTimeout(function() {
              0 < $COLOR_INDEX$$ && $($c$$[$COLOR_INDEX$$]).trigger("click")
            }, 10)) : "dynasty" == $_chipset$$ ? this.marquee.selectChipset(0) : "fundamentals" == $_chipset$$ ? this.marquee.selectChipset(1) : "lights" == $_chipset$$ ? this.marquee.selectChipset(2) : "odyssey" == $_chipset$$ ? this.marquee.selectChipset(3) : "opulence" == $_chipset$$ ? this.marquee.selectChipset(4) : "rejuvenation" == $_chipset$$ ? this.marquee.selectChipset(5) : this.marquee.selectChipset(0);
            break;
          case "decorator":
            "hdc" == $_option$$ && (this.display.find("div#decorator_home").trigger("click"), "neutral" == $_chipset$$ ? this.decorator.selectChipset(0) : "modern" == $_chipset$$ ? this.decorator.selectChipset(1) : "cottage" == $_chipset$$ ? this.decorator.selectChipset(2) : "artscrafts" == $_chipset$$ ? this.decorator.selectChipset(3) : "classic" == $_chipset$$ ? this.decorator.selectChipset(4) : this.decorator.selectChipset(0));
            break;
          case "popular":
            "trends" == $_option$$ ? (this.display.find("div#browse_popular_trends_2016").trigger("click"), "deepdreamspalette" == $_chipset$$ ? this.popular.selectChipset(0) : "frostedpastelspalette" == $_chipset$$ ? this.popular.selectChipset(1) : "socialbrightspalette" == $_chipset$$ ? this.popular.selectChipset(2) : "nuancedneutralspalette" == $_chipset$$ ? this.popular.selectChipset(3) : this.popular.selectChipset(0)) : "interior" == $_option$$ ? (this.display.find("div#browse_popular_interior").trigger("click"), 
            "bedroom" == $_chipset$$ ? this.popular.selectChipset(0) : "bathroom" == $_chipset$$ ? this.popular.selectChipset(1) : "kidsroom" == $_chipset$$ ? this.popular.selectChipset(2) : "livingroom" == $_chipset$$ ? this.popular.selectChipset(3) : "kitchen" == $_chipset$$ ? this.popular.selectChipset(4) : "dining" == $_chipset$$ ? this.popular.selectChipset(5) : "office" == $_chipset$$ ? this.popular.selectChipset(6) : this.popular.selectChipset(0)) : "exterior" == $_option$$ ? (this.display.find("div#browse_popular_exterior").trigger("click"), 
            "pacific" == $_chipset$$ ? this.popular.selectChipset(0) : "southwest" == $_chipset$$ ? this.popular.selectChipset(1) : "mountain" == $_chipset$$ ? this.popular.selectChipset(2) : "midwest" == $_chipset$$ ? this.popular.selectChipset(3) : "northeast" == $_chipset$$ ? this.popular.selectChipset(4) : "southeast" == $_chipset$$ ? this.popular.selectChipset(5) : this.popular.selectChipset(0)) : "family" == $_option$$ && (this.display.find("div#browse_popular_hue").trigger("click"), "red" == 
            $_chipset$$ ? this.popular.selectChipset(0) : "orange" == $_chipset$$ ? this.popular.selectChipset(1) : "yellow" == $_chipset$$ ? this.popular.selectChipset(2) : "green" == $_chipset$$ ? this.popular.selectChipset(3) : "blue" == $_chipset$$ ? this.popular.selectChipset(4) : "purple" == $_chipset$$ ? this.popular.selectChipset(5) : "gray" == $_chipset$$ ? this.popular.selectChipset(6) : "brown" == $_chipset$$ ? this.popular.selectChipset(7) : "white" == $_chipset$$ ? this.popular.selectChipset(8) : 
            this.popular.selectChipset(0));
            break;
          case "search":
            if("undefined" !== $_option$$) {
              $c$$ = this.display.find("#searchTxt");
              $c$$.val($_option$$);
              var $d$$ = this.display.find(".btnSearch");
              console.info("The c.val(): " + $c$$.val());
              setTimeout(function() {
                $d$$.trigger("click")
              }, 10)
            }
        }
      }
    };
    this.deepLink_ca = function $this$deepLink_ca$() {
      if("undefined" != typeof hashParam && "undefined" != hashParam) {
        marqueeIndx = {dynasty:0, fundamentals:1, lights:2, odyssey:3, opulence:4, rejuvenation:5};
        var $TAB_INDEX$$ = 0, $COLOR_INDEX$$ = -1, $c$$;
        switch(hashParam.toLowerCase()) {
          case "family":
            $COLOR_INDEX$$ = 0;
            break;
          case "reds":
          ;
          case "rouges":
            $COLOR_INDEX$$ = 0;
            break;
          case "purples":
          ;
          case "violets":
            $COLOR_INDEX$$ = 5;
            break;
          case "greens":
            $COLOR_INDEX$$ = 3;
            break;
          case "blues":
            $COLOR_INDEX$$ = 4;
            break;
          case "yellows":
            $COLOR_INDEX$$ = 2;
            break;
          case "oranges":
            $COLOR_INDEX$$ = 1;
            break;
          case "hdc_sprsum":
          ;
          case "hdc_print_ete":
            this.display.find("div#decorator_springsummer").trigger("click");
            $TAB_INDEX$$ = 2;
            break;
          case "popular":
            $TAB_INDEX$$ = 3;
            break;
          case "interioronecoatreds":
          ;
          case "interioronecoatoranges":
          ;
          case "interioronecoatyellows":
          ;
          case "interioronecoatgreens":
          ;
          case "interioronecoatblues":
          ;
          case "interioronecoatpurples":
          ;
          case "interioronecoatbrowns":
          ;
          case "interioronecoatgrays":
          ;
          case "interioronecoatwhites":
          ;
          case "marquee":
          ;
          case "dynasty":
          ;
          case "fundamentals":
          ;
          case "lights":
          ;
          case "odyssey":
          ;
          case "opulence":
          ;
          case "rejuvenation":
          ;
          case "marqueefr":
            $TAB_INDEX$$ = 1;
            break;
          case "blancsneutres":
          ;
          case "whitesneutrals":
          ;
          case "graysbro":
          ;
          case "interiors":
          ;
          case "interieurs":
          ;
          case "exteriors":
          ;
          case "exterieurs":
          ;
          case "search":
            $TAB_INDEX$$ = 4
        }
        setTimeout(function() {
          $obj$$.selectTab($TAB_INDEX$$)
        }, 10);
        $c$$ = this.display.find(".family").find(".color .rep");
        setTimeout(function() {
          $($c$$[$COLOR_INDEX$$]).trigger("click")
        }, 10);
        hashParam = hashParam.toLowerCase();
        if(0 === hashParam.lastIndexOf("interioronecoat", 0)) {
          $COLOR_INDEX$$ = 0, $COLOR_INDEX$$ = "interioronecoatreds" == hashParam ? 0 : "interioronecoatoranges" == hashParam ? 1 : "interioronecoatyellows" == hashParam ? 2 : "interioronecoatgreens" == hashParam ? 3 : "interioronecoatblues" == hashParam ? 4 : "interioronecoatpurples" == hashParam ? 5 : "interioronecoatbrowns" == hashParam ? 6 : "interioronecoatgrays" == hashParam ? 7 : "interioronecoatwhites" == hashParam ? 8 : 0, this.display.find("div#marquee_onecoat").trigger("click"), $c$$ = 
          this.display.find(".oneCoatFamilies").find(".color .rep"), setTimeout(function() {
            $($c$$[$COLOR_INDEX$$]).trigger("click")
          }, 10)
        }else {
          if("graysbro" == hashParam.toLowerCase()) {
            var $selBrochure$$ = "BehrGry", $d$$ = this.display.find(".selectbro");
            console.info("The d.val(): " + $d$$.val());
            setTimeout(function() {
              $d$$.val($selBrochure$$);
              $d$$.trigger("change")
            }, 10)
          }else {
            if("blancsneutres" == hashParam.toLowerCase() || "whitesneutrals" == hashParam.toLowerCase()) {
              $selBrochure$$ = "BehrWhtNeu", $d$$ = this.display.find(".selectbro"), setTimeout(function() {
                $d$$.val($selBrochure$$);
                $d$$.trigger("change")
              }, 10)
            }else {
              if("interiors" == hashParam.toLowerCase() || "interieurs" == hashParam.toLowerCase()) {
                $selBrochure$$ = "BehrInt", $d$$ = this.display.find(".selectbro"), setTimeout(function() {
                  $d$$.val($selBrochure$$);
                  $d$$.trigger("change")
                }, 10)
              }else {
                if("exteriors" == hashParam.toLowerCase() || "exterieurs" == hashParam.toLowerCase()) {
                  $selBrochure$$ = "BehrExt", $d$$ = this.display.find(".selectbro"), setTimeout(function() {
                    $d$$.val($selBrochure$$);
                    $d$$.trigger("change")
                  }, 10)
                }else {
                  if("search" == hashParam.toLowerCase()) {
                    $c$$ = this.display.find("#searchTxt"), $c$$.val("ppu"), $d$$ = this.display.find(".btnSearch"), console.info("The c.val(): " + $c$$.val()), setTimeout(function() {
                      $d$$.trigger("click")
                    }, 10)
                  }else {
                    if("exteriors" == hashParam.toLowerCase() || "exterieurs" == hashParam.toLowerCase()) {
                      var $objMarquee_rads$$ = this.display.find(".set"), $objPopular$$ = this.popular, $theTrigger$$ = this.display.find("div#browse_popular_exterior");
                      $.each($objMarquee_rads$$, function() {
                        $theTrigger$$.trigger("click");
                        $objPopular$$.populateChipsets("exterior");
                        $objPopular$$.selectChipset(0)
                      })
                    }else {
                      hashParam.toLowerCase() in marqueeIndx && ($objMarquee_rads$$ = this.marquee, $objMarquee_rads$$.populateChipsets("marqueecollection"), $objMarquee_rads$$.selectChipset(marqueeIndx[hashParam.toLowerCase()]))
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    this.family.init(this, $params$$);
    this.marquee.init(this);
    this.popular.init(this);
    this.decorator.init(this);
    this.search.init(this);
    this.saved.init(this);
    -1 < SITE.search("consumer_ca") ? this.deepLink_ca() : this.deepLink();
    if($params$$ && $params$$.section) {
      $index$$ = 0;
      switch($params$$.section.toLowerCase()) {
        case "family":
          $index$$ = 0;
          break;
        case "marquee":
          $index$$ = 1;
          break;
        case "decorator":
          $index$$ = 2;
          break;
        case "popular":
          $index$$ = 3;
          break;
        case "search":
          $index$$ = 4;
          break;
        case "saved":
          $index$$ = 5
      }
      setTimeout(function() {
        $obj$$.selectTab($index$$)
      }, 10)
    }
  };
  this.init($params$$0$$)
}
ColorBrowser.ON_COLOR_CLICK = "oncolorclick";
function ColorCompare($display$$) {
  this.display = $display$$;
  this.cols = [];
  this.compareTemplate = this.tabTemplate = null;
  this.colors = [];
  this.emptyMessage = this.palette = null;
  this.setPalette = function $this$setPalette$($colors$$) {
    function $wire$$($tab$$, $color$$, $index$$) {
      $tab$$.find(".swatch").css("background-color", $color$$.rgb);
      $tab$$.find(".text").html($color$$.name.toLowerCase() + "<br/><span>" + $color$$.id + "</span>");
      $tab$$.on("click", function($e$$) {
        $obj$$.setState($index$$, $color$$)
      });
      $tab$$.find("input").on("click", function($e$$) {
        $e$$.stopImmediatePropagation();
        $e$$.stopPropagation();
        $obj$$.setState($index$$, $color$$, !0)
      })
    }
    var $obj$$ = this;
    this.colors = $colors$$;
    this.palette.html("");
    this.clear();
    for(var $i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      var $t$$ = this.tabTemplate.clone(), $c$$ = $colors$$[$i$$];
      $c$$ && ($wire$$($t$$, $c$$, $i$$), this.palette.append($t$$), 2 > $i$$ && this.addColor($c$$))
    }
  };
  this.loadRoom = function $this$loadRoom$($shadow_t$$, $base$$4_c$$, $paintable$$) {
    $shadow_t$$ = new RoomTemplate("-1", "", $shadow_t$$, $base$$4_c$$, [$paintable$$], [$paintable$$], [0, 0], [0], null, !1, null, null, null, null, null, null);
    for($base$$4_c$$ = 0;$base$$4_c$$ < this.cols.length;$base$$4_c$$++) {
      this.cols[$base$$4_c$$].loadRoom($shadow_t$$)
    }
  };
  this.indexOf = function $this$indexOf$($color$$) {
    for(var $i$$ = 0;3 > $i$$;$i$$++) {
      if(this.cols[$i$$].color === $color$$) {
        return $i$$
      }
    }
    return-1
  };
  this.clear = function $this$clear$() {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      this.setColor($i$$, null)
    }
  };
  this.removeColor = function $this$removeColor$($color$$) {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(this.cols[$i$$].color === $color$$) {
        this.setColor($i$$, null);
        break
      }
    }
  };
  this.setState = function $this$setState$($index$$, $color$$, $suppressCheck$$) {
    var $s$$ = $(this.palette.find(".tab input")[$index$$]).attr("checked") ? !0 : !1;
    $s$$ ^ $suppressCheck$$ ? this.setColor($index$$, null, $suppressCheck$$) : this.setColor($index$$, $color$$, $suppressCheck$$)
  };
  this.setColor = function $this$setColor$($index$$, $color$$, $suppressCheck$$) {
    var $t$$ = this.cols[$index$$];
    $t$$ && ($color$$ && ($t$$.display.remove(), this.area.append($t$$.display), this.area.stop().animate({scrollTop:this.area[0].scrollHeight}, 300)), $t$$.setColor($color$$), $suppressCheck$$ || $(this.palette.find(".tab input")[$index$$]).attr("checked", $color$$ ? !0 : !1), this.isEmpty() ? this.emptyMessage.show() : this.emptyMessage.hide())
  };
  this.addColor = function $this$addColor$($color$$) {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(this.cols[$i$$].color === $color$$) {
        return!1
      }
    }
    for($i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(null == this.cols[$i$$].color) {
        return this.setColor($i$$, $color$$), !0
      }
    }
    return!1
  };
  this.isEmpty = function $this$isEmpty$() {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(null != this.cols[$i$$].color) {
        return!1
      }
    }
    return!0
  };
  this._init = function $this$_init$() {
    this.tabTemplate = this.display.find(".tab");
    this.palette = this.display.find(".palette");
    this.tabTemplate.remove();
    this.area = this.display.find(".cols");
    this.compareTemplate = this.area.find(".item");
    this.compareTemplate.hide();
    this.compareTemplate.remove();
    this.emptyMessage = this.area.find(".emptyMessage");
    for(var $i$$ = 0;8 > $i$$;$i$$++) {
      this.cols[$i$$] = this._createDisplay()
    }
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    })
  };
  this._createDisplay = function $this$_createDisplay$() {
    var $c$$ = this.compareTemplate.clone();
    this.area.append($c$$);
    $c$$.find(".remove").on("click", function($e$$) {
      console.info("Called");
      obj.compare.removeColor(obj.color)
    });
    return new ColorCompareColumn(this, $c$$)
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$)
  };
  this._init()
}
ColorCompare.NAME = "ColorCompare";
ColorCompare.prototype = new Modal;
function ColorCompareColumn($compare$$, $display$$) {
  this.compare = $compare$$;
  this.display = $display$$;
  this.color = this.room = null;
  this._init = function $this$_init$() {
    var $room$$ = loadModuleDisplay("PaintRoom"), $roomArea$$ = this.display.find(".canvas");
    this.room = new PaintRoom($room$$, !0, 310, 230);
    $roomArea$$.append($room$$);
    this.room.palette = new Palette
  };
  this.loadRoom = function $this$loadRoom$($template$$) {
    this.room.loadRoom($template$$, null)
  };
  this.setColor = function $this$setColor$($color$$) {
    this.color = $color$$;
    if(null != $color$$) {
      var $obj$$ = this;
      this.display.show();
      this.room.paintSectionByIndex($color$$, 0);
      this.display.find(".strip").css("background-color", $color$$.rgb);
      this.display.find(".colorName").html($color$$.name.toLowerCase());
      this.display.find(".colorId").text($color$$.id);
      this.display.find(".remove").on("click", function() {
        $obj$$.compare.removeColor($obj$$.color)
      })
    }else {
      this.display.hide()
    }
  };
  this._init()
}
;function StartOverAlert($display$$) {
  this.display = $display$$;
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.display.find(".close").on("click", function() {
      hideModal($obj$$)
    });
    this.display.find(".btnSaveRestart").on("click", function() {
      startOver(!0)
    });
    this.display.find(".btnRestart").on("click", function($e$$) {
      startOver(!1)
    })
  };
  this.init()
}
StartOverAlert.NAME = "StartOverAlert";
StartOverAlert.prototype = new Modal;
function RenameProject($display$$) {
  this.display = $display$$;
  this.projectName = null;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$);
    userSession && (this.projectName.focus(), this.projectName.val(userSession.projectName), (void 0 === userSession.projectId || null === userSession.projectId && "My Project" === userSession.projectName) && this.projectName.select())
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.projectName = this.display.find(".projectName");
    this.display.find(".close").on("click", function() {
      hideModal()
    });
    this.display.find(".btnOk").on("click", function() {
      userSession && userSession.setProjectName($obj$$.projectName.val());
      hideModal()
    });
    this.display.find(".btnCancel").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
RenameProject.prototype = new Modal;
RenameProject.NAME = "RenameProject";
function OneCoat($display$$) {
  this.display = $display$$;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$)
  };
  this.init = function $this$init$() {
    this.display.find(".close").on("mouseup", function() {
      hideModal()
    })
  };
  this.init()
}
OneCoat.prototype = new Modal;
OneCoat.NAME = "OneCoat";
function MyProjects($display$$) {
  this.display = $display$$;
  this.__closeTimer = this.confirmDelete = this.noProjectMessage = this.itemTemplate = this.errorMessage = this.loader = null;
  this.hide = function $this$hide$() {
    Modal.prototype.hide.call(this);
    console.info("Hiding");
    clearTimeout(this.__closeTimer);
    this.hideConfirmDelete()
  };
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$);
    this.clear();
    this.loader.show();
    userSession && userSession.userId && userSession.getAllProjects()
  };
  this.clear = function $this$clear$() {
    this.errorMessage.hide();
    this.projects.html("");
    this.projects.hide()
  };
  this.showProjectsList = function $this$showProjectsList$($list$$) {
    function $wire$$($item$$, $index$$, $data$$, $id$$) {
      $item$$.find(".btnLoad").on("click", function() {
        userSession.load($data$$, $id$$);
        hideModal()
      });
      $item$$.find(".btnDelete").on("click", function() {
        $obj$$.showConfirmDelete($id$$)
      })
    }
    var $obj$$ = this;
    this.loader.hide();
    this.projects.show();
    var $count$$ = 0;
    $list$$ instanceof Array || ($list$$ = [$list$$]);
    for(var $i$$ = 0;$i$$ < $list$$.length;$i$$++) {
      var $project$$ = $list$$[$i$$];
      if($project$$.palette) {
        var $item$$0$$ = this.itemTemplate.clone();
        $i$$ === $list$$.length - 1 && $item$$0$$.addClass("last");
        this.projects.append($item$$0$$);
        $item$$0$$.find(".title").text($project$$.projectName);
        $item$$0$$.find(".id").text($list$$[$i$$].projectId);
        for(var $palette$$ = $item$$0$$.find(".palette"), $s$$ = 0;$s$$ < $project$$.palette.length;$s$$++) {
          var $color$$ = $project$$.palette[$s$$];
          if($color$$ && ($color$$ = colorLookup[$color$$])) {
            $count$$++, $palette$$.append("<div class='swatch' style='background-color:" + $color$$.rgb + "'></div>")
          }
        }
        $wire$$($item$$0$$, $i$$, $project$$, $list$$[$i$$].projectId)
      }
    }
    0 == $count$$ ? (this.projects.append(this.noProjectMessage), this.projects.removeClass("has"), this.startCloseCountdown()) : this.projects.addClass("has")
  };
  this.startCloseCountdown = function $this$startCloseCountdown$() {
    var $obj$$ = this;
    clearTimeout(this.__closeTimer);
    this.__closeTimer = setTimeout(function() {
      hideModal($obj$$)
    }, 1E4)
  };
  this.showErrorState = function $this$showErrorState$() {
    this.loader.hide();
    this.errorMessage.show()
  };
  this.showConfirmDelete = function $this$showConfirmDelete$($id$$) {
    this.display.find(".curtain").show();
    this.confirmDelete.show($id$$)
  };
  this.hideConfirmDelete = function $this$hideConfirmDelete$() {
    this.display.find(".curtain").hide();
    this.confirmDelete.hide()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.loader = this.display.find(".loader");
    this.errorMessage = this.display.find(".errorMessage");
    this.projects = this.display.find(".projects");
    this.itemTemplate = this.projects.find(".project");
    this.noProjectMessage = this.projects.find(".noproject");
    this.itemTemplate.remove();
    this.noProjectMessage.remove();
    this.display.on("click", ".close", function() {
      hideModal($obj$$)
    });
    this.projects.bind("mousewheel DOMMouseScroll", function($e$$) {
      this.scrollTop += 30 * (0 > ($e$$.originalEvent.wheelDelta || -$e$$.originalEvent.detail) ? 1 : -1);
      $e$$.preventDefault()
    });
    var $cd$$ = loadModuleDisplay("ConfirmDelete");
    this.display.find(".confirmDelete").append($cd$$);
    this.confirmDelete = new ConfirmDelete($cd$$);
    this.confirmDelete.bind(ConfirmDelete.ON_CONFIRM, function($e$$) {
      userSession.deleteProject($e$$.id);
      $obj$$.hideConfirmDelete()
    });
    this.confirmDelete.bind(ConfirmDelete.ON_CANCEL, function() {
      $obj$$.hideConfirmDelete()
    });
    userSession && (userSession.bind(UserSession.ON_PROJECTS_LIST_LOADED, function($e$$) {
      $obj$$.showProjectsList($e$$.projectsList)
    }), userSession.bind(UserSession.ON_ERROR, function($e$$) {
      $e$$.type === UserSession.ERR_TYPE_PROJECTS_LIST && ($obj$$.showErrorState(), $obj$$.startCloseCountdown())
    }), userSession.bind(UserSession.ON_DELETE, function($e$$) {
      $obj$$.projects.find(".id:contains('" + $e$$.projectId + "')").parent().remove()
    }))
  };
  this.init()
}
MyProjects.NAME = "MyProjects";
MyProjects.prototype = new Modal;
function SaveProject($display$$) {
  this.display = $display$$;
  this.projectName = null;
  this.restartAfter = !1;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$);
    userSession && this.projectName.val(userSession.projectName)
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.projectName = this.display.find(".projectName");
    this.display.find(".close").on("click", function() {
      hideModal()
    });
    this.display.find(".btnSave").on("click", function() {
      userSession && (userSession.setProjectNameNewProject($obj$$.projectName.val()), saveNewProject($obj$$.restartAfter), $obj$$.restartAfter = !1);
      hideModal()
    });
    this.display.find(".btnCancel").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
SaveProject.prototype = new Modal;
SaveProject.NAME = "SaveProject";
function ConfirmDelete($display$$) {
  this.display = $display$$;
  this._deleteId = null;
  EventDispatcher.enableEvents(this, ConfirmDelete.ON_CONFIRM, ConfirmDelete.ON_CANCEL);
  this.show = function $this$show$($id$$) {
    this._deleteId = $id$$;
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.display.find(".close").on("click", function() {
      $obj$$.dispatchEvent(ConfirmDelete.ON_CANCEL, {})
    });
    this.display.find(".btnConfirm").on("click", function() {
      var $e$$ = {};
      $e$$.id = $obj$$._deleteId;
      $obj$$.dispatchEvent(ConfirmDelete.ON_CONFIRM, $e$$)
    });
    this.display.find(".btnCancel").on("click", function($e$$) {
      $obj$$.dispatchEvent(ConfirmDelete.ON_CANCEL, {})
    })
  };
  this.init()
}
ConfirmDelete.NAME = "ConfirmDelete";
ConfirmDelete.ON_CONFIRM = "confirm";
ConfirmDelete.ON_CANCEL = "cancel";
function ReplaceColor($display$$) {
  this.display = $display$$;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$)
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.display.find(".btnStartNewProject").on("click", function($e$$) {
      console.info("restart");
      $obj$$.restartProject()
    });
    this.display.find(".close").on("click", function() {
      hideModal()
    })
  };
  this.init()
}
ReplaceColor.showMenu = function $ReplaceColor$showMenu$($color$$, $x$$, $y$$) {
  this.replaceColor = addModuleToModal("Menu");
  this.replaceColor.addTitleContainer();
  this.replaceColor.addColorName($color$$.name, $color$$.id);
  this.replaceColor.addItem("Start a Project/Visualize", "startProject");
  this.replaceColor.addItem("Color Details", "details");
  showModal(this.hueCardLookup, $x$$, $y$$)
};
ReplaceColor.prototype = new Modal;
ReplaceColor.NAME = "ReplaceColor";
function BuyNow($btnBackToProject_display$$) {
  this.display = $btnBackToProject_display$$;
  this.selColorsArr = [];
  this.origColorsArr = [];
  this.avlAttrbInfoArr = [];
  this.selColorIndex;
  this.colorProduct;
  this.isNoSales = this.isOnlySamples = this.testFlag = !1;
  this.colorsConfigStatus = [];
  this.colorsDataLenArr = [];
  this.userSelInfoArr = [];
  this.colorOmsDataMap = [];
  this.dataResetMsg = "This selection change will remove rest of the previous configuration selections. Do you want to proceed?";
  var $obj$$ = this, $intSheenNamesMap$$ = {matte:["Matte", , "Non-reflective appearance", "For low traffic areas"], flat:["Flat", , "Non-reflective appearance", "For low traffic areas"], "flat-enamel":["Flat Enamel", , "Displays a low-luster appearance", "For low to moderate traffic areas"], eggshell:["Eggshell Enamel", , "Soft, velvety appearance", "For moderate traffic areas"], satin:["Satin Enamel", , "Pearl-like appearance", "For moderate to high traffic areas"], "semi-gloss":["Semi-Gloss Enamel", 
  , "Radiant, sleek appearance", "For high traffic/high moisture areas"], "hi-gloss":["Hi-Gloss Enamel", , "Brilliant, shiny appearance", "For high-use surfaces"]}, $extSheenNamesMap$$ = {flat:["Flat", , "Non-reflective appearance", "For walls and siding"], satin:["Satin Enamel", , "Pearl-like appearance", "For walls and siding"], "semi-gloss":["Semi-Gloss Enamel", , "Radiant, sleek appearance", "For doors, trim and shutters"], "hi-gloss":["Hi-Gloss Enamel", , "Brilliant, shiny appearance", "For doors, trim and shutters"]};
  this.showBuyNow = function $this$showBuyNow$() {
    $("#page").hide();
    $("#help").hide();
    $("#buy_now_page").show();
    $(".no_color-overlay").hide();
    $(".configuration_header_row").show();
    $(".configuration_content_container").show()
  };
  this.hideBuyNow = function $this$hideBuyNow$() {
    $("#page").show();
    $("#help").show();
    $("#buy_now_page").hide();
    window.location.hash = "paint"
  };
  this.updateConfigStatus = function $this$updateConfigStatus$() {
    for(var $colorIndex$$ = 0;$colorIndex$$ < $obj$$.userSelInfoArr.length;$colorIndex$$++) {
      if("undefined" != typeof $obj$$.userSelInfoArr[$colorIndex$$]) {
        var $currentColorProduct$$ = new ColorProduct, $currentColorProduct$$ = $obj$$.userSelInfoArr[$colorIndex$$];
        $obj$$.colorsConfigStatus[$colorIndex$$] = $currentColorProduct$$.configStatus
      }
    }
  };
  this.updateDataLenArr = function $this$updateDataLenArr$() {
    for(var $colorIdx$$ = 0;$colorIdx$$ < $obj$$.selColorsArr.length;$colorIdx$$++) {
      this.selColorsArr[$colorIdx$$] && (0 < visualizer.naColors ? ($obj$$.avlAttrbInfoArr = $obj$$.colorOmsDataMap[$obj$$.selColorsArr[$colorIdx$$].id], $obj$$.colorsDataLenArr[$colorIdx$$] = $obj$$.avlAttrbInfoArr.length) : $obj$$.colorsDataLenArr[$colorIdx$$] = 1)
    }
  };
  this.checkAvailibility = function $this$checkAvailibility$($index$$) {
    return 0 != $obj$$.colorsDataLenArr[$index$$] ? !0 : !1
  };
  this.setPalette = function $this$setPalette$($index$$, $paletteBindings$$, $color$$83_omsDataArr$$, $headerColorChip_isRoom$$) {
    $index$$.paletteData && (this.paletteData = $index$$.paletteData, this.selColorsArr = $index$$.paletteData.colors[0] ? $index$$.paletteData.colors : $index$$.previewQuad);
    this.addCanvasPreview($headerColorChip_isRoom$$);
    this.colorOmsDataMap = $color$$83_omsDataArr$$;
    this.origColorsArr = this.selColorsArr;
    this.colorChipTemplate.html("");
    $index$$ = this.display.find(".configuration_paint_module");
    $($index$$).remove();
    for($index$$ = 0;$index$$ < this.selColorsArr.length;$index$$++) {
      $color$$83_omsDataArr$$ = this.selColorsArr[$index$$];
      this.noProjectPaintColorChipTemplate = $headerColorChip_isRoom$$ = this.paintColorChipTemplate.clone();
      var $colorTab$$ = this.colorTabTemplate.clone();
      if($color$$83_omsDataArr$$) {
        var $colorProduct$$ = new ColorProduct;
        this.wire($colorTab$$, $color$$83_omsDataArr$$, $index$$, $paletteBindings$$);
        this.paintChip($headerColorChip_isRoom$$, $color$$83_omsDataArr$$);
        this.selColorsPalette.append($colorTab$$);
        this.colorChipTemplate.append($headerColorChip_isRoom$$);
        -1 != $.inArray($index$$, $paletteBindings$$) && ($colorProduct$$.isColorBound = !0);
        $obj$$.userSelInfoArr[$index$$] = $colorProduct$$
      }
    }
    $obj$$.updatePageHeight();
    $obj$$.updateDataLenArr();
    $obj$$.setInitialContent()
  };
  this.setInitialContent = function $this$setInitialContent$() {
    for(var $cols$$1_idx$$ = 0;$cols$$1_idx$$ < $obj$$.selColorsArr.length;$cols$$1_idx$$++) {
      var $color$$84_colorProduct$$ = this.selColorsArr[$cols$$1_idx$$];
      if($color$$84_colorProduct$$ && $obj$$.checkAvailibility($cols$$1_idx$$)) {
        $obj$$.initTabs($cols$$1_idx$$);
        break
      }
    }
    $obj$$.disableAllTabsNxtBtns();
    for($cols$$1_idx$$ = 0;$cols$$1_idx$$ < $obj$$.selColorsArr.length;$cols$$1_idx$$++) {
      if($color$$84_colorProduct$$ = this.selColorsArr[$cols$$1_idx$$]) {
        $color$$84_colorProduct$$ = new ColorProduct, $color$$84_colorProduct$$ = $obj$$.userSelInfoArr[$cols$$1_idx$$], $obj$$.checkAvailibility($cols$$1_idx$$) ? $obj$$.colorsConfigStatus[$cols$$1_idx$$] = $color$$84_colorProduct$$.configStatus : ($color$$84_colorProduct$$.configStatus = "NA", $color$$84_colorProduct$$.isConfigStarted = !0, $obj$$.colorsConfigStatus[$cols$$1_idx$$] = $color$$84_colorProduct$$.configStatus, $obj$$.markAsNotAvailable($cols$$1_idx$$))
      }
    }
  };
  this.showStateAlert = function $this$showStateAlert$($content$$, $okCallBack$$) {
    $obj$$.showGenericMessage("Please Note", $content$$, $okCallBack$$)
  };
  this.showZipCodeAvailability = function $this$showZipCodeAvailability$() {
    genericMessage.hide();
    this.showZipcodeValidate()
  };
  this.showZipcodeValidate = function $this$showZipcodeValidate$() {
    zipcodeValidate.setInitialContent();
    var $x$$ = $(document).width() / 2 - zipcodeValidate.display.outerWidth() / 2, $y$$ = $(document).height() / 2 - zipcodeValidate.display.outerHeight() / 2;
    showModal(zipcodeValidate, $x$$, $y$$)
  };
  this.addCanvasPreview = function $this$addCanvasPreview$($isRoom$$) {
    var $roomArea$$ = this.display.find(".project_image");
    $isRoom$$ ? ($obj$$.display.find(".no_project_adv_container").hide(), $obj$$.display.find(".no_project_configure_recommendation").hide(), $obj$$.display.find(".order_summary_container").show(), setTimeout(function() {
      var $dataURL$$ = $(".RoomVisualizer .canvas .PaintRoom").find("canvas")[0].toDataURL();
      $roomArea$$.css({background:"url('" + $dataURL$$ + "') #cccccc", "background-size":"211px 149px", "background-repeat":"no-repeat"})
    }, UserSession.AUTO_SAVE_DELAY)) : ($obj$$.display.find(".order_summary_container").hide(), $obj$$.display.find(".no_project_adv_container").show(), $obj$$.display.find(".no_project_configure_recommendation").show())
  };
  this.paintChip = function $this$paintChip$($chip$$, $color$$) {
    $chip$$.css("background-color", $color$$.rgb)
  };
  this.markAsNotAvailable = function $this$markAsNotAvailable$($colorIndex$$1_colorTab$$) {
    $colorIndex$$1_colorTab$$ = $obj$$.display.find(".configuration_paint_module")[$colorIndex$$1_colorTab$$];
    $($colorIndex$$1_colorTab$$).width(900);
    $($colorIndex$$1_colorTab$$).append($("<div class='unavl_color'>This color is not available for purchase.</div>"))
  };
  var $nxtBtn$$ = $($obj$$.display.find(".orange_button-next")), $tabsNav$$ = $($obj$$.display.find("a[name = 'tab1'], a[name = 'tab2'], a[name = 'tab3'], a[name = 'tab4']"));
  this.disableAllTabsNxtBtns = function $this$disableAllTabsNxtBtns$() {
    for(var $navIndex$$ = 0;$navIndex$$ < $nxtBtn$$.length;$navIndex$$++) {
      $($tabsNav$$[$navIndex$$]).attr({onclick:""}), $($tabsNav$$[$navIndex$$]).css({cursor:"default"}), $($tabsNav$$[$navIndex$$]).mouseover(function() {
        $(this).css({"text-decoration":"none"})
      }).mouseout(function() {
        $(this).css({"text-decoration":"none"})
      }), $($nxtBtn$$[$navIndex$$]).attr("onclick", ""), $($nxtBtn$$[$navIndex$$]).css({cursor:"no-drop", color:"#8f8f8f"}), $($nxtBtn$$[$navIndex$$]).hover(function() {
        $(this).css({"text-decoration":"none"})
      }), $($nxtBtn$$[$navIndex$$]).removeClass("buynow_finish_orange_button"), $($nxtBtn$$[$navIndex$$]).addClass("buynow_orange_button orange_button-gray")
    }
    this.changeFinish(this.colorProduct.isSheen)
  };
  this.enableNavigation = function $this$enableNavigation$($tab$$) {
    $($nxtBtn$$[$tab$$ - 1]).css("cursor", "pointer");
    switch($tab$$) {
      case 1:
        this.updateConfigStatus();
        this.enabledState(0);
        $($tabsNav$$[0]).attr("onclick", "buyNow.showAttributeTab(1);");
        $($nxtBtn$$[0]).attr("onclick", "buyNow.showAttributeTab(2);");
        break;
      case 2:
        this.updateConfigStatus();
        this.changeFinish(this.colorProduct.isSheen);
        this.enabledState(1);
        $($tabsNav$$[1]).attr("onclick", "buyNow.showAttributeTab(2);");
        $($nxtBtn$$[1]).attr("onclick", "buyNow.showAttributeTab(3);");
        break;
      case 3:
        this.updateConfigStatus();
        this.enabledState(2);
        $($tabsNav$$[2]).attr("onclick", "buyNow.showAttributeTab(3);");
        this.colorProduct.isSheen && $($nxtBtn$$[2]).attr("onclick", "buyNow.showAttributeTab(4);");
        break;
      case 4:
        this.updateConfigStatus(), this.enabledState(3), $($tabsNav$$[3]).attr("onclick", "buyNow.showAttributeTab(4);")
    }
  };
  this.enabledState = function $this$enabledState$($btn$$1_navIndex$$) {
    $($tabsNav$$[$btn$$1_navIndex$$]).css("cursor", "pointer");
    $($tabsNav$$[$btn$$1_navIndex$$]).attr("onclick", "");
    $($tabsNav$$[$btn$$1_navIndex$$]).mouseover(function() {
      $(this).css({"text-decoration":"underline"})
    }).mouseout(function() {
      $(this).css({"text-decoration":"none"})
    });
    $btn$$1_navIndex$$ = $($nxtBtn$$[$btn$$1_navIndex$$]);
    $btn$$1_navIndex$$.removeClass("buynow_orange_button orange_button-gray");
    $btn$$1_navIndex$$.addClass("buynow_finish_orange_button");
    $btn$$1_navIndex$$.css({color:"#ffffff", cursor:"pointer"});
    $btn$$1_navIndex$$.find(".arr").removeClass("gray");
    "rgb(250,218,0)" === $(".buynow_finish_orange_button").css("background-color").replace(/\s+/g, "") ? ($btn$$1_navIndex$$.find(".arr").addClass("black"), $btn$$1_navIndex$$.css("color:#000")) : $btn$$1_navIndex$$.find(".arr").addClass("white")
  };
  this.disabledState = function $this$disabledState$($bgcolor$$1_navIndex$$) {
    $($tabsNav$$[$bgcolor$$1_navIndex$$]).attr("onclick", "");
    $($tabsNav$$[$bgcolor$$1_navIndex$$]).css("cursor", "default");
    $($tabsNav$$[$bgcolor$$1_navIndex$$]).mouseover(function() {
      $(this).css({"text-decoration":"none"})
    }).mouseout(function() {
      $(this).css({"text-decoration":"none"})
    });
    var $btn$$ = $($nxtBtn$$[$bgcolor$$1_navIndex$$]);
    $btn$$.attr("onclick", "");
    $bgcolor$$1_navIndex$$ = $(".buynow_finish_orange_button").css("background-color");
    $btn$$.removeClass("buynow_finish_orange_button");
    $btn$$.addClass("buynow_orange_button orange_button-gray");
    $btn$$.css({color:"#8f8f8f", cursor:"no-drop"});
    $btn$$.mouseover(function() {
      $btn$$.css({"text-decoration":"none"})
    }).mouseout(function() {
      $btn$$.css({"text-decoration":"none"})
    });
    "rgb(250,218,0)" === $bgcolor$$1_navIndex$$.replace(/\s+/g, "") ? $btn$$.find(".arr").removeClass("black") : $btn$$.find(".arr").removeClass("white");
    $btn$$.find(".arr").addClass("gray")
  };
  this.changeFinish = function $this$changeFinish$($bgcolor$$) {
    $bgcolor$$ = $(".buynow_finish_orange_button").css("background-color");
    $($nxtBtn$$[2]).removeClass("buynow_finish_orange_button");
    $($nxtBtn$$[2]).addClass("buynow_orange_button orange_button-gray");
    $($nxtBtn$$[2]).css("color", "#8f8f8f");
    this.colorProduct.isSheen ? ($($nxtBtn$$[2]).css("width", "96px"), "rgb(250,218,0)" === $bgcolor$$.replace(/\s+/g, "") ? $($nxtBtn$$[2]).html('<span style="color:rgb(0,0,0);">NEXT</span>&nbsp;&nbsp;<div class="arr"></div>') : $($nxtBtn$$[2]).html('<span>Next</span>&nbsp;&nbsp;<div class="arr"></div>')) : ($($nxtBtn$$[2]).css("width", "200px"), "rgb(250,218,0)" === $bgcolor$$.replace(/\s+/g, "") ? $($nxtBtn$$[2]).html('<span class="toUpperCase" style="color:rgb(0,0,0);">DONE WITH THIS COLOR</span>&nbsp;&nbsp;<div class="arr"></div>') : 
    $($nxtBtn$$[2]).html('<span class="toUpperCase">Done with this color</span>&nbsp;&nbsp;<div class="arr"></div>'));
    "rgb(250,218,0)" === $bgcolor$$.replace(/\s+/g, "") ? $($nxtBtn$$[2]).find(".arr").removeClass("black") : $($nxtBtn$$[2]).find(".arr").removeClass("white");
    $($nxtBtn$$[2]).find(".arr").addClass("gray")
  };
  this.showTab = function $this$showTab$($index$$) {
    $("div#attribute_tabs").show();
    var $paintModule$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
    $paintModule$$.removeClass("selected");
    $paintModule$$.removeClass("configuredAndSelected");
    $paintModule$$[$index$$] && ($($paintModule$$[$index$$]).removeClass("orange"), $($paintModule$$[$index$$]).addClass("selected"));
    $("#buy_now_page .tab_message-int_ext").text("Not yet configured");
    $("#buy_now_page .tab_message-size").text("Not yet configured");
    $("#buy_now_page .tab_message-brand").text("Not yet configured");
    $("#buy_now_page .tab_message-sheen").text("Not yet configured")
  };
  this.updateAttrbTabPosition = function $this$updateAttrbTabPosition$($index$$89_top$$) {
    var $paintModule$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
    $paintModule$$[$index$$89_top$$] && ($index$$89_top$$ = $($paintModule$$[$index$$89_top$$])[0].offsetTop, document.getElementById("attribute_tabs").style.top = $index$$89_top$$ + "px");
    $obj$$.updatePageHeight()
  };
  this.updatePageHeight = function $this$updatePageHeight$() {
    var $mainContent$$ = this.display.find(".main_content"), $configContent$$ = this.display.find(".configuration_content_container"), $buynowHeight$$ = $mainContent$$[0].scrollHeight + 25;
    $configContent$$.css("height", "0px");
    1126 == $buynowHeight$$ ? $configContent$$.css("height", "660px") : $configContent$$.css("height", $configContent$$[0].scrollHeight + 20);
    buyNowPage.css("height", $mainContent$$[0].scrollHeight)
  };
  this.showAttributeTab = function $this$showAttributeTab$($step$$) {
    $("div.brand_module").removeAttr("style");
    $("div.orange_check").removeAttr("style");
    $("div.tab a").removeClass("selected");
    $("div#configuration_tabs div.content").removeClass("selected");
    var $tab$$ = $("a[name='tab" + $step$$ + "']");
    $tab$$.addClass("selected");
    $tab$$.parent().find("div.content").addClass("selected");
    switch($step$$) {
      case 1:
        this.initIntExtTab();
        "" != this.colorProduct.surface ? $obj$$.enableNavigation(1) : $obj$$.disabledState(0);
        break;
      case 2:
        this.initContainerSizeTab();
        "" != this.colorProduct.containerSize ? $obj$$.enableNavigation(2) : $obj$$.disabledState(1);
        break;
      case 3:
        this.initBrandTab();
        "" != this.colorProduct.behrBrand ? ($obj$$.enableNavigation(3), "done" == $($nxtBtn$$[2]).text().substring(0, 4).toLowerCase() ? $obj$$.colorProduct.configStatus = "FC" : $obj$$.colorProduct.configStatus = "PC") : $obj$$.disabledState(2);
        break;
      case 4:
        this.initSheenTab(), "" != this.colorProduct.sheen ? ($obj$$.enableNavigation(4), $obj$$.colorProduct.configStatus = "FC") : $obj$$.disabledState(3)
    }
  };
  this.loadTabsInfo = function $this$loadTabsInfo$() {
    $(this.display.find(".surface")).val("");
    $(this.display.find(".containerSize")).val("");
    $(this.display.find(".container_size_quantity")).val("");
    this.showAttributeTab(1);
    "" != this.colorProduct.surface && this.showAttributeTab(1);
    "" != this.colorProduct.containerSize && this.showAttributeTab(2);
    "" != this.colorProduct.behrBrand && this.showAttributeTab(3);
    "" != this.colorProduct.sheen && this.showAttributeTab(4)
  };
  this.initTabs = function $this$initTabs$($index$$) {
    this.selColorIndex = $index$$;
    this.showTab($index$$);
    this.colorProduct = this.userSelInfoArr[this.selColorIndex];
    this.avlAttrbInfoArr = this.colorOmsDataMap[this.selColorsArr[this.selColorIndex].id];
    this.disableAllTabsNxtBtns();
    this.loadTabsInfo();
    this.configAllColorSummaryBoxes();
    this.initiateColorSummary($index$$);
    this.configLineItemAndImage($index$$);
    this.updateAttrbTabPosition($index$$)
  };
  this.resetToVisualizer = function $this$resetToVisualizer$() {
    $obj$$.avlAttrbInfoArr = [];
    $obj$$.userSelInfoArr = [];
    var $orderSummary_paintModule$$2_top$$ = $obj$$.display.find(".order_summary_content p");
    $($orderSummary_paintModule$$2_top$$[0]).html("You must configure your paint order below before adding to cart.");
    $($orderSummary_paintModule$$2_top$$[1]).html("Items will be added to the homedepot.com shopping cart.").show();
    $orderSummary_paintModule$$2_top$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
    $orderSummary_paintModule$$2_top$$[0] && ($orderSummary_paintModule$$2_top$$ = $($orderSummary_paintModule$$2_top$$[0])[0].offsetTop, document.getElementById("attribute_tabs").style.top = $orderSummary_paintModule$$2_top$$ + "px");
    visualizer.prepareViewReturnFromBuyNow();
    $obj$$.hideBuyNow();
    $obj$$.updatePageHeight("colorsmart_page");
    visualizer.isRoom = !0;
    $obj$$.isOnlySamples = !1;
    $obj$$.isNoSales = !1
  };
  $btnBackToProject_display$$ = $obj$$.display.find(".orange_button-edit_project");
  var $btnEditProject$$ = $obj$$.display.find(".nc_button-edit_project");
  $btnBackToProject_display$$.add($btnEditProject$$).on("click", function($e$$) {
    $obj$$.backToProject("Any paint configuration(s) you have made will be lost when you edit your project.<br/>Do you want to continue ?")
  });
  $obj$$.display.find(".adv_preview_image").on("click", function($e$$) {
    $obj$$.backToProject("Any paint configuration(s) you have made will be lost.<br/>Do you want to continue ?")
  });
  this.backToProject = function $this$backToProject$($resetMessage$$) {
    for(var $isConfigStarted$$ = !1, $colorIndex$$ = 0;$colorIndex$$ < $obj$$.userSelInfoArr.length;$colorIndex$$++) {
      "undefined" != typeof $obj$$.userSelInfoArr[$colorIndex$$] && $obj$$.userSelInfoArr[$colorIndex$$].isConfigStarted && "NA" != $obj$$.userSelInfoArr[$colorIndex$$].configStatus && ($isConfigStarted$$ = !0)
    }
    $isConfigStarted$$ ? $obj$$.showGenericMessage("Please Note:", $resetMessage$$, function() {
      buyNow.disableAddToCart();
      return buyNow.resetToVisualizer()
    }, "") : ($obj$$.disableAddToCart(), $obj$$.resetToVisualizer())
  };
  this.wire = function $this$wire$($colorInfoDiv_colorTab$$, $color$$, $index$$, $paletteBindings$$) {
    var $tab$$ = $colorInfoDiv_colorTab$$.find(".configuration_paint_module_paint_color"), $copyColorDiv$$ = $colorInfoDiv_colorTab$$.find(".copy_color_image").parent(), $edit_details$$ = $colorInfoDiv_colorTab$$.find(".configuration_item_tabs_edit_details_container .edit_details"), $removeColorDiv$$ = $colorInfoDiv_colorTab$$.find(".remove_color_image").parent(), $configColorChip$$ = $colorInfoDiv_colorTab$$.find(".paint_color_chip"), $paintBrush$$ = $colorInfoDiv_colorTab$$.find(".paint_brush");
    $colorInfoDiv_colorTab$$.find(".paint_color_text h3").text($color$$.name.toLowerCase());
    $colorInfoDiv_colorTab$$.find(".paint_color_text h5").text($color$$.id);
    $configColorChip$$.css("background-color", $color$$.rgb);
    "undefined" != typeof $obj$$.userSelInfoArr[$index$$] ? $obj$$.userSelInfoArr[$index$$].isColorBound ? $paintBrush$$.show() : $paintBrush$$.hide() : -1 != $.inArray($index$$, $paletteBindings$$) ? $paintBrush$$.show() : $paintBrush$$.hide();
    $edit_details$$.on("click", function($e$$) {
      $e$$.stopPropagation();
      $obj$$.initTabs($index$$)
    });
    $edit_details$$.children(1).mouseover(function() {
      $(this).css({"text-decoration":"underline"})
    }).mouseout(function() {
      $(this).css({"text-decoration":"none"})
    });
    $colorInfoDiv_colorTab$$ = $colorInfoDiv_colorTab$$.find("div.fl-w");
    $($colorInfoDiv_colorTab$$).css("cursor", "pointer");
    $colorInfoDiv_colorTab$$.on("click", function($e$$) {
      $e$$.stopPropagation();
      $obj$$.checkAvailibility($index$$) && $obj$$.initTabs($index$$)
    });
    $tab$$.on("click", function($e$$) {
      $e$$.stopPropagation();
      $obj$$.checkAvailibility($index$$) && $obj$$.initTabs($index$$)
    });
    $copyColorDiv$$.on("click", function($color$$87_e$$234_leftColorDivs$$1_newColors$$) {
      $color$$87_e$$234_leftColorDivs$$1_newColors$$.stopPropagation();
      if($obj$$.checkAvailibility($index$$)) {
        $color$$87_e$$234_leftColorDivs$$1_newColors$$ = $obj$$.selColorsArr[$index$$];
        $color$$87_e$$234_leftColorDivs$$1_newColors$$ = [];
        for(var $newColorsIndex_newIndex$$ = 0, $colorTab$$ = !1, $newColorProdInfo$$ = [], $newColorProduct$$ = new ColorProduct, $loopIndex$$ = 0;$loopIndex$$ < $obj$$.selColorsArr.length;$loopIndex$$++) {
          var $copyColor$$ = $obj$$.selColorsArr[$loopIndex$$], $product$$ = $obj$$.userSelInfoArr[$loopIndex$$];
          $loopIndex$$ == $index$$ && !$colorTab$$ ? ($newColorProdInfo$$[$newColorsIndex_newIndex$$] = $product$$, $color$$87_e$$234_leftColorDivs$$1_newColors$$[$newColorsIndex_newIndex$$++] = $copyColor$$, $newColorProduct$$.isColorBound = $product$$.isColorBound, $newColorProdInfo$$[$newColorsIndex_newIndex$$] = $newColorProduct$$, $color$$87_e$$234_leftColorDivs$$1_newColors$$[$newColorsIndex_newIndex$$++] = $copyColor$$, $colorTab$$ = !0) : ($newColorProdInfo$$[$newColorsIndex_newIndex$$] = 
          $product$$, $color$$87_e$$234_leftColorDivs$$1_newColors$$[$newColorsIndex_newIndex$$++] = $copyColor$$)
        }
        $obj$$.selColorsArr = $color$$87_e$$234_leftColorDivs$$1_newColors$$;
        $obj$$.userSelInfoArr = $newColorProdInfo$$;
        $color$$87_e$$234_leftColorDivs$$1_newColors$$ = $obj$$.display.find(".configuration_paint_module");
        $($color$$87_e$$234_leftColorDivs$$1_newColors$$).remove();
        for($newColorsIndex_newIndex$$ = 0;$newColorsIndex_newIndex$$ < $obj$$.selColorsArr.length;$newColorsIndex_newIndex$$++) {
          if($colorTab$$ = $obj$$.colorTabTemplate.clone(), $color$$87_e$$234_leftColorDivs$$1_newColors$$ = $obj$$.selColorsArr[$newColorsIndex_newIndex$$]) {
            $obj$$.wire($colorTab$$, $color$$87_e$$234_leftColorDivs$$1_newColors$$, $newColorsIndex_newIndex$$), $obj$$.selColorsPalette.append($colorTab$$), $obj$$.initTabs($newColorsIndex_newIndex$$)
          }
        }
        $obj$$.configAllColorSummaryBoxes();
        var $unConfigIndex$$;
        for($color$$87_e$$234_leftColorDivs$$1_newColors$$ = 0;$color$$87_e$$234_leftColorDivs$$1_newColors$$ < $obj$$.userSelInfoArr.length;$color$$87_e$$234_leftColorDivs$$1_newColors$$++) {
          if("undefined" != typeof $obj$$.userSelInfoArr[$color$$87_e$$234_leftColorDivs$$1_newColors$$] && ("UC" == $obj$$.userSelInfoArr[$color$$87_e$$234_leftColorDivs$$1_newColors$$].configStatus || "PC" == $obj$$.userSelInfoArr[$color$$87_e$$234_leftColorDivs$$1_newColors$$].configStatus)) {
            $unConfigIndex$$ = $color$$87_e$$234_leftColorDivs$$1_newColors$$;
            break
          }
        }
        $obj$$.initTabs($unConfigIndex$$);
        $obj$$.updateConfigStatus();
        $obj$$.colorsDataLenArr.splice($index$$ + 1, 0, $obj$$.colorsDataLenArr[$index$$]);
        $(".configuration_paint_module").each(function($currColor_e$$) {
          $currColor_e$$ = $(this).index();
          $obj$$.checkAvailibility($currColor_e$$) || ($obj$$.markAsNotAvailable($currColor_e$$), $(this).removeClass("selected"))
        });
        $obj$$.updatePageHeight()
      }
    });
    $removeColorDiv$$.on("click", function($e$$236_isValidColor_newColorsIndex$$) {
      $e$$236_isValidColor_newColorsIndex$$.stopPropagation();
      for(var $newColors$$ = [], $i$$ = $e$$236_isValidColor_newColorsIndex$$ = 0, $isRemoved$$ = !1, $newColorProdInfo$$ = [], $loopIndex$$ = 0;$loopIndex$$ < $obj$$.selColorsArr.length;$loopIndex$$++) {
        var $product$$ = $obj$$.userSelInfoArr[$loopIndex$$];
        $product$$ && ($obj$$.selColorsArr[$loopIndex$$] && $i$$++, $loopIndex$$ == $index$$ && !$isRemoved$$ ? $isRemoved$$ = !0 : ($newColorProdInfo$$[$e$$236_isValidColor_newColorsIndex$$] = $product$$, $newColors$$[$e$$236_isValidColor_newColorsIndex$$++] = $obj$$.selColorsArr[$loopIndex$$]))
      }
      $obj$$.colorsConfigStatus.splice($index$$, 1);
      $obj$$.colorsDataLenArr.splice($index$$, 1);
      if(1 == $i$$) {
        $obj$$.showGenericMessage("Please Note:", "You are removing the last available color.  Do you want to proceed?", function() {
          buyNow.disableAddToCart();
          return buyNow.removeColor($newColors$$, $newColorProdInfo$$, $index$$)
        }, "")
      }else {
        $e$$236_isValidColor_newColorsIndex$$ = !1;
        for($i$$ = 0;$i$$ < $obj$$.colorsConfigStatus.length;$i$$++) {
          if("NA" != $obj$$.colorsConfigStatus[$i$$]) {
            $e$$236_isValidColor_newColorsIndex$$ = !0;
            break
          }
        }
        $e$$236_isValidColor_newColorsIndex$$ ? buyNow.removeColor($newColors$$, $newColorProdInfo$$, $index$$) : $obj$$.showGenericMessage("Please Note:", "You are removing the last available color.  Do you want to proceed?", function() {
          $(".no_color-overlay").show();
          $(".configuration_header_row").hide();
          $(".configuration_content_container").hide();
          buyNow.updatePageHeight("buynow_page");
          buyNow.disableAddToCart()
        }, "")
      }
    })
  };
  this.removeColor = function $this$removeColor$($isAllConfigured$$1_newColors$$3_orderSummary$$, $newColorProdInfo$$, $index$$92_leftColorDivs$$2_tcolorIndex$$) {
    $obj$$.selColorsArr = $isAllConfigured$$1_newColors$$3_orderSummary$$;
    $obj$$.userSelInfoArr = $newColorProdInfo$$;
    $index$$92_leftColorDivs$$2_tcolorIndex$$ = $obj$$.display.find(".configuration_paint_module");
    $($index$$92_leftColorDivs$$2_tcolorIndex$$).remove();
    for(var $newIndex$$ = 0;$newIndex$$ < $isAllConfigured$$1_newColors$$3_orderSummary$$.length;$newIndex$$++) {
      var $colorTab$$ = $obj$$.colorTabTemplate.clone(), $color$$ = $isAllConfigured$$1_newColors$$3_orderSummary$$[$newIndex$$];
      $color$$ && ($obj$$.wire($colorTab$$, $color$$, $newIndex$$), $obj$$.selColorsPalette.append($colorTab$$), $obj$$.initTabs($newIndex$$), "NA" == $newColorProdInfo$$[$newIndex$$].configStatus && $obj$$.markAsNotAvailable($newIndex$$))
    }
    $obj$$.userSelInfoArr = $newColorProdInfo$$;
    $(".configuration_paint_module").each(function($currColor$$1_e$$) {
      $currColor$$1_e$$ = $(this).index();
      $obj$$.checkAvailibility($currColor$$1_e$$) || ($obj$$.markAsNotAvailable($currColor$$1_e$$), $(this).removeClass("selected"))
    });
    if(0 == $index$$92_leftColorDivs$$2_tcolorIndex$$.length - 1) {
      $(".no_color-overlay").show(), $(".configuration_header_row").hide(), $(".configuration_content_container").hide(), $obj$$.updatePageHeight("buynow_page")
    }else {
      $isAllConfigured$$1_newColors$$3_orderSummary$$ = !0;
      for($index$$92_leftColorDivs$$2_tcolorIndex$$ = $newColorProdInfo$$ = 0;$index$$92_leftColorDivs$$2_tcolorIndex$$ < $obj$$.userSelInfoArr.length;$index$$92_leftColorDivs$$2_tcolorIndex$$++) {
        if("undefined" != typeof $obj$$.userSelInfoArr[$index$$92_leftColorDivs$$2_tcolorIndex$$] && ("UC" == $obj$$.userSelInfoArr[$index$$92_leftColorDivs$$2_tcolorIndex$$].configStatus || "PC" == $obj$$.userSelInfoArr[$index$$92_leftColorDivs$$2_tcolorIndex$$].configStatus)) {
          $newColorProdInfo$$ = $index$$92_leftColorDivs$$2_tcolorIndex$$;
          $isAllConfigured$$1_newColors$$3_orderSummary$$ = !1;
          break
        }
      }
      $isAllConfigured$$1_newColors$$3_orderSummary$$ ? ($obj$$.configAllColorSummaryBoxes(), $("div#attribute_tabs").hide(), $obj$$.updatePageHeight("buynow_page")) : ($obj$$.configAllColorSummaryBoxes(), $obj$$.initTabs($newColorProdInfo$$))
    }
    $isAllConfigured$$1_newColors$$3_orderSummary$$ = $obj$$.display.find(".order_summary_content p");
    $newColorProdInfo$$ = $obj$$.createSummaryLineItems();
    0 <= $newColorProdInfo$$.indexOf("<div") ? $($isAllConfigured$$1_newColors$$3_orderSummary$$[0]).html($newColorProdInfo$$) : ($newColorProdInfo$$ = $newColorProdInfo$$.split(","), $($isAllConfigured$$1_newColors$$3_orderSummary$$[0]).html($newColorProdInfo$$[0]), $($isAllConfigured$$1_newColors$$3_orderSummary$$[1]).html($newColorProdInfo$$[1]).show());
    $obj$$.validateAddToCart()
  };
  this.initIntExtTab = function $this$initIntExtTab$() {
    var $selectIntExtDiv$$ = this.display.find(".selectIntExt"), $intExtSeletion$$ = "Not yet configured", $int_ext_module_surface$$ = $("#sheenTabCover");
    "undefined" != typeof this.colorProduct.containerSize && "8oz" == this.colorProduct.containerSize ? $($int_ext_module_surface$$).show() : $($int_ext_module_surface$$).hide();
    this.avlAttrbInfoArr && ((this.isValidAttrb("containerSize", "8oz") || this.isValidAttrb("surface", "interior")) && !this.isNoSales ? ($int_ext_module_surface$$ = $($selectIntExtDiv$$[0]).find(".surface"), $($int_ext_module_surface$$).val("interior"), $($selectIntExtDiv$$[0]).removeAttr("style"), $($($selectIntExtDiv$$[0]).find("div.surface_unavailable_option")).hide(), $($("div.int_ext_module")[0]).addClass("hover_background")) : ($($selectIntExtDiv$$[0]).find(".surface"), $int_ext_module_surface$$ = 
    $($selectIntExtDiv$$[0]).find(".int_ext_module"), $int_ext_module_surface$$.css("cursor", "auto"), $($($selectIntExtDiv$$[0]).find("div.surface_unavailable_option")).show(), $($int_ext_module_surface$$).val("")), (this.isValidAttrb("containerSize", "8oz") || this.isValidAttrb("surface", "exterior")) && !this.isNoSales ? ($int_ext_module_surface$$ = $($selectIntExtDiv$$[1]).find(".surface"), $($int_ext_module_surface$$).val("exterior"), $($selectIntExtDiv$$[1]).removeAttr("style"), $($($selectIntExtDiv$$[1]).find("div.surface_unavailable_option")).hide(), 
    $($("div.int_ext_module")[1]).addClass("hover_background")) : ($($selectIntExtDiv$$[1]).find(".surface"), $int_ext_module_surface$$ = $($selectIntExtDiv$$[1]).find(".int_ext_module"), $int_ext_module_surface$$.css("cursor", "auto"), $($($selectIntExtDiv$$[1]).find("div.surface_unavailable_option")).show(), $($int_ext_module_surface$$).val("")));
    $("div.int_ext_module").removeClass("orange");
    "interior" == this.colorProduct.surface ? ($($selectIntExtDiv$$[0]).find(".int_ext_module").addClass("orange"), $intExtSeletion$$ = "interior") : "exterior" == this.colorProduct.surface && ($($selectIntExtDiv$$[1]).find(".int_ext_module").addClass("orange"), $intExtSeletion$$ = "exterior");
    $obj$$.display.find(".tab_message-int_ext").text($intExtSeletion$$)
  };
  this.getUnitPriceByOMS = function $this$getUnitPriceByOMS$($omsId$$, $colorId$$) {
    var $rtnPrice$$ = 0, $tempProduct$$, $tempProductList$$ = [];
    if(null != $colorId$$) {
      for(var $tempProductList$$ = $obj$$.colorOmsDataMap[$colorId$$], $i$$ = 0;$i$$ < $tempProductList$$.length;$i$$++) {
        if($tempProductList$$[$i$$].omsId == $omsId$$) {
          $tempProduct$$ = $tempProductList$$[$i$$];
          break
        }
      }
    }
    "undefined" != typeof $tempProduct$$ && ($rtnPrice$$ = parseFloat($tempProduct$$.price));
    return $rtnPrice$$
  };
  this.getUnitPrice = function $this$getUnitPrice$($selectedSurface$$, $selectedContainerSize$$, $selectedBehrBrand$$, $selectedSheen$$) {
    var $productObj$$;
    if(0 < this.avlAttrbInfoArr.length) {
      for(var $i$$ = 0;$i$$ < this.avlAttrbInfoArr.length;$i$$++) {
        if($productObj$$ = this.avlAttrbInfoArr[$i$$], "8oz" != $productObj$$.size) {
          if($productObj$$.surface == $selectedSurface$$ && $productObj$$.size == $selectedContainerSize$$ && $productObj$$.product == $selectedBehrBrand$$ && $productObj$$.sheen == $selectedSheen$$) {
            return $productObj$$.price
          }
        }else {
          if($productObj$$.size == $selectedContainerSize$$ && $productObj$$.product == $selectedBehrBrand$$) {
            return $productObj$$.price
          }
        }
      }
    }
  };
  this.setLineItemPrice = function $this$setLineItemPrice$($colorIndex$$) {
    var $lineItemTotalTxt$$ = $obj$$.display.find(".paint_color_item_total")[$colorIndex$$], $currentColorProduct$$ = $obj$$.userSelInfoArr[$colorIndex$$], $oneGallonPrice_sampleSizeUnitPrice$$ = 0, $fiveGallonPrice$$ = 0, $oneGallonPrice_sampleSizeUnitPrice$$ = 0, $totalPrice$$;
    "1Gal" == $currentColorProduct$$.containerSize ? 0 != $currentColorProduct$$.oneGalQty ? ($oneGallonPrice_sampleSizeUnitPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.oneGalOmsId, $obj$$.selColorsArr[$colorIndex$$].id), $fiveGallonPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.omsId, $obj$$.selColorsArr[$colorIndex$$].id), $totalPrice$$ = parseInt($currentColorProduct$$.oneGalQty) * parseFloat($oneGallonPrice_sampleSizeUnitPrice$$) + parseInt($currentColorProduct$$.quantity) * 
    parseFloat($fiveGallonPrice$$)) : ($oneGallonPrice_sampleSizeUnitPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.omsId, $obj$$.selColorsArr[$colorIndex$$].id), $totalPrice$$ = parseInt($currentColorProduct$$.quantity) * parseFloat($oneGallonPrice_sampleSizeUnitPrice$$)) : "5Gal" == $currentColorProduct$$.containerSize ? 0 != $currentColorProduct$$.oneGalQty ? ($oneGallonPrice_sampleSizeUnitPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.oneGalOmsId, $obj$$.selColorsArr[$colorIndex$$].id), 
    $fiveGallonPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.omsId, $obj$$.selColorsArr[$colorIndex$$].id), $totalPrice$$ = parseInt($currentColorProduct$$.oneGalQty) * parseFloat($oneGallonPrice_sampleSizeUnitPrice$$) + parseInt($currentColorProduct$$.quantity) * parseFloat($fiveGallonPrice$$)) : ($fiveGallonPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.omsId, $obj$$.selColorsArr[$colorIndex$$].id), $totalPrice$$ = parseInt($currentColorProduct$$.quantity) * parseFloat($fiveGallonPrice$$)) : 
    "8oz" == $currentColorProduct$$.containerSize && 0 != $currentColorProduct$$.quantity && ($oneGallonPrice_sampleSizeUnitPrice$$ = $obj$$.getUnitPriceByOMS($currentColorProduct$$.omsId, $obj$$.selColorsArr[$colorIndex$$].id), $totalPrice$$ = parseInt($currentColorProduct$$.quantity) * parseFloat($oneGallonPrice_sampleSizeUnitPrice$$));
    isNaN($totalPrice$$) ? $($lineItemTotalTxt$$).html('Line Item Total<div class="info_numbers paint_color_item_total_number">--</div>') : $($lineItemTotalTxt$$).html('Line Item Total<div class="info_numbers paint_color_item_total_number">$' + Number($totalPrice$$).toFixed(2) + "</div>")
  };
  this.configLineItemAndImage = function $this$configLineItemAndImage$($colorIndex$$) {
    var $summaryCanImage$$ = $obj$$.display.find(".single_summary_can")[$colorIndex$$], $doubleSummaryCanImage$$ = $obj$$.display.find(".double_summary_can")[$colorIndex$$], $container_size_quantity_totalGallons$$ = $obj$$.display.find(".container_size_quantity"), $containerUnitTxt$$ = $obj$$.display.find(".paint_color_gallons")[$colorIndex$$];
    $obj$$.display.find(".paint_color_item_total");
    var $currentColorProduct$$ = $obj$$.userSelInfoArr[$colorIndex$$];
    $($summaryCanImage$$).hide();
    $($doubleSummaryCanImage$$).hide();
    var $doubleOneGallonImage_paintModule$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module"), $configuration_item_tab$$ = $($doubleOneGallonImage_paintModule$$[$colorIndex$$]).find(".configuration_item_tabs_module .configuration_item_tab h5"), $tabCover$$ = $("#sheenTabCover")[$colorIndex$$];
    $($tabCover$$).hide();
    var $doubleOneGallonImage_paintModule$$ = $($($doubleSummaryCanImage$$).children())[0], $doubleFiveGallonImage$$ = $($($doubleSummaryCanImage$$).children())[1], $sampleCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/item-module-sample-bucket.png", $oneGallonCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/item-module-one-gallon-bucket.png", $fiveGallonCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/item-module-five-gallon-bucket.png";
    "8oz" == $currentColorProduct$$.containerSize && "undefined" != typeof $currentColorProduct$$.behrBrand && "" != $currentColorProduct$$.behrBrand ? $sampleCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/sample/" + $currentColorProduct$$.behrBrand.toLowerCase() + ".png" : "undefined" != typeof $currentColorProduct$$.sheen && "" != $currentColorProduct$$.sheen && "undefined" != typeof $currentColorProduct$$.behrBrand && "" != $currentColorProduct$$.behrBrand ? 
    ($oneGallonCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/1gal/" + $currentColorProduct$$.surface.toLowerCase() + "_" + $currentColorProduct$$.behrBrand.toLowerCase() + "_" + $currentColorProduct$$.sheen.toLowerCase() + ".png", $fiveGallonCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/5gal/" + $currentColorProduct$$.surface.toLowerCase() + "_" + $currentColorProduct$$.behrBrand.toLowerCase() + "_" + 
    $currentColorProduct$$.sheen.toLowerCase() + ".png") : "undefined" != typeof $currentColorProduct$$.behrBrand && "" != $currentColorProduct$$.behrBrand && ($oneGallonCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/1gal/" + $currentColorProduct$$.behrBrand.toLowerCase() + "_1g.png", $fiveGallonCanAbstractImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/5gal/" + $currentColorProduct$$.behrBrand.toLowerCase() + "_5g.png");
    $($containerUnitTxt$$).html('Gallons<div class="info_numbers paint_color_gallons_number">--</div>');
    "1Gal" == $currentColorProduct$$.containerSize && 0 != $currentColorProduct$$.oneGalQty || "5Gal" == $currentColorProduct$$.containerSize && 0 != $currentColorProduct$$.oneGalQty ? ($("#buy_now_page .tab_message-size").text("1Gal & 5Gal"), $($configuration_item_tab$$[1]).text("1Gal & 5Gal"), $container_size_quantity_totalGallons$$ = parseInt($currentColorProduct$$.oneGalQty) + 5 * parseInt($currentColorProduct$$.quantity), $($containerUnitTxt$$).html('Gallons<div class="info_numbers paint_color_gallons_number">' + 
    $container_size_quantity_totalGallons$$ + "</div>"), $($summaryCanImage$$).hide(), $($doubleOneGallonImage_paintModule$$).css("background-image", "url(" + $oneGallonCanAbstractImageUrl$$ + ")"), $($doubleFiveGallonImage$$).css("background-image", "url(" + $fiveGallonCanAbstractImageUrl$$ + ")"), $($doubleSummaryCanImage$$).show()) : ("" != $currentColorProduct$$.containerSize && ($("#buy_now_page .tab_message-size").text($currentColorProduct$$.containerSize), $($configuration_item_tab$$[1]).text($currentColorProduct$$.containerSize)), 
    "8oz" == $currentColorProduct$$.containerSize ? ($($tabCover$$).show(), $($configuration_item_tab$$[3]).text("Not Applicable"), $($summaryCanImage$$).addClass("summary_sample_can_image"), $($summaryCanImage$$).css("background-image", "url(" + $sampleCanAbstractImageUrl$$ + ")"), $($containerUnitTxt$$).html('Samples<div class="info_numbers paint_color_gallons_number">' + $($container_size_quantity_totalGallons$$[0]).val() + "</div>")) : "1Gal" == $currentColorProduct$$.containerSize ? ($($summaryCanImage$$).addClass("summary_one_gallon_can_image"), 
    $($summaryCanImage$$).css("background-image", "url(" + $oneGallonCanAbstractImageUrl$$ + ")"), $($containerUnitTxt$$).html('Gallons<div class="info_numbers paint_color_gallons_number">' + $($container_size_quantity_totalGallons$$[1]).val() + "</div>")) : ($($summaryCanImage$$).addClass("summary_five_gallon_image"), $($summaryCanImage$$).css("background-image", "url(" + $fiveGallonCanAbstractImageUrl$$ + ")"), $($containerUnitTxt$$).html('Gallons<div class="info_numbers paint_color_gallons_number">' + 
    5 * $($container_size_quantity_totalGallons$$[2]).val() + "</div>")), $($doubleSummaryCanImage$$).hide(), "" != $currentColorProduct$$.containerSize && $($summaryCanImage$$).show());
    $obj$$.setLineItemPrice($colorIndex$$);
    $obj$$.adjustSummaryBox($colorIndex$$)
  };
  this.verifyPaintItems = function $this$verifyPaintItems$() {
    var $isReadyForCart_numComplete$$ = !1;
    if(0 != $obj$$.userSelInfoArr.length) {
      for(var $colorWording_i$$ = 0;$colorWording_i$$ < $obj$$.userSelInfoArr.length;$colorWording_i$$++) {
        if(null != $obj$$.userSelInfoArr[$colorWording_i$$] && $obj$$.userSelInfoArr[$colorWording_i$$].isConfigStarted && "NA" != $obj$$.userSelInfoArr[$colorWording_i$$].configStatus) {
          $isReadyForCart_numComplete$$ = !0;
          break
        }
      }
    }
    if($isReadyForCart_numComplete$$) {
      for(var $isAllColorsConfig$$ = !0, $orderMapArray$$ = [], $colorWording_i$$ = $isReadyForCart_numComplete$$ = 0;$colorWording_i$$ < $obj$$.userSelInfoArr.length;$colorWording_i$$++) {
        null != $obj$$.userSelInfoArr[$colorWording_i$$] && "undefined" != typeof $obj$$.userSelInfoArr[$colorWording_i$$] && "FC" == $obj$$.userSelInfoArr[$colorWording_i$$].configStatus ? $obj$$.userSelInfoArr[$colorWording_i$$].isConfigStarted ? ($isReadyForCart_numComplete$$++, "" != $obj$$.userSelInfoArr[$colorWording_i$$].oneGalOmsId && $orderMapArray$$.push([$obj$$.userSelInfoArr[$colorWording_i$$].oneGalOmsId, $obj$$.userSelInfoArr[$colorWording_i$$].oneGalQty]), $orderMapArray$$.push([$obj$$.userSelInfoArr[$colorWording_i$$].omsId, 
        $obj$$.userSelInfoArr[$colorWording_i$$].quantity])) : $isAllColorsConfig$$ = !1 : null != $obj$$.userSelInfoArr[$colorWording_i$$] && ("undefined" != typeof $obj$$.userSelInfoArr[$colorWording_i$$] && "NA" != $obj$$.userSelInfoArr[$colorWording_i$$].configStatus) && ($isAllColorsConfig$$ = !1)
      }
      $isAllColorsConfig$$ ? $obj$$.checkoutCartToHD($orderMapArray$$) : ($colorWording_i$$ = " color", 1 < $isReadyForCart_numComplete$$ && ($colorWording_i$$ = " colors"), $obj$$.showGenericMessage("Please Note:", "You have successfully configured " + $isReadyForCart_numComplete$$ + $colorWording_i$$ + ".<br/>Any colors you have not configured will not be added to your cart and will not be saved.", function() {
        return buyNow.checkoutCartToHD($orderMapArray$$)
      }, ""))
    }else {
      $obj$$.showGenericMessage("Please Note:", "Please complete at least one color selection and try again.", "", null)
    }
  };
  this.checkoutCartToConsumerDirect = function $this$checkoutCartToConsumerDirect$() {
    for(var $colorBoxes_orderSummaryList$$ = $obj$$.display.find(".configuration_paint_module"), $cookieData_paintcolorText$$ = $($colorBoxes_orderSummaryList$$).find(".paint_color_text"), $idx$$ = $($colorBoxes_orderSummaryList$$).find(".paint_color_chip"), $colorBoxes_orderSummaryList$$ = [], $i$$ = 0;$i$$ < $obj$$.userSelInfoArr.length;$i$$++) {
      var $orderSummaryItem$$ = [];
      if(null != $obj$$.userSelInfoArr[$i$$] && "FC" == $obj$$.userSelInfoArr[$i$$].configStatus) {
        var $colorId$$ = $($($cookieData_paintcolorText$$)[$i$$]).text(), $colorName$$ = $colorId$$.trim().split("\n")[0].trim(), $colorId$$ = $colorId$$.trim().split("\n")[1].trim(), $colorRGB$$ = $($($idx$$)[$i$$]).css("backgroundColor");
        "" != $obj$$.userSelInfoArr[$i$$].oneGalOmsId ? ($orderSummaryItem$$.push($obj$$.userSelInfoArr[$i$$].oneGalOmsId, $colorId$$, $colorName$$, "1Gal", $obj$$.userSelInfoArr[$i$$].oneGalQty, $obj$$.userSelInfoArr[$i$$].surface, $obj$$.userSelInfoArr[$i$$].behrBrand, $obj$$.userSelInfoArr[$i$$].sheen, $obj$$.getUnitPriceByOMS($obj$$.userSelInfoArr[$i$$].oneGalOmsId, $colorId$$), $colorRGB$$), $colorBoxes_orderSummaryList$$.push($orderSummaryItem$$), $orderSummaryItem$$ = [], $orderSummaryItem$$.push($obj$$.userSelInfoArr[$i$$].omsId, 
        $colorId$$, $colorName$$, "5Gal", $obj$$.userSelInfoArr[$i$$].quantity, $obj$$.userSelInfoArr[$i$$].surface, $obj$$.userSelInfoArr[$i$$].behrBrand, $obj$$.userSelInfoArr[$i$$].sheen, $obj$$.getUnitPriceByOMS($obj$$.userSelInfoArr[$i$$].omsId, $colorId$$), $colorRGB$$)) : $orderSummaryItem$$.push($obj$$.userSelInfoArr[$i$$].omsId, $colorId$$, $colorName$$, $obj$$.userSelInfoArr[$i$$].containerSize, $obj$$.userSelInfoArr[$i$$].quantity, $obj$$.userSelInfoArr[$i$$].surface, $obj$$.userSelInfoArr[$i$$].behrBrand, 
        $obj$$.userSelInfoArr[$i$$].sheen, $obj$$.getUnitPriceByOMS($obj$$.userSelInfoArr[$i$$].omsId, $colorId$$), $colorRGB$$);
        $colorBoxes_orderSummaryList$$.push($orderSummaryItem$$)
      }
    }
    $cookieData_paintcolorText$$ = "";
    for($idx$$ = 0;$idx$$ < $colorBoxes_orderSummaryList$$.length;$idx$$++) {
      $i$$ = $colorBoxes_orderSummaryList$$[$idx$$], null != $i$$[0] && void 0 != typeof $i$$[0] && ($cookieData_paintcolorText$$ += $i$$[1] + ":" + $i$$[2] + ":" + $i$$[3] + ":" + $i$$[4] + ":" + $i$$[5] + ":" + $i$$[6] + ":" + $i$$[7] + ":" + $i$$[8] + ":" + $i$$[9] + ":")
    }
    setCookie("behr_consumer_direct", $cookieData_paintcolorText$$, 1);
    window.location = "http://devpreview.behr.com/consumer/buy-online/checkout"
  };
  this.checkoutCartToHD = function $this$checkoutCartToHD$($orders_popUp$$) {
    $obj$$.tagAddToCart($orders_popUp$$);
    var $url$$ = "http://www.homedepot.com/webapp/wcs/stores/servlet/OrderItemAdd?storeId=10051&catalogId=10053&langId=-1&URL=OrderItemDisplay";
    for(i = 0;i < $orders_popUp$$.length;i++) {
      $url$$ += "&catEntryId_" + (i + 1) + "=" + $orders_popUp$$[i][0] + "&quantity_" + (i + 1) + "=" + $orders_popUp$$[i][1]
    }
    $orders_popUp$$ = window.open($url$$, "_blank");
    !$orders_popUp$$ || null == $orders_popUp$$ || "undefined" == typeof $orders_popUp$$ ? $obj$$.showGenericMessage("Could not add item(s) to cart", "Please disable the pop-up blocker and click <b>Add To Cart</b> again.", "", null) : (null != getCookie("houzz_ref") ? window.location = "http://www.behr.com/consumer/inspiration/houzz-landing-page" : ($obj$$.resetToVisualizer(), -1 < window.location.href.indexOf("?") ? window.location.href = window.location.href.split("?")[0] : window.location.reload(!0)), 
    $orders_popUp$$.focus())
  };
  $obj$$.display.find(".nc_button-start_over").on("click", function($e$$) {
    deleteCookies();
    $obj$$.resetToVisualizer();
    -1 < window.location.href.indexOf("?") ? document.location.href = window.location.href.split("?")[0] : document.location.reload(!0)
  });
  this.tagAddToCart = function $this$tagAddToCart$($idx$$3_orderMapArray$$1_paintcolorText$$) {
    var $colorBoxes$$1_orderSummaryList$$ = $obj$$.display.find(".configuration_paint_module");
    $idx$$3_orderMapArray$$1_paintcolorText$$ = $($colorBoxes$$1_orderSummaryList$$).find(".paint_color_text");
    for(var $paintcolorChip$$ = $($colorBoxes$$1_orderSummaryList$$).find(".paint_color_chip"), $colorBoxes$$1_orderSummaryList$$ = [], $i$$ = 0;$i$$ < $obj$$.userSelInfoArr.length;$i$$++) {
      var $orderSummaryItem$$ = [];
      if(null != $obj$$.userSelInfoArr[$i$$] && "FC" == $obj$$.userSelInfoArr[$i$$].configStatus) {
        var $colorId$$3_colorTexts$$ = $($($idx$$3_orderMapArray$$1_paintcolorText$$)[$i$$]).text(), $colorName$$ = $colorId$$3_colorTexts$$.trim().split("\n")[0].trim(), $colorId$$3_colorTexts$$ = $colorId$$3_colorTexts$$.trim().split("\n")[1].trim(), $colorRGB$$ = $($($paintcolorChip$$)[$i$$]).css("backgroundColor");
        $obj$$.userSelInfoArr[$i$$].isConfigStarted ? "" != $obj$$.userSelInfoArr[$i$$].oneGalOmsId ? (googleAnalyticsTagEvents("High Value-Buy", "Buy Now on HomeDepot.com", "Gallons & Fives" + this.houzz_label), $orderSummaryItem$$.push($obj$$.userSelInfoArr[$i$$].oneGalOmsId, $colorName$$, $colorId$$3_colorTexts$$, $colorRGB$$, $obj$$.userSelInfoArr[$i$$].surface, "1Gal", $obj$$.userSelInfoArr[$i$$].oneGalQty, $obj$$.userSelInfoArr[$i$$].behrBrand, $obj$$.userSelInfoArr[$i$$].sheen), $colorBoxes$$1_orderSummaryList$$.push($orderSummaryItem$$), 
        $orderSummaryItem$$ = [], $orderSummaryItem$$.push($obj$$.userSelInfoArr[$i$$].omsId, $colorName$$, $colorId$$3_colorTexts$$, $colorRGB$$, $obj$$.userSelInfoArr[$i$$].surface, "5Gal", $obj$$.userSelInfoArr[$i$$].quantity, $obj$$.userSelInfoArr[$i$$].behrBrand, $obj$$.userSelInfoArr[$i$$].sheen)) : ("8oz" === $obj$$.userSelInfoArr[$i$$].containerSize ? googleAnalyticsTagEvents("High Value-Buy", "Buy Now on HomeDepot.com", "Samples" + this.houzz_label) : googleAnalyticsTagEvents("High Value-Buy", 
        "Buy Now on HomeDepot.com", "Gallons & Fives" + this.houzz_label), $orderSummaryItem$$.push($obj$$.userSelInfoArr[$i$$].omsId, $colorName$$, $colorId$$3_colorTexts$$, $colorRGB$$, $obj$$.userSelInfoArr[$i$$].surface, $obj$$.userSelInfoArr[$i$$].containerSize, $obj$$.userSelInfoArr[$i$$].quantity, $obj$$.userSelInfoArr[$i$$].behrBrand, $obj$$.userSelInfoArr[$i$$].sheen)) : $orderSummaryItem$$.push(null, $colorName$$, $colorId$$3_colorTexts$$, $colorRGB$$, null, null, null, null, null);
        $colorBoxes$$1_orderSummaryList$$.push($orderSummaryItem$$)
      }
    }
    for($idx$$3_orderMapArray$$1_paintcolorText$$ = 0;$idx$$3_orderMapArray$$1_paintcolorText$$ < $colorBoxes$$1_orderSummaryList$$.length;$idx$$3_orderMapArray$$1_paintcolorText$$++) {
    }
  };
  this.createSummaryLineItems = function $this$createSummaryLineItems$() {
    var $colorBoxes$$2_i$$ = $obj$$.display.find(".configuration_paint_module");
    $($colorBoxes$$2_i$$).find(".paint_color_text");
    $($colorBoxes$$2_i$$).find(".paint_color_chip");
    for(var $orderSummaryList$$ = [], $colorBoxes$$2_i$$ = 0;$colorBoxes$$2_i$$ < $obj$$.userSelInfoArr.length;$colorBoxes$$2_i$$++) {
      var $orderSummaryItem$$ = [];
      null != $obj$$.userSelInfoArr[$colorBoxes$$2_i$$] && "FC" == $obj$$.userSelInfoArr[$colorBoxes$$2_i$$].configStatus && ("" != $obj$$.userSelInfoArr[$colorBoxes$$2_i$$].oneGalOmsId ? ($orderSummaryItem$$.push("1Gal", $obj$$.userSelInfoArr[$colorBoxes$$2_i$$].oneGalQty, $obj$$.getUnitPriceByOMS($obj$$.userSelInfoArr[$colorBoxes$$2_i$$].oneGalOmsId, $obj$$.selColorsArr[$colorBoxes$$2_i$$].id)), $orderSummaryList$$.push($orderSummaryItem$$), $orderSummaryItem$$ = [], $orderSummaryItem$$.push("5Gal", 
      $obj$$.userSelInfoArr[$colorBoxes$$2_i$$].quantity, $obj$$.getUnitPriceByOMS($obj$$.userSelInfoArr[$colorBoxes$$2_i$$].omsId, $obj$$.selColorsArr[$colorBoxes$$2_i$$].id))) : $orderSummaryItem$$.push($obj$$.userSelInfoArr[$colorBoxes$$2_i$$].containerSize, $obj$$.userSelInfoArr[$colorBoxes$$2_i$$].quantity, $obj$$.getUnitPriceByOMS($obj$$.userSelInfoArr[$colorBoxes$$2_i$$].omsId, $obj$$.selColorsArr[$colorBoxes$$2_i$$].id)), $orderSummaryList$$.push($orderSummaryItem$$))
    }
    if(0 == $orderSummaryList$$.length) {
      return"You must configure your paint order below before adding to cart.,Items will be added to the homedepot.com shopping cart."
    }
    for(var $totalSampleQuantity$$ = 0, $OneGLine_total1GallonQuantity$$ = 0, $FiveGLine_total5GallonQuantity$$ = 0, $total5GPrice$$ = $orderSummaryItem$$ = $colorBoxes$$2_i$$ = 0, $idx$$ = 0;$idx$$ < $orderSummaryList$$.length;$idx$$++) {
      var $paintItem$$ = $orderSummaryList$$[$idx$$];
      "8oz" == $paintItem$$[0].toLowerCase() ? ($totalSampleQuantity$$ += parseInt($paintItem$$[1]), $colorBoxes$$2_i$$ += parseFloat($paintItem$$[2]) * parseInt($paintItem$$[1])) : "1gal" == $paintItem$$[0].toLowerCase() ? ($OneGLine_total1GallonQuantity$$ += parseInt($paintItem$$[1]), $orderSummaryItem$$ += parseFloat($paintItem$$[2]) * parseInt($paintItem$$[1])) : "5gal" == $paintItem$$[0].toLowerCase() && ($FiveGLine_total5GallonQuantity$$ += parseInt($paintItem$$[1]), $total5GPrice$$ += parseFloat($paintItem$$[2]) * 
      parseInt($paintItem$$[1]))
    }
    $orderSummaryList$$ = "<div style='font-size: 12px; height:20px; margin-top:10px;width:275px;'><div style='position:relative; float:left;'>Sample Containers (" + $totalSampleQuantity$$ + ")</div><div style='position:relative; float:right;'>$" + $colorBoxes$$2_i$$.toFixed(2) + "</div></div>";
    $OneGLine_total1GallonQuantity$$ = "<div style='font-size: 12px; height:20px;margin-top:5px;width:275px;'><div style='position:relative; float:left;'>1-Gallon Containers (" + $OneGLine_total1GallonQuantity$$ + ")</div><div style='position:relative; float:right;'>$" + $orderSummaryItem$$.toFixed(2) + "</div></div>";
    $FiveGLine_total5GallonQuantity$$ = "<div style='font-size: 12px; height:20px;margin-top:5px;width:275px;'><div style='position:relative; float:left;'>5-Gallon Containers (" + $FiveGLine_total5GallonQuantity$$ + ")</div><div style='position:relative; float:right;'>$" + $total5GPrice$$.toFixed(2) + "</div></div>";
    $colorBoxes$$2_i$$ = "<div style='font-size: 14px; height:20px;margin-top:5px;width:275px;'><div style='position:relative; float:left;'>Order Total</div><div style='position:relative; float:right;'>$" + ($colorBoxes$$2_i$$ + $orderSummaryItem$$ + $total5GPrice$$).toFixed(2) + "</div></div>";
    return $orderSummaryList$$ + $OneGLine_total1GallonQuantity$$ + $FiveGLine_total5GallonQuantity$$ + "<div style='border-top: 1px solid #cccccc;margin-bottom: 10px; margin-top: 10px;width:275px;'></div>" + $colorBoxes$$2_i$$
  };
  $obj$$.display.find(".orange_button-next").on("click", function($e$$) {
    if("don" == $(this).text().substring(0, 3).toLowerCase() && "FC" == $obj$$.colorProduct.configStatus) {
      $e$$ = !0;
      for(var $isAtleastOneConfigured_selectedIndex$$ = !1, $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ = $obj$$.display.find(".configuration_paint_module"), $colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$ = 0;$colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$ < $obj$$.userSelInfoArr.length;$colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$++) {
        if("undefined" != typeof $obj$$.userSelInfoArr[$colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$]) {
          var $color$$90_currentColorProduct$$ = new ColorProduct, $color$$90_currentColorProduct$$ = $obj$$.userSelInfoArr[$colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$];
          "FC" == $color$$90_currentColorProduct$$.configStatus ? ($($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$[$obj$$.selColorIndex]).addClass("orange"), $isAtleastOneConfigured_selectedIndex$$ = !0) : $e$$ = !1
        }
      }
      $isAtleastOneConfigured_selectedIndex$$ ? $obj$$.enableAddToCart() : $obj$$.disableAddToCart();
      $e$$ && ($obj$$.configAllColorSummaryBoxes(), $("div#attribute_tabs").hide(), $obj$$.updatePageHeight("buynow_page"));
      var $colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$ = [], $color$$90_currentColorProduct$$ = [], $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ = $isAtleastOneConfigured_selectedIndex$$ = 0, $isSwaped$$ = !1;
      $e$$ = !0;
      if(0 < $obj$$.selColorIndex) {
        for(var $loopIndex$$ = 0;$loopIndex$$ < $obj$$.userSelInfoArr.length;$loopIndex$$++) {
          "undefined" != typeof $obj$$.userSelInfoArr[$loopIndex$$] && ($isSwaped$$ && $loopIndex$$ <= $obj$$.selColorIndex ? ($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$] = $obj$$.selColorsArr[$loopIndex$$ - 1], $color$$90_currentColorProduct$$[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$++] = $obj$$.userSelInfoArr[$loopIndex$$ - 1]) : $isSwaped$$ && $loopIndex$$ > 
          $obj$$.selColorIndex ? ($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$] = $obj$$.selColorsArr[$loopIndex$$], $color$$90_currentColorProduct$$[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$++] = $obj$$.userSelInfoArr[$loopIndex$$]) : $loopIndex$$ < $obj$$.selColorIndex && ("PC" == $obj$$.userSelInfoArr[$loopIndex$$].configStatus || "UC" == $obj$$.userSelInfoArr[$loopIndex$$].configStatus) ? 
          ($isAtleastOneConfigured_selectedIndex$$ = $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$++, $isSwaped$$ = !0) : ($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$] = $obj$$.selColorsArr[$loopIndex$$], $color$$90_currentColorProduct$$[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$++] = $obj$$.userSelInfoArr[$loopIndex$$]))
        }
        $isSwaped$$ && ($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$[$isAtleastOneConfigured_selectedIndex$$] = $obj$$.selColorsArr[$obj$$.selColorIndex], $color$$90_currentColorProduct$$[$isAtleastOneConfigured_selectedIndex$$] = $obj$$.userSelInfoArr[$obj$$.selColorIndex]);
        $obj$$.selColorsArr = $colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$;
        $obj$$.userSelInfoArr = $color$$90_currentColorProduct$$;
        $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ = $obj$$.display.find(".configuration_paint_module");
        $($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$).remove();
        for($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ = 0;$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ < $obj$$.selColorsArr.length;$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$++) {
          if($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$ = $obj$$.colorTabTemplate.clone(), $color$$90_currentColorProduct$$ = $obj$$.selColorsArr[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$]) {
            $obj$$.wire($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$, $color$$90_currentColorProduct$$, $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$), $obj$$.selColorsPalette.append($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$), $obj$$.initTabs($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$)
          }
        }
        $obj$$.updateConfigStatus();
        $obj$$.updateDataLenArr()
      }
      $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ = $obj$$.display.find(".order_summary_content p");
      $colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$ = $obj$$.createSummaryLineItems();
      $($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$[0]).html($colorIndex$$5_colorTab$$5_newColors$$4_summaryLines$$);
      $($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$[1]).hide();
      for($configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ = 0;$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$ < $obj$$.userSelInfoArr.length;$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$++) {
        if("undefined" != typeof $obj$$.userSelInfoArr[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$] && ("UC" == $obj$$.userSelInfoArr[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$].configStatus || "PC" == $obj$$.userSelInfoArr[$configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$].configStatus)) {
          $isAtleastOneConfigured_selectedIndex$$ = $configuration_paint_module_leftColorDivs$$3_newIndex$$2_orderSummary$$2_tcolorIndex$$;
          $e$$ = !1;
          break
        }
      }
      $(".configuration_paint_module").each(function($currColor$$2_e$$) {
        $currColor$$2_e$$ = $(this).index();
        $obj$$.checkAvailibility($currColor$$2_e$$) || ($obj$$.markAsNotAvailable($currColor$$2_e$$), $(this).removeClass("selected"))
      });
      $e$$ ? ($obj$$.configAllColorSummaryBoxes(), $("div#attribute_tabs").hide(), $obj$$.updatePageHeight("buynow_page")) : $obj$$.initTabs($isAtleastOneConfigured_selectedIndex$$)
    }
    $obj$$.configLineItemAndImage($obj$$.selColorIndex)
  });
  this.validateAddToCart = function $this$validateAddToCart$() {
    for(var $isAtleastOneConfigured$$ = !1, $colorIndex$$ = 0;$colorIndex$$ < $obj$$.userSelInfoArr.length;$colorIndex$$++) {
      if("undefined" != typeof $obj$$.userSelInfoArr[$colorIndex$$] && "FC" == $obj$$.userSelInfoArr[$colorIndex$$].configStatus) {
        $isAtleastOneConfigured$$ = !0;
        break
      }
    }
    $isAtleastOneConfigured$$ ? this.enableAddToCart() : this.disableAddToCart()
  };
  this.enableAddToCart = function $this$enableAddToCart$() {
    var $addToCart$$ = $obj$$.display.find(".orange_button-add_to_cart");
    $($addToCart$$).css("cursor", "pointer");
    $($addToCart$$).css("color", "#FFFFFF");
    $($addToCart$$).removeClass("orange_button-gray");
    $($addToCart$$).addClass("buynow_finish_orange_button");
    "rgb(250,218,0)" === $(".buynow_finish_orange_button").css("background-color").replace(/\s+/g, "") ? $($addToCart$$).css("color", "#000") : $($addToCart$$).css("color", "#FFF");
    var $addToCartMessaging_addToCartMessagingBottom$$ = $obj$$.display.find(".add_to_cart_messaging");
    $($addToCartMessaging_addToCartMessagingBottom$$[0]).html("Ready to place your paint order into the homedepot.com shopping cart?").css("margin-top", "10px");
    $($addToCartMessaging_addToCartMessagingBottom$$[1]).hide();
    $addToCartMessaging_addToCartMessagingBottom$$ = $obj$$.display.find(".add_to_cart_messaging_bottom");
    $($addToCartMessaging_addToCartMessagingBottom$$[0]).html("Ready to place your paint order into the homedepot.com shopping cart?").css("margin-top", "10px");
    $($addToCartMessaging_addToCartMessagingBottom$$[1]).hide();
    $addToCart$$.off("click");
    $addToCart$$.on("click", function($e$$) {
      $e$$.stopPropagation();
      $obj$$.verifyPaintItems()
    })
  };
  this.disableAddToCart = function $this$disableAddToCart$() {
    var $addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$ = $obj$$.display.find(".orange_button-add_to_cart");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$).unbind();
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$).css("cursor", "default");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$).css("color", "#8F8F8F");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$).removeClass("buynow_finish_orange_button");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$).addClass("orange_button-gray");
    $addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$ = $obj$$.display.find(".add_to_cart_messaging");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$[0]).html("You must configure your paint order below before adding to cart.").css("margin-top", "");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$[1]).html("Items will be added to the homedepot.com shopping cart.").show();
    $addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$ = $obj$$.display.find(".add_to_cart_messaging_bottom");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$[0]).html("You must configure your paint order below before adding to cart.").css("margin-top", "");
    $($addToCart$$2_addToCartMessaging$$1_addToCartMessagingBottom$$[1]).html("Items will be added to the homedepot.com shopping cart.").show()
  };
  this.resetBrand = function $this$resetBrand$($configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$) {
    $obj$$.colorProduct.sheen = "";
    $obj$$.colorProduct.omsId = "";
    var $selectedDiv$$;
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $obj$$.initTabs($obj$$.selColorIndex);
    $obj$$.showAttributeTab(3);
    var $brandName$$ = "";
    $("div.brand_module").removeClass("orange");
    "MQ" == $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$ ? ($brandName$$ = "Marquee", $selectedDiv$$ = $("div.brand_module")[0]) : "UL" == $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$ ? ($brandName$$ = "Premium Plus Ultra", $selectedDiv$$ = $("div.brand_module")[1]) : "PP" == $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$ && ($brandName$$ = "Premium Plus", $selectedDiv$$ = $("div.brand_module")[2]);
    $($selectedDiv$$).addClass("orange");
    "" != $brandName$$ && $("#buy_now_page .tab_message-brand").text($brandName$$);
    $obj$$.colorProduct.isConfigStarted = !0;
    $obj$$.colorProduct.oneGalOmsId = "";
    "undefined" != typeof $obj$$.colorProduct.containerSize && "8oz" == $obj$$.colorProduct.containerSize && ($obj$$.colorProduct.omsId = $obj$$.getOMSID($obj$$.colorProduct.surface, $obj$$.colorProduct.containerSize, $obj$$.colorProduct.behrBrand, null));
    $obj$$.colorProduct.behrBrand = $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$;
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$ = $obj$$.display.find(".single_summary_can")[$obj$$.selColorIndex];
    "8oz" == $obj$$.colorProduct.containerSize && (sampleCanAbstractImageUrl = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/sample/" + $obj$$.colorProduct.behrBrand.toLowerCase() + ".png", $($configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$).addClass("summary_sample_can_image"), $($configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$).css("background-image", "url(" + sampleCanAbstractImageUrl + ")"));
    $("#buy_now_page .tab_message-brand").text($brandName$$);
    $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
    $configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$ = $($configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module .configuration_item_tab h5");
    $($configuration_item_tab$$1_paintModule$$4_selectedBrand_summaryCanImage$$[2]).text($brandName$$);
    $obj$$.colorProduct.configStatus = $obj$$.colorProduct.isSheen ? "PC" : "FC";
    $obj$$.colorProduct.sheen = "";
    $obj$$.enableNavigation(3);
    $obj$$.validateAddToCart()
  };
  this.validateBrandAttrbs = function $this$validateBrandAttrbs$($selBehrBrand$$) {
    var $rtnBoolean$$ = !1;
    "" == $obj$$.colorProduct.sheen ? $rtnBoolean$$ = !0 : "" != $obj$$.colorProduct.behrBrand && $obj$$.colorProduct.behrBrand ? $obj$$.validateSelection($obj$$.colorProduct.surface, $obj$$.colorProduct.containerSize, $selBehrBrand$$, $obj$$.colorProduct.sheen) ? ($obj$$.colorProduct.behrBrand = $selBehrBrand$$, $obj$$.colorProduct.isSheen = !0, $obj$$.initTabs($obj$$.selColorIndex), $obj$$.showAttributeTab(3), $rtnBoolean$$ = !0) : ($rtnBoolean$$ = !1, $obj$$.showGenericMessage("Please Note:", 
    $obj$$.dataResetMsg, function() {
      return buyNow.resetBrand($selBehrBrand$$)
    }, "")) : $rtnBoolean$$ = !1;
    return $rtnBoolean$$
  };
  $obj$$.display.find(".brand_module").on("click", function($brandName$$1_e$$) {
    if("undefined" != typeof $(this).find(".brand").val() && "" != $(this).find(".brand").val() && $obj$$.validateBrandAttrbs($(this).find(".brand").val())) {
      $("div.brand_module").removeClass("orange");
      $(this).addClass("orange");
      $obj$$.colorProduct.behrBrand = $(this).find(".brand").val();
      $obj$$.colorProduct.isConfigStarted = !0;
      $obj$$.colorProduct.omsId = "";
      $obj$$.colorProduct.oneGalOmsId = "";
      "undefined" != typeof $obj$$.colorProduct.containerSize && "8oz" == $obj$$.colorProduct.containerSize && ($obj$$.colorProduct.omsId = $obj$$.getOMSID($obj$$.colorProduct.surface, $obj$$.colorProduct.containerSize, $obj$$.colorProduct.behrBrand, null));
      $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
      $brandName$$1_e$$ = "";
      "PP" == $obj$$.colorProduct.behrBrand ? $brandName$$1_e$$ = "Premium Plus" : "UL" == $obj$$.colorProduct.behrBrand ? $brandName$$1_e$$ = "Premium Plus Ultra" : "MQ" == $obj$$.colorProduct.behrBrand && ($brandName$$1_e$$ = "Marquee");
      var $configuration_item_tab$$2_paintModule$$5_summaryCanImage$$ = $obj$$.display.find(".single_summary_can")[$obj$$.selColorIndex];
      "8oz" == $obj$$.colorProduct.containerSize && (sampleCanAbstractImageUrl = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/sample/" + $obj$$.colorProduct.behrBrand.toLowerCase() + ".png", $($configuration_item_tab$$2_paintModule$$5_summaryCanImage$$).addClass("summary_sample_can_image"), $($configuration_item_tab$$2_paintModule$$5_summaryCanImage$$).css("background-image", "url(" + sampleCanAbstractImageUrl + ")"), $obj$$.setLineItemPrice($obj$$.selColorIndex));
      var $singleSummaryCanImage$$ = $obj$$.display.find(".single_summary_can")[$obj$$.selColorIndex], $doubleFiveGallonImage$$ = $($obj$$.display.find(".double_summary_can")[$obj$$.selColorIndex]).children(), $doubleOneGallonImage$$ = $($doubleFiveGallonImage$$)[0], $doubleFiveGallonImage$$ = $($doubleFiveGallonImage$$)[1], $oneGallonCanImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/1gal/" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].behrBrand.toLowerCase() + 
      "_1g.png", $fiveGallonCanImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/5gal/" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].behrBrand.toLowerCase() + "_5g.png";
      $($singleSummaryCanImage$$).is(":visible") ? "1Gal" == $obj$$.colorProduct.containerSize ? $($configuration_item_tab$$2_paintModule$$5_summaryCanImage$$).css("background-image", "url(" + $oneGallonCanImageUrl$$ + ")") : "5Gal" == $obj$$.colorProduct.containerSize && $($configuration_item_tab$$2_paintModule$$5_summaryCanImage$$).css("background-image", "url(" + $fiveGallonCanImageUrl$$ + ")") : ($($doubleOneGallonImage$$).css("background-image", "url(" + $oneGallonCanImageUrl$$ + ")"), $($doubleFiveGallonImage$$).css("background-image", 
      "url(" + $fiveGallonCanImageUrl$$ + ")"));
      $("#buy_now_page .tab_message-brand").text($brandName$$1_e$$);
      $configuration_item_tab$$2_paintModule$$5_summaryCanImage$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
      $configuration_item_tab$$2_paintModule$$5_summaryCanImage$$ = $($configuration_item_tab$$2_paintModule$$5_summaryCanImage$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module .configuration_item_tab h5");
      $($configuration_item_tab$$2_paintModule$$5_summaryCanImage$$[2]).text($brandName$$1_e$$);
      $obj$$.colorProduct.configStatus = $obj$$.colorProduct.isSheen ? "PC" : "FC";
      $obj$$.colorProduct.sheen = "";
      $obj$$.enableNavigation(3)
    }
  });
  this.isValidNumber = function $this$isValidNumber$($n$$) {
    return/^[0-9]{1,10}$/.test($n$$)
  };
  $btnBackToProject_display$$ = this.display.find(".container_size_quantity");
  $($btnBackToProject_display$$).change(function($containerSizeModule_e$$) {
    $containerSizeModule_e$$ = $(this).parent().parent();
    var $selContainerSize$$ = $($containerSizeModule_e$$).find(".containerSize").val(), $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity"), $qty$$ = $(this).val();
    $obj$$.isValidNumber($qty$$.trim()) ? "" != $selContainerSize$$ && ($obj$$.validateSheens() ? ("1Gal" == $selContainerSize$$ && (0 != $($container_size_quantity$$[2]).val() && 0 == parseInt($($container_size_quantity$$[1]).val())) && ($selContainerSize$$ = "5Gal"), "5Gal" == $selContainerSize$$ && (0 != $($container_size_quantity$$[1]).val() && 0 == parseInt($($container_size_quantity$$[2]).val())) && ($selContainerSize$$ = "1Gal"), $obj$$.validateContainerSize($selContainerSize$$, !0)) : $(this).trigger("click")) : 
    ($obj$$.showGenericMessage("Error message:", "Please enter valid number for quantity.", "", null), $($containerSizeModule_e$$).hasClass("orange") ? $(this).val(1) : $(this).val(0))
  });
  $obj$$.display.find(".container_size_module").on("click", function($e$$) {
    var $selContainerSize$$ = $(this).find(".containerSize").val();
    $obj$$.validateSheens() ? $obj$$.containerSizeOnClick($selContainerSize$$) : "" != $obj$$.colorProduct.behrBrand ? $obj$$.showGenericMessage("Please Note:", $obj$$.dataResetMsg, function() {
      return buyNow.resetSelections($selContainerSize$$)
    }, function() {
      return buyNow.cancelSizeChange($selContainerSize$$)
    }) : "1Gal" == $selContainerSize$$ && "5Gal" == $obj$$.colorProduct.containerSize ? $obj$$.showGenericMessage("Please Note:", "Product is not available in combination, do you want to switch to 1Gal ?", function() {
      return buyNow.switchToContainer("1Gal")
    }, function() {
      return buyNow.cancelSizeChange($selContainerSize$$)
    }) : "5Gal" == $selContainerSize$$ && "1Gal" == $obj$$.colorProduct.containerSize ? $obj$$.showGenericMessage("Please Note:", "Product is not available in combination, do you want to switch to 5Gal ?", function() {
      return buyNow.switchToContainer("5Gal")
    }, function() {
      return buyNow.cancelSizeChange($selContainerSize$$)
    }) : $obj$$.containerSizeOnClick($selContainerSize$$)
  });
  this.resetSelections = function $this$resetSelections$($selContainerSize$$) {
    var $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity");
    $obj$$.colorProduct.behrBrand = "";
    $obj$$.colorProduct.sheen = "";
    $obj$$.colorProduct.omsId = "";
    $obj$$.colorProduct.quantity = 0;
    $($container_size_quantity$$[0]).val(0);
    $($container_size_quantity$$[1]).val(0);
    $($container_size_quantity$$[2]).val(0);
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $obj$$.initTabs($obj$$.selColorIndex);
    $obj$$.showAttributeTab(2);
    "8oz" == $selContainerSize$$ ? $obj$$.containerSizeOnClick("8oz") : "1Gal" == $selContainerSize$$ ? $obj$$.switchToContainer("1Gal") : $obj$$.switchToContainer("5Gal")
  };
  this.resetContainerSize = function $this$resetContainerSize$($allNumber_isValidated_tabCover$$, $i$$148_selContainerSize$$, $containerIntVal_isQtyChange$$) {
    var $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity");
    $obj$$.colorProduct.behrBrand = "";
    $obj$$.colorProduct.sheen = "";
    $obj$$.colorProduct.omsId = "";
    $obj$$.colorProduct.oneGalOmsId = "";
    $obj$$.colorProduct.oneGalQty = 0;
    $obj$$.colorProduct.quantity = 0;
    $($container_size_quantity$$[0]).val(0);
    $($container_size_quantity$$[1]).val(0);
    $($container_size_quantity$$[2]).val(0);
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $obj$$.initTabs($obj$$.selColorIndex);
    $obj$$.showAttributeTab(2);
    $obj$$.processContainerSize($allNumber_isValidated_tabCover$$, !0, $i$$148_selContainerSize$$, $containerIntVal_isQtyChange$$);
    $allNumber_isValidated_tabCover$$ = $("#sheenTabCover");
    "8oz" == $obj$$.colorProduct.containerSize ? ($($allNumber_isValidated_tabCover$$).show(), $obj$$.colorProduct.isSheen = !1) : ($($allNumber_isValidated_tabCover$$).hide(), $obj$$.colorProduct.isSheen = !0);
    $allNumber_isValidated_tabCover$$ = !0;
    for($i$$148_selContainerSize$$ = 0;$i$$148_selContainerSize$$ < $container_size_quantity$$.length;$i$$148_selContainerSize$$++) {
      if($containerIntVal_isQtyChange$$ = parseInt($($container_size_quantity$$[$i$$148_selContainerSize$$]).val()), isNaN($containerIntVal_isQtyChange$$) || 0 > $containerIntVal_isQtyChange$$) {
        $allNumber_isValidated_tabCover$$ = !1
      }
    }
    $allNumber_isValidated_tabCover$$ ? ($obj$$.colorProduct.configStatus = "PC", $obj$$.enableNavigation(2)) : $obj$$.disabledState(1);
    $obj$$.validateAddToCart()
  };
  this.processContainerSize = function $this$processContainerSize$($i$$149_isValidated$$, $prevSelectionChoice$$, $selContainerSize$$, $isQtyChange$$) {
    var $container_size_module$$ = $obj$$.display.find(".container_size_module"), $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity"), $selectContainerSizeDiv$$ = $obj$$.display.find(".selectContainerSize"), $isUserCancel$$ = !1, $sampleQuantityInt$$ = parseInt($($container_size_quantity$$[0]).val()), $OneGallonQuantityInt$$ = parseInt($($container_size_quantity$$[1]).val()), $FiveGallonQuantityInt$$ = parseInt($($container_size_quantity$$[2]).val());
    if("8oz" == $selContainerSize$$) {
      if(0 != $OneGallonQuantityInt$$ || 0 != $FiveGallonQuantityInt$$) {
        if($i$$149_isValidated$$) {
          $prevSelectionChoice$$ ? (0 == $sampleQuantityInt$$ && $($container_size_quantity$$[0]).val(1), $($container_size_quantity$$[1]).val(0), $($container_size_quantity$$[2]).val(0), $($container_size_module$$[0]).addClass("orange"), $($container_size_module$$[1]).removeClass("orange"), $($container_size_module$$[2]).removeClass("orange"), $obj$$.colorProduct.quantity = $($container_size_quantity$$[0]).val(), $($container_size_quantity$$[0]).focus()) : ($isUserCancel$$ = !0, $($container_size_quantity$$[0]).val(0), 
          0 != $($container_size_quantity$$[1]).val() && $($container_size_quantity$$[1]).focus(), 0 != $($container_size_quantity$$[2]).val() && $($container_size_quantity$$[2]).focus())
        }else {
          $isUserCancel$$ = !0;
          $obj$$.showGenericMessage("Please Note:", "This container size change will remove previously selected 1Gal, 5Gal selections. Do you want to proceed?", function() {
            return buyNow.containerSizeChange($selContainerSize$$)
          }, function() {
            return buyNow.cancelSizeChange($selContainerSize$$)
          });
          return
        }
      }else {
        $($container_size_module$$[0]).addClass("orange"), 0 == $sampleQuantityInt$$ && $($container_size_quantity$$[0]).val(1), $obj$$.colorProduct.quantity = $($container_size_quantity$$[0]).val(), $($container_size_quantity$$[0]).focus()
      }
    }else {
      if("1Gal" == $selContainerSize$$) {
        if(0 != $sampleQuantityInt$$) {
          if($i$$149_isValidated$$) {
            $prevSelectionChoice$$ ? ($($container_size_quantity$$[0]).val(0), 0 == $OneGallonQuantityInt$$ && $($container_size_quantity$$[1]).val(1), $($container_size_module$$[0]).removeClass("orange"), $($container_size_module$$[1]).addClass("orange"), $obj$$.colorProduct.quantity = $($container_size_quantity$$[1]).val(), $($container_size_quantity$$[1]).focus()) : ($isUserCancel$$ = !0, $($container_size_quantity$$[1]).val(0), $($container_size_quantity$$[0]).focus())
          }else {
            $isUserCancel$$ = !0;
            $obj$$.showGenericMessage("Please Note:", "This container size change will remove previously selected sample size selection. Do you want to proceed?", function() {
              return buyNow.containerSizeChange($selContainerSize$$)
            }, function() {
              return buyNow.cancelSizeChange($selContainerSize$$)
            });
            return
          }
        }else {
          isNaN($FiveGallonQuantityInt$$) ? ($($container_size_quantity$$[2]).val(0), $obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.oneGalOmsId = "", $selContainerSize$$ = "1Gal", $($container_size_quantity$$[1]).focus(), $($container_size_module$$[1]).addClass("orange"), $($container_size_quantity$$[1]).val(1), $obj$$.colorProduct.quantity = $($container_size_quantity$$[1]).val()) : "" != $obj$$.colorProduct.quantity && "" != $obj$$.colorProduct.oneGalQty && !1 == $isQtyChange$$ ? ($($container_size_quantity$$[1]).val(0), 
          $($container_size_module$$[1]).removeClass("orange"), $obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.oneGalOmsId = "", $selContainerSize$$ = "5Gal", $($container_size_quantity$$[2]).focus()) : ($($container_size_module$$[1]).addClass("orange"), 0 == $OneGallonQuantityInt$$ && $($container_size_quantity$$[1]).val(1), 0 < $FiveGallonQuantityInt$$ && !isNaN($FiveGallonQuantityInt$$) ? ($selContainerSize$$ = "5Gal", $obj$$.colorProduct.oneGalQty = $($container_size_quantity$$[1]).val()) : 
          ($obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.quantity = $($container_size_quantity$$[1]).val()), $($container_size_quantity$$[1]).focus(), $isQtyChange$$ && 5 <= $OneGallonQuantityInt$$ && "" != $($selectContainerSizeDiv$$[2]).find(".containerSize").val() && $obj$$.showFiveGalSuggestion($container_size_quantity$$, $container_size_module$$), $($container_size_quantity$$[1]).focus())
        }
      }else {
        if("5Gal" == $selContainerSize$$) {
          if(0 != $sampleQuantityInt$$) {
            if($i$$149_isValidated$$) {
              $prevSelectionChoice$$ ? ($($container_size_quantity$$[0]).val(0), 0 == $FiveGallonQuantityInt$$ && $($container_size_quantity$$[2]).val(1), $($container_size_module$$[2]).addClass("orange"), $obj$$.colorProduct.quantity = $($container_size_quantity$$[2]).val(), $($container_size_quantity$$[2]).focus()) : ($isUserCancel$$ = !0, $($container_size_quantity$$[2]).val(0), $($container_size_quantity$$[0]).focus())
            }else {
              $isUserCancel$$ = !0;
              $obj$$.showGenericMessage("Please Note:", "This container size change will remove previously selected sample size selection. Do you want to proceed?", function() {
                return buyNow.containerSizeChange($selContainerSize$$)
              }, function() {
                return buyNow.cancelSizeChange($selContainerSize$$)
              });
              return
            }
          }else {
            isNaN($OneGallonQuantityInt$$) ? ($($container_size_quantity$$[1]).val(0), $obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.oneGalOmsId = "", $selContainerSize$$ = "5Gal", $($container_size_quantity$$[2]).focus(), $($container_size_module$$[2]).addClass("orange"), $($container_size_quantity$$[2]).val(1), $obj$$.colorProduct.quantity = $($container_size_quantity$$[2]).val()) : "" != $obj$$.colorProduct.quantity && "" != $obj$$.colorProduct.oneGalQty && !1 == $isQtyChange$$ ? ($($container_size_quantity$$[2]).val(0), 
            $obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.oneGalOmsId = "", $selContainerSize$$ = "1Gal", $($container_size_quantity$$[1]).focus()) : ($($container_size_module$$[2]).addClass("orange"), 0 == $FiveGallonQuantityInt$$ && $($container_size_quantity$$[2]).val(1), 0 < $OneGallonQuantityInt$$ && !isNaN($OneGallonQuantityInt$$) ? ($obj$$.colorProduct.quantity = $($container_size_quantity$$[2]).val(), $obj$$.colorProduct.oneGalQty = $($container_size_quantity$$[1]).val()) : ($obj$$.colorProduct.oneGalQty = 
            0, $obj$$.colorProduct.quantity = $($container_size_quantity$$[2]).val()), $($container_size_quantity$$[2]).focus())
          }
        }
      }
    }
    for($i$$149_isValidated$$ = 0;3 > $i$$149_isValidated$$;$i$$149_isValidated$$++) {
      0 == parseInt($($container_size_quantity$$[$i$$149_isValidated$$]).val()) ? $($container_size_module$$[$i$$149_isValidated$$]).removeClass("orange") : $($container_size_module$$[$i$$149_isValidated$$]).addClass("orange")
    }
    $isUserCancel$$ || ($obj$$.colorProduct.containerSize = $selContainerSize$$, "8oz" == $selContainerSize$$ && ($obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.oneGalOmsId = ""), $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct, $obj$$.configLineItemAndImage($obj$$.selColorIndex), $obj$$.updatePageHeight("buynow_page"))
  };
  this.switchToContainer = function $this$switchToContainer$($allNumber$$) {
    var $container_size_module$$1_i$$ = $obj$$.display.find(".container_size_module"), $configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$ = $obj$$.display.find(".container_size_quantity"), $OneGallonQuantityInt$$1_containerIntVal$$ = parseInt($($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[1]).val()), $FiveGallonQuantityInt$$ = parseInt($($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[2]).val());
    $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[0]).val(0);
    $($container_size_module$$1_i$$[0]).removeClass("orange");
    "1Gal" == $allNumber$$ ? ($($container_size_module$$1_i$$[1]).addClass("orange"), 0 == $OneGallonQuantityInt$$1_containerIntVal$$ && $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[1]).val(1), $($container_size_module$$1_i$$[1]).val(1), $($container_size_module$$1_i$$[1]).addClass("orange"), $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[2]).val(0), $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[1]).focus(), 
    $($container_size_module$$1_i$$[2]).removeClass("orange"), $obj$$.colorProduct.containerSize = "1Gal", $obj$$.colorProduct.quantity = $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[1]).val()) : ($($container_size_module$$1_i$$[2]).addClass("orange"), 0 == $FiveGallonQuantityInt$$ && $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[2]).val(1), $($container_size_module$$1_i$$[2]).val(1), $($container_size_module$$1_i$$[2]).addClass("orange"), 
    $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[2]).focus(), $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[1]).val(0), $($container_size_module$$1_i$$[1]).removeClass("orange"), $obj$$.colorProduct.containerSize = "5Gal", $obj$$.colorProduct.quantity = $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[2]).val());
    $configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$ = $(this).find(".container_size_quantity");
    $allNumber$$ = parseInt($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$.val());
    isNaN($allNumber$$) && $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$).val(1);
    $configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$ = $obj$$.display.find(".container_size_quantity");
    $allNumber$$ = !0;
    for($container_size_module$$1_i$$ = 0;3 > $container_size_module$$1_i$$;$container_size_module$$1_i$$++) {
      if($OneGallonQuantityInt$$1_containerIntVal$$ = parseInt($($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[$container_size_module$$1_i$$]).val()), isNaN($OneGallonQuantityInt$$1_containerIntVal$$) || 0 > $OneGallonQuantityInt$$1_containerIntVal$$) {
        $allNumber$$ = !1
      }
    }
    $allNumber$$ ? ($obj$$.colorProduct.configStatus = "PC", $obj$$.enableNavigation(2)) : $obj$$.disabledState(1);
    $configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
    $configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$ = $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module .configuration_item_tab h5");
    "" != $obj$$.colorProduct.containerSize && ($("#buy_now_page .tab_message-size").text($obj$$.colorProduct.containerSize), $($configuration_item_tab$$3_container_size_quantity$$5_containers_quantity_paintModule$$[1]).text($obj$$.colorProduct.containerSize));
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $obj$$.configLineItemAndImage($obj$$.selColorIndex);
    $obj$$.updatePageHeight("buynow_page")
  };
  this.validateContainerSizeHistory = function $this$validateContainerSizeHistory$($isValidated$$, $selContainerSize$$, $isQtyChange$$) {
    $obj$$.display.find(".container_size_quantity");
    "" != $obj$$.colorProduct.containerSize ? $obj$$.showGenericMessage("Please Note:", $obj$$.dataResetMsg, function() {
      return buyNow.resetContainerSize($isValidated$$, $selContainerSize$$, $isQtyChange$$)
    }, function() {
      return buyNow.cancelSizeChange($selContainerSize$$)
    }) : $obj$$.processContainerSize($isValidated$$, !1, $selContainerSize$$, $isQtyChange$$)
  };
  this.cancelSizeChange = function $this$cancelSizeChange$($selContainerSize$$) {
    var $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity");
    "8oz" == $selContainerSize$$ ? $($container_size_quantity$$[0]).val(0) : "1Gal" == $selContainerSize$$ ? $($container_size_quantity$$[1]).val(0) : $($container_size_quantity$$[2]).val(0)
  };
  this.containerSizeChange = function $this$containerSizeChange$($allNumber$$2_selContainerSize$$7_tabCover$$) {
    var $containerIntVal$$2_container_size_module$$ = $obj$$.display.find(".container_size_module"), $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity");
    $obj$$.display.find(".selectContainerSize");
    var $i$$151_sampleQuantityInt$$ = parseInt($($container_size_quantity$$[0]).val()), $OneGallonQuantityInt$$ = parseInt($($container_size_quantity$$[1]).val()), $FiveGallonQuantityInt$$ = parseInt($($container_size_quantity$$[2]).val());
    "8oz" == $allNumber$$2_selContainerSize$$7_tabCover$$ ? (0 == $i$$151_sampleQuantityInt$$ && $($container_size_quantity$$[0]).val(1), $($container_size_quantity$$[1]).val(0), $($container_size_quantity$$[2]).val(0), $($containerIntVal$$2_container_size_module$$[0]).addClass("orange"), $($containerIntVal$$2_container_size_module$$[1]).removeClass("orange"), $($containerIntVal$$2_container_size_module$$[2]).removeClass("orange"), $obj$$.colorProduct.quantity = $($container_size_quantity$$[0]).val(), 
    $($container_size_quantity$$[0]).focus()) : "1Gal" == $allNumber$$2_selContainerSize$$7_tabCover$$ ? ($($container_size_quantity$$[0]).val(0), 0 == $OneGallonQuantityInt$$ && $($container_size_quantity$$[1]).val(1), $($containerIntVal$$2_container_size_module$$[0]).removeClass("orange"), $($containerIntVal$$2_container_size_module$$[1]).addClass("orange"), $obj$$.colorProduct.quantity = $($container_size_quantity$$[1]).val(), $($container_size_quantity$$[1]).focus()) : "5Gal" == $allNumber$$2_selContainerSize$$7_tabCover$$ && 
    ($($container_size_quantity$$[0]).val(0), 0 == $FiveGallonQuantityInt$$ && $($container_size_quantity$$[2]).val(1), $($containerIntVal$$2_container_size_module$$[2]).addClass("orange"), $obj$$.colorProduct.quantity = $($container_size_quantity$$[2]).val(), $($container_size_quantity$$[2]).focus());
    for($i$$151_sampleQuantityInt$$ = 0;3 > $i$$151_sampleQuantityInt$$;$i$$151_sampleQuantityInt$$++) {
      0 == parseInt($($container_size_quantity$$[$i$$151_sampleQuantityInt$$]).val()) ? $($containerIntVal$$2_container_size_module$$[$i$$151_sampleQuantityInt$$]).removeClass("orange") : $($containerIntVal$$2_container_size_module$$[$i$$151_sampleQuantityInt$$]).addClass("orange")
    }
    $obj$$.colorProduct.containerSize = $allNumber$$2_selContainerSize$$7_tabCover$$;
    "8oz" == $allNumber$$2_selContainerSize$$7_tabCover$$ && ($obj$$.colorProduct.oneGalQty = 0, $obj$$.colorProduct.oneGalOmsId = "");
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $obj$$.configLineItemAndImage($obj$$.selColorIndex);
    $obj$$.updatePageHeight("buynow_page");
    $allNumber$$2_selContainerSize$$7_tabCover$$ = $("#sheenTabCover");
    "8oz" == $obj$$.colorProduct.containerSize ? ($($allNumber$$2_selContainerSize$$7_tabCover$$).show(), $obj$$.colorProduct.isSheen = !1) : ($($allNumber$$2_selContainerSize$$7_tabCover$$).hide(), $obj$$.colorProduct.isSheen = !0);
    $allNumber$$2_selContainerSize$$7_tabCover$$ = !0;
    for($i$$151_sampleQuantityInt$$ = 0;3 > $i$$151_sampleQuantityInt$$;$i$$151_sampleQuantityInt$$++) {
      if($containerIntVal$$2_container_size_module$$ = parseInt($($container_size_quantity$$[$i$$151_sampleQuantityInt$$]).val()), isNaN($containerIntVal$$2_container_size_module$$) || 0 > $containerIntVal$$2_container_size_module$$) {
        $allNumber$$2_selContainerSize$$7_tabCover$$ = !1
      }
    }
    $allNumber$$2_selContainerSize$$7_tabCover$$ ? ($obj$$.colorProduct.configStatus = "PC", $obj$$.enableNavigation(2)) : $obj$$.disabledState(1)
  };
  this.validateContainerSize = function $this$validateContainerSize$($selContainerSize$$, $isQtyChange$$) {
    $obj$$.display.find(".container_size_module");
    $obj$$.display.find(".container_size_quantity");
    $obj$$.display.find(".selectContainerSize");
    var $isValidated$$ = !1;
    "" != $obj$$.colorProduct.behrBrand && 0 == $obj$$.colorProduct.oneGalQty ? this.validateContainerSizeHistory(!0, $selContainerSize$$, $isQtyChange$$) : this.processContainerSize($isValidated$$, !0, $selContainerSize$$, $isQtyChange$$)
  };
  this.containerSizeOnClick = function $this$containerSizeOnClick$($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$) {
    if("" != $container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$) {
      $obj$$.validateContainerSize($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$, !1);
      $container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$ = $("#sheenTabCover");
      "8oz" == $obj$$.colorProduct.containerSize ? ($($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$).show(), $obj$$.colorProduct.isSheen = !1) : ($($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$).hide(), $obj$$.colorProduct.isSheen = !0);
      $container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$ = $(this).find(".container_size_quantity");
      var $allNumber$$3_container_size_quantityInt$$ = parseInt($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$.val());
      isNaN($allNumber$$3_container_size_quantityInt$$) && $($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$).val(1);
      $container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$ = $obj$$.display.find(".container_size_quantity");
      for(var $allNumber$$3_container_size_quantityInt$$ = !0, $i$$ = 0;3 > $i$$;$i$$++) {
        var $containerIntVal$$ = parseInt($($container_size_quantity$$10_containers_quantity$$1_selContainerSize$$9_tabCover$$[$i$$]).val());
        if(isNaN($containerIntVal$$) || 0 > $containerIntVal$$) {
          $allNumber$$3_container_size_quantityInt$$ = !1
        }
      }
      $allNumber$$3_container_size_quantityInt$$ ? ($obj$$.colorProduct.configStatus = "PC", $obj$$.enableNavigation(2)) : $obj$$.disabledState(1)
    }
    $obj$$.adjustSummaryBox($obj$$.selColorIndex)
  };
  this.validateSelection = function $this$validateSelection$($selectedSurface$$, $selectedContainerSize$$, $selectedBehrBrand$$, $selectedSheen$$) {
    var $productObj$$, $isSelectionValid$$ = !1;
    "8oz" == $selectedContainerSize$$ && ($selectedSurface$$ = "");
    if(0 < this.avlAttrbInfoArr.length) {
      for(var $i$$ = 0;$i$$ < this.avlAttrbInfoArr.length;$i$$++) {
        $productObj$$ = this.avlAttrbInfoArr[$i$$];
        if("" != $selectedSurface$$) {
          if($selectedSurface$$ == $productObj$$.surface) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if("" != $selectedContainerSize$$) {
          if($selectedContainerSize$$ == $productObj$$.size) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if("" != $selectedBehrBrand$$) {
          if($selectedBehrBrand$$ == $productObj$$.product) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if("" != $selectedSheen$$) {
          if($selectedSheen$$ == $productObj$$.sheen) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if(!0 == $isSelectionValid$$ && ("" == $selectedContainerSize$$ || $selectedContainerSize$$ == $productObj$$.size) && ("" == $selectedSurface$$ || $selectedSurface$$ == $productObj$$.surface) && ("" == $selectedBehrBrand$$ || $selectedBehrBrand$$ == $productObj$$.product) && ("" == $selectedSheen$$ || $selectedSheen$$ == $productObj$$.sheen)) {
          "" != $selectedContainerSize$$ && "" != $selectedSurface$$ && "" != $selectedBehrBrand$$ && "" != $selectedSheen$$ ? this.productSelected = $productObj$$ : "8oz" == $selectedContainerSize$$ && "" != $selectedBehrBrand$$ && (this.productSelected = $productObj$$);
          break
        }
      }
    }
    return $isSelectionValid$$
  };
  this.resetIntExt = function $this$resetIntExt$($changedSurface$$) {
    var $int_ext_module$$1_newColorProduct$$ = new ColorProduct;
    $obj$$.colorProduct = $int_ext_module$$1_newColorProduct$$;
    $obj$$.colorProduct.surface = $changedSurface$$;
    $obj$$.colorProduct.isConfigStarted = !0;
    $obj$$.colorProduct.configStatus = "PC";
    $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
    $obj$$.enableNavigation(1);
    $obj$$.initTabs($obj$$.selColorIndex);
    $int_ext_module$$1_newColorProduct$$ = $obj$$.display.find(".int_ext_module");
    $($int_ext_module$$1_newColorProduct$$).removeClass("orange");
    "interior" == $changedSurface$$ ? $($int_ext_module$$1_newColorProduct$$[0]).addClass("orange") : $($int_ext_module$$1_newColorProduct$$[1]).addClass("orange");
    $obj$$.validateAddToCart();
    $("#buy_now_page .tab_message-int_ext").text($obj$$.colorProduct.surface);
    $obj$$.updatePageHeight()
  };
  $obj$$.display.find(".int_ext_module").on("click", function($configuration_item_tab$$4_e$$245_paintModule$$) {
    if("undefined" != typeof $(this).find(".surface").val() && "" != $(this).find(".surface").val()) {
      $configuration_item_tab$$4_e$$245_paintModule$$ = !0;
      var $changedSurface$$ = $(this).find(".surface").val();
      "" != $obj$$.colorProduct.containerSize && $changedSurface$$ != $obj$$.colorProduct.surface && !$obj$$.validateSelection($changedSurface$$, $obj$$.colorProduct.containerSize, $obj$$.colorProduct.behrBrand, $obj$$.colorProduct.sheen) && ($configuration_item_tab$$4_e$$245_paintModule$$ = !1, $obj$$.showGenericMessage("Please Note:", $obj$$.dataResetMsg, function() {
        return buyNow.resetIntExt($changedSurface$$)
      }, ""));
      if($configuration_item_tab$$4_e$$245_paintModule$$) {
        $("#buy_now_page div.int_ext_module").removeClass("orange");
        $(this).addClass("orange");
        $obj$$.colorProduct.surface = $(this).find(".surface").val();
        $obj$$.colorProduct.isConfigStarted = !0;
        $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
        $("#buy_now_page .tab_message-int_ext").text($obj$$.colorProduct.surface);
        $configuration_item_tab$$4_e$$245_paintModule$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
        $($configuration_item_tab$$4_e$$245_paintModule$$[$obj$$.selColorIndex]).addClass("configured");
        $($configuration_item_tab$$4_e$$245_paintModule$$[$obj$$.selColorIndex]).find(".configuration_item_module .fl-w");
        var $configuration_item_tabs_module$$ = $($configuration_item_tab$$4_e$$245_paintModule$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module");
        $($configuration_item_tabs_module$$).css("display", "none");
        $($configuration_item_tab$$4_e$$245_paintModule$$[$obj$$.selColorIndex]).addClass("configuredAndSelected");
        $configuration_item_tab$$4_e$$245_paintModule$$ = $($configuration_item_tabs_module$$[0]).find(".configuration_item_tab h5");
        $($configuration_item_tab$$4_e$$245_paintModule$$[0]).text($obj$$.colorProduct.surface);
        $obj$$.colorProduct.configStatus = "PC";
        $obj$$.enableNavigation(1);
        $obj$$.updatePageHeight()
      }
    }
  });
  this.initContainerSizeTab = function $this$initContainerSizeTab$() {
    for(var $selectContainerSizeDiv$$ = this.display.find(".selectContainerSize"), $container_size_quantity$$ = $obj$$.display.find(".container_size_quantity"), $sizeSeletion$$ = "Not yet configured", $containerSize$$1_i$$154_tabCover$$ = 0;$containerSize$$1_i$$154_tabCover$$ < $container_size_quantity$$.length;$containerSize$$1_i$$154_tabCover$$++) {
      $($container_size_quantity$$[$containerSize$$1_i$$154_tabCover$$]).val(0), $($container_size_quantity$$[$containerSize$$1_i$$154_tabCover$$]).removeAttr("disabled")
    }
    if(this.avlAttrbInfoArr) {
      if(this.isValidAttrb("containerSize", "8oz") && !this.isNoSales) {
        $containerSize$$1_i$$154_tabCover$$ = $($selectContainerSizeDiv$$[0]).find(".containerSize"), $($containerSize$$1_i$$154_tabCover$$).val("8oz"), $($selectContainerSizeDiv$$[0]).find(".container_size_module").removeAttr("style"), $($($selectContainerSizeDiv$$[0]).find("div.size_unavailable_option")).hide()
      }else {
        var $containerSize$$1_i$$154_tabCover$$ = $($selectContainerSizeDiv$$[0]).find(".containerSize"), $container_size_module$$ = $($selectContainerSizeDiv$$[0]).find(".container_size_module");
        $container_size_module$$.css("cursor", "auto");
        $($($selectContainerSizeDiv$$[0]).find("div.size_unavailable_option")).show();
        $($containerSize$$1_i$$154_tabCover$$).val("");
        $($container_size_quantity$$[0]).attr("disabled", "disabled")
      }
      this.isValidAttrb("containerSize", "1Gal") && !this.isOnlySamples && !this.isNoSales ? ($containerSize$$1_i$$154_tabCover$$ = $($selectContainerSizeDiv$$[1]).find(".containerSize"), $($containerSize$$1_i$$154_tabCover$$).val("1Gal"), $($selectContainerSizeDiv$$[1]).find(".container_size_module").removeAttr("style"), $($($selectContainerSizeDiv$$[1]).find("div.size_unavailable_option")).hide()) : ($containerSize$$1_i$$154_tabCover$$ = $($selectContainerSizeDiv$$[1]).find(".containerSize"), $container_size_module$$ = 
      $($selectContainerSizeDiv$$[1]).find(".container_size_module"), $container_size_module$$.css("cursor", "auto"), $($($selectContainerSizeDiv$$[1]).find("div.size_unavailable_option")).show(), $($containerSize$$1_i$$154_tabCover$$).val(""), $($container_size_quantity$$[1]).attr("disabled", "disabled"));
      this.isValidAttrb("containerSize", "5Gal") && !this.isOnlySamples && !this.isNoSales ? ($containerSize$$1_i$$154_tabCover$$ = $($selectContainerSizeDiv$$[2]).find(".containerSize"), $($containerSize$$1_i$$154_tabCover$$).val("5Gal"), $($selectContainerSizeDiv$$[2]).find(".container_size_module").removeAttr("style"), $($($selectContainerSizeDiv$$[2]).find("div.size_unavailable_option")).hide()) : ($containerSize$$1_i$$154_tabCover$$ = $($selectContainerSizeDiv$$[2]).find(".containerSize"), $container_size_module$$ = 
      $($selectContainerSizeDiv$$[2]).find(".container_size_module"), $container_size_module$$.css("cursor", "auto"), $($($selectContainerSizeDiv$$[2]).find("div.size_unavailable_option")).show(), $($containerSize$$1_i$$154_tabCover$$).val(""), $($container_size_quantity$$[2]).attr("disabled", "disabled"))
    }
    $containerSize$$1_i$$154_tabCover$$ = $("#sheenTabCover")[$obj$$.selColorIndex];
    $($containerSize$$1_i$$154_tabCover$$).hide();
    $("div.container_size_module").removeClass("orange");
    "8oz" == this.colorProduct.containerSize ? ($($selectContainerSizeDiv$$[0]).find(".container_size_module").addClass("orange"), $($container_size_quantity$$[0]).val(this.colorProduct.quantity), $sizeSeletion$$ = "8oz", $($containerSize$$1_i$$154_tabCover$$).show(), $obj$$.enableNavigation(2)) : "1Gal" == this.colorProduct.containerSize ? (0 != this.colorProduct.oneGalQty ? ($($selectContainerSizeDiv$$[1]).find(".container_size_module").addClass("orange"), $($selectContainerSizeDiv$$[2]).find(".container_size_module").addClass("orange"), 
    $($container_size_quantity$$[1]).val(this.colorProduct.oneGalQty), $($container_size_quantity$$[2]).val(this.colorProduct.quantity), $sizeSeletion$$ = "1Gal & 5Gal") : ($($selectContainerSizeDiv$$[1]).find(".container_size_module").addClass("orange"), $($container_size_quantity$$[1]).val(this.colorProduct.quantity), $sizeSeletion$$ = "1Gal"), $obj$$.enableNavigation(2)) : "5Gal" == this.colorProduct.containerSize && (0 != this.colorProduct.oneGalQty ? ($($selectContainerSizeDiv$$[1]).find(".container_size_module").addClass("orange"), 
    $($selectContainerSizeDiv$$[2]).find(".container_size_module").addClass("orange"), $($container_size_quantity$$[1]).val(this.colorProduct.oneGalQty), $($container_size_quantity$$[2]).val(this.colorProduct.quantity), $sizeSeletion$$ = "1Gal & 5Gal") : ($($selectContainerSizeDiv$$[2]).find(".container_size_module").addClass("orange"), $($container_size_quantity$$[2]).val(this.colorProduct.quantity), $sizeSeletion$$ = "5Gal"), $obj$$.enableNavigation(2));
    this.display.find(".tab_message-size").text($sizeSeletion$$)
  };
  this.initBrandTab = function $this$initBrandTab$() {
    var $brandName$$ = this.display.find(".selectBrand");
    $("div.brand_unavailable_option").hide();
    var $brandIntDiscription_selectedBrand$$ = this.display.find("ul.interior"), $brandExtDiscription$$ = this.display.find("ul.exterior");
    $($brandIntDiscription_selectedBrand$$).hide();
    $($brandExtDiscription$$).hide();
    if(this.avlAttrbInfoArr && (this.isValidAttrb("behrBrand", "MQ") && !this.isNoSales ? ($($brandName$$[0]).removeAttr("style"), $($($brandName$$[0]).find(".brand")).val("MQ"), $($("div.brand_module")[0]).addClass("hover_background")) : ($($("div.brand_module")[0]).css("cursor", "auto"), $($($brandName$$[0]).find("div.brand_unavailable_option")).show(), $($($brandName$$[0]).find(".brand")).val(""), $($("div.brand_module")[0]).removeClass("hover_background")), this.isValidAttrb("behrBrand", "UL") && 
    !this.isNoSales ? ($($brandName$$[1]).removeAttr("style"), $($($brandName$$[1]).find(".brand")).val("UL"), $($("div.brand_module")[1]).addClass("hover_background")) : ($($("div.brand_module")[1]).css("cursor", "auto"), $($($brandName$$[1]).find("div.brand_unavailable_option")).show(), $($($brandName$$[1]).find(".brand")).val(""), $($("div.brand_module")[1]).removeClass("hover_background")), this.isValidAttrb("behrBrand", "PP") && !this.isNoSales ? ($($brandName$$[2]).removeAttr("style"), $($($brandName$$[2]).find(".brand")).val("PP"), 
    $($("div.brand_module")[2]).addClass("hover_background")) : ($($("div.brand_module")[2]).css("cursor", "auto"), $($($brandName$$[2]).find("div.brand_unavailable_option")).show(), $($($brandName$$[2]).find(".brand")).val(""), $($("div.brand_module")[2]).removeClass("hover_background")), "interior" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? $($brandIntDiscription_selectedBrand$$).show() : $($brandExtDiscription$$).show(), $("div.brand_module").removeClass("orange"), 
    $brandIntDiscription_selectedBrand$$ = $obj$$.userSelInfoArr[$obj$$.selColorIndex].behrBrand, "undefined" != typeof $brandIntDiscription_selectedBrand$$)) {
      var $brandName$$ = "", $configuration_item_tab$$5_paintModule$$8_selectedDiv$$;
      "MQ" == $brandIntDiscription_selectedBrand$$ ? ($brandName$$ = "Marquee", $configuration_item_tab$$5_paintModule$$8_selectedDiv$$ = $("div.brand_module")[0]) : "UL" == $brandIntDiscription_selectedBrand$$ ? ($brandName$$ = "Premium Plus Ultra", $configuration_item_tab$$5_paintModule$$8_selectedDiv$$ = $("div.brand_module")[1]) : "PP" == $brandIntDiscription_selectedBrand$$ && ($brandName$$ = "Premium Plus", $configuration_item_tab$$5_paintModule$$8_selectedDiv$$ = $("div.brand_module")[2]);
      $($configuration_item_tab$$5_paintModule$$8_selectedDiv$$).addClass("orange");
      "" != $brandName$$ && $("#buy_now_page .tab_message-brand").text($brandName$$);
      $configuration_item_tab$$5_paintModule$$8_selectedDiv$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
      $configuration_item_tab$$5_paintModule$$8_selectedDiv$$ = $($configuration_item_tab$$5_paintModule$$8_selectedDiv$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module .configuration_item_tab h5");
      "" != $brandName$$ && $($configuration_item_tab$$5_paintModule$$8_selectedDiv$$[2]).text($brandName$$)
    }
  };
  this.validateSheens = function $this$validateSheens$() {
    var $match$$ = !0, $brandMap$$ = [];
    $brandMap$$.push(["MQ", !1]);
    $brandMap$$.push(["UL", !1]);
    $brandMap$$.push(["PP", !1]);
    for(var $i$$ = 0;$i$$ < $brandMap$$.length;$i$$++) {
      this.validateSelection(this.colorProduct.surface, "1Gal", $brandMap$$[$i$$][0], "") && this.validateSelection(this.colorProduct.surface, "5Gal", $brandMap$$[$i$$][0], "") ? $brandMap$$[$i$$][1] = !0 : $brandMap$$[$i$$][1] = !1
    }
    for($i$$ = 0;$i$$ < $brandMap$$.length;$i$$++) {
      if($brandMap$$[$i$$][1] && $match$$) {
        for(var $j$$ = 0;$j$$ < $obj$$.avlAttrbInfoArr.length;$j$$++) {
          if($obj$$.avlAttrbInfoArr[$j$$].product == $brandMap$$[$i$$][0]) {
            if(this.isSheenCommon($obj$$.userSelInfoArr[this.selColorIndex].surface, $brandMap$$[$i$$][0], $obj$$.avlAttrbInfoArr[$j$$].sheen)) {
              $match$$ = !0;
              break
            }else {
              $match$$ = !1
            }
          }
        }
      }
    }
    return $match$$
  };
  this.isSheenCommon = function $this$isSheenCommon$($surface$$, $brand$$, $sheen$$) {
    for(var $in1gal$$ = !1, $in5gal$$ = !1, $j$$ = 0;$j$$ < $obj$$.avlAttrbInfoArr.length;$j$$++) {
      $obj$$.avlAttrbInfoArr[$j$$].surface == $surface$$ && ("1Gal" == $obj$$.avlAttrbInfoArr[$j$$].size && $obj$$.avlAttrbInfoArr[$j$$].product == $brand$$ && $obj$$.avlAttrbInfoArr[$j$$].sheen == $sheen$$) && ($in1gal$$ = !0), $obj$$.avlAttrbInfoArr[$j$$].surface == $surface$$ && ("5Gal" == $obj$$.avlAttrbInfoArr[$j$$].size && $obj$$.avlAttrbInfoArr[$j$$].product == $brand$$ && $obj$$.avlAttrbInfoArr[$j$$].sheen == $sheen$$) && ($in5gal$$ = !0)
    }
    return $in1gal$$ && $in5gal$$ ? !0 : !1
  };
  this.initSheenTab = function $this$initSheenTab$() {
    var $j$$ = $obj$$.display.find(".sheen_module"), $configuration_item_tab$$6_nextButton_paintModule$$ = [];
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["matte", !1]);
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["flat", !1]);
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["flat-enamel", !1]);
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["eggshell", !1]);
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["satin", !1]);
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["semi-gloss", !1]);
    $configuration_item_tab$$6_nextButton_paintModule$$.push(["hi-gloss", !1]);
    $($j$$).remove();
    for(i = 0;i < $obj$$.avlAttrbInfoArr.length;i++) {
      if($obj$$.avlAttrbInfoArr[i].surface == $obj$$.userSelInfoArr[this.selColorIndex].surface && $obj$$.avlAttrbInfoArr[i].size == $obj$$.userSelInfoArr[this.selColorIndex].containerSize && $obj$$.avlAttrbInfoArr[i].product == $obj$$.userSelInfoArr[this.selColorIndex].behrBrand && !this.isNoSales) {
        if(0 != $obj$$.colorProduct.oneGalQty && "5Gal" == $obj$$.userSelInfoArr[this.selColorIndex].containerSize) {
          if(this.isSheenCommon($obj$$.userSelInfoArr[this.selColorIndex].surface, $obj$$.userSelInfoArr[this.selColorIndex].behrBrand, $obj$$.avlAttrbInfoArr[i].sheen)) {
            for($j$$ = 0;$j$$ < $configuration_item_tab$$6_nextButton_paintModule$$.length;$j$$++) {
              if($configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0] == $obj$$.avlAttrbInfoArr[i].sheen) {
                $configuration_item_tab$$6_nextButton_paintModule$$[$j$$][1] = !0;
                break
              }
            }
          }
        }else {
          for($j$$ = 0;$j$$ < $configuration_item_tab$$6_nextButton_paintModule$$.length;$j$$++) {
            if($configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0] == $obj$$.avlAttrbInfoArr[i].sheen) {
              $configuration_item_tab$$6_nextButton_paintModule$$[$j$$][1] = !0;
              break
            }
          }
        }
      }
    }
    for($j$$ = 0;$j$$ < $configuration_item_tab$$6_nextButton_paintModule$$.length;$j$$++) {
      if($configuration_item_tab$$6_nextButton_paintModule$$[$j$$][1]) {
        var $sheenSelection$$ = $obj$$.sheenSelectionTemplate.clone();
        "interior" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? "UL" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].behrBrand && 1 == $j$$ ? $sheenSelection$$.find(".fl h4").text("Matte") : $sheenSelection$$.find(".fl h4").text($intSheenNamesMap$$[$configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]][0]) : $sheenSelection$$.find(".fl h4").text($extSheenNamesMap$$[$configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]][0]);
        $sheenSelection$$[0].id = $configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0];
        var $line0_sheenModuleImage$$ = $sheenSelection$$.find(".fl ul")[0].children[0], $imageUrl_line1$$ = $sheenSelection$$.find(".fl ul")[0].children[1], $line2$$ = $sheenSelection$$.find(".fl ul")[0].children[2], $oneGallonPrice$$ = this.getUnitPrice($obj$$.userSelInfoArr[this.selColorIndex].surface, "1Gal", $obj$$.userSelInfoArr[this.selColorIndex].behrBrand, $configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]), $fiveGallonPrice$$ = this.getUnitPrice($obj$$.userSelInfoArr[this.selColorIndex].surface, 
        "5Gal", $obj$$.userSelInfoArr[this.selColorIndex].behrBrand, $configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]);
        "undefined" != typeof $oneGallonPrice$$ && "undefined" != typeof $fiveGallonPrice$$ ? $($line0_sheenModuleImage$$).text("$" + $oneGallonPrice$$ + " ea. (1Gal) / $" + $fiveGallonPrice$$ + " ea. (5Gal)") : "undefined" == typeof $oneGallonPrice$$ ? ($($line0_sheenModuleImage$$).text("$" + $fiveGallonPrice$$ + " ea. (5Gal)"), $($line0_sheenModuleImage$$).css("width", "100px")) : "undefined" == typeof $fiveGallonPrice$$ && ($($line0_sheenModuleImage$$).text("$" + $oneGallonPrice$$ + " ea. (1Gal)"), 
        $($line0_sheenModuleImage$$).css("width", "200px"));
        "interior" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? ($($imageUrl_line1$$).text($intSheenNamesMap$$[$configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]][2]), $($line2$$).text($intSheenNamesMap$$[$configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]][3])) : ($($imageUrl_line1$$).text($extSheenNamesMap$$[$configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]][2]), $($line2$$).text($extSheenNamesMap$$[$configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0]][3]));
        $line0_sheenModuleImage$$ = $sheenSelection$$.find(".sheen_module_image");
        $imageUrl_line1$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/sheens/sheen_labels/" + $obj$$.userSelInfoArr[this.selColorIndex].surface.toLowerCase() + "_" + $obj$$.userSelInfoArr[this.selColorIndex].behrBrand.toLowerCase() + "_" + $configuration_item_tab$$6_nextButton_paintModule$$[$j$$][0].toLowerCase() + ".jpg";
        $($line0_sheenModuleImage$$).css("background-image", "url(" + $imageUrl_line1$$ + ")");
        $obj$$.sheenAttributeTab.append($sheenSelection$$)
      }
    }
    "undefined" != typeof $obj$$.userSelInfoArr[$obj$$.selColorIndex].sheen && "" != $obj$$.userSelInfoArr[$obj$$.selColorIndex].sheen && ($("#" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].sheen).addClass("orange"), "interior" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? "" != $intSheenNamesMap$$[$obj$$.colorProduct.sheen][0] && ("UL" == $obj$$.colorProduct.behrBrand && "flat" == $obj$$.colorProduct.sheen ? $("#buy_now_page .tab_message-sheen").text("Matte") : $("#buy_now_page .tab_message-sheen").text($intSheenNamesMap$$[$obj$$.colorProduct.sheen][0])) : 
    "" != $extSheenNamesMap$$[$obj$$.colorProduct.sheen][0] && $("#buy_now_page .tab_message-sheen").text($extSheenNamesMap$$[$obj$$.colorProduct.sheen][0]), $configuration_item_tab$$6_nextButton_paintModule$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module"), $configuration_item_tab$$6_nextButton_paintModule$$ = $($configuration_item_tab$$6_nextButton_paintModule$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module .configuration_item_tab h5"), "interior" == 
    $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? "UL" == $obj$$.colorProduct.behrBrand && "flat" == $obj$$.colorProduct.sheen ? $($configuration_item_tab$$6_nextButton_paintModule$$[3]).text("Matte") : $($configuration_item_tab$$6_nextButton_paintModule$$[3]).text($intSheenNamesMap$$[$obj$$.colorProduct.sheen][0]) : $($configuration_item_tab$$6_nextButton_paintModule$$[3]).text($extSheenNamesMap$$[$obj$$.colorProduct.sheen][0]), $obj$$.setLineItemPrice($obj$$.selColorIndex));
    $configuration_item_tab$$6_nextButton_paintModule$$ = $obj$$.display.find(".orange_button-next.orange_button-sheen_module");
    $($configuration_item_tab$$6_nextButton_paintModule$$).css("width", "200px");
    "rgb(250,218,0)" === $(".buynow_finish_orange_button").css("background-color").replace(/\s+/g, "") ? $($configuration_item_tab$$6_nextButton_paintModule$$).html('<span class="toUpperCase" style="color:rgb(0,0,0);">DONE WITH THIS COLOR</span>&nbsp;&nbsp;<div class="arr"></div>') : $($configuration_item_tab$$6_nextButton_paintModule$$).html('<span class="toUpperCase">Done with this color</span>&nbsp;&nbsp;<div class="arr"></div>');
    $obj$$.display.find(".sheen_module").on("click", function($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$) {
      $("div.sheen_module").removeClass("orange");
      $(this).addClass("orange");
      $obj$$.colorProduct.sheen = $(this).attr("id");
      $obj$$.colorProduct.oneGalOmsId = "";
      $obj$$.colorProduct.omsId = "";
      $configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$ = $obj$$.display.find(".single_summary_can")[$obj$$.selColorIndex];
      var $doubleFiveGallonImage$$2_doubleSummaryCanImages$$ = $($obj$$.display.find(".double_summary_can")[$obj$$.selColorIndex]).children(), $doubleOneGallonImage$$ = $($doubleFiveGallonImage$$2_doubleSummaryCanImages$$)[0], $doubleFiveGallonImage$$2_doubleSummaryCanImages$$ = $($doubleFiveGallonImage$$2_doubleSummaryCanImages$$)[1], $oneGallonCanImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/1gal/" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() + 
      "_" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].behrBrand.toLowerCase() + "_" + $obj$$.colorProduct.sheen.toLowerCase() + ".png", $fiveGallonCanImageUrl$$ = IMAGE_ROOT + "/cma/Behr_Assets/Consumer/Paint_Color/css/images/cancuts/5gal/" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() + "_" + $obj$$.userSelInfoArr[$obj$$.selColorIndex].behrBrand.toLowerCase() + "_" + $obj$$.colorProduct.sheen.toLowerCase() + ".png";
      $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$).is(":visible") ? "1Gal" == $obj$$.colorProduct.containerSize ? ($obj$$.colorProduct.omsId = $obj$$.getOMSID($obj$$.colorProduct.surface, "1Gal", $obj$$.colorProduct.behrBrand, $obj$$.colorProduct.sheen), $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$).css("background-image", "url(" + $oneGallonCanImageUrl$$ + ")")) : "5Gal" == $obj$$.colorProduct.containerSize && ($obj$$.colorProduct.omsId = $obj$$.getOMSID($obj$$.colorProduct.surface, 
      "5Gal", $obj$$.colorProduct.behrBrand, $obj$$.colorProduct.sheen), $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$).css("background-image", "url(" + $fiveGallonCanImageUrl$$ + ")")) : ($obj$$.colorProduct.oneGalOmsId = $obj$$.getOMSID($obj$$.colorProduct.surface, "1Gal", $obj$$.colorProduct.behrBrand, $obj$$.colorProduct.sheen), $obj$$.colorProduct.omsId = $obj$$.getOMSID($obj$$.colorProduct.surface, "5Gal", $obj$$.colorProduct.behrBrand, $obj$$.colorProduct.sheen), $($doubleOneGallonImage$$).css("background-image", 
      "url(" + $oneGallonCanImageUrl$$ + ")"), $($doubleFiveGallonImage$$2_doubleSummaryCanImages$$).css("background-image", "url(" + $fiveGallonCanImageUrl$$ + ")"));
      $obj$$.userSelInfoArr[$obj$$.selColorIndex] = $obj$$.colorProduct;
      "interior" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? "UL" == $obj$$.colorProduct.behrBrand && "flat" == $obj$$.colorProduct.sheen ? $("#buy_now_page .tab_message-sheen").text("Matte") : $("#buy_now_page .tab_message-sheen").text($intSheenNamesMap$$[$obj$$.colorProduct.sheen][0]) : $("#buy_now_page .tab_message-sheen").text($extSheenNamesMap$$[$obj$$.colorProduct.sheen][0]);
      $configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$ = $obj$$.display.find(".configuration-content-paints .configuration_paint_module");
      $configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$ = $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$[$obj$$.selColorIndex]).find(".configuration_item_tabs_module .configuration_item_tab h5");
      "interior" == $obj$$.userSelInfoArr[$obj$$.selColorIndex].surface.toLowerCase() ? "UL" == $obj$$.colorProduct.behrBrand && "flat" == $obj$$.colorProduct.sheen ? $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$[3]).text("Matte") : $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$[3]).text($intSheenNamesMap$$[$obj$$.colorProduct.sheen][0]) : $($configuration_item_tab$$7_e$$246_paintModule$$10_summaryCanImage$$[3]).text($extSheenNamesMap$$[$obj$$.colorProduct.sheen][0]);
      $obj$$.setLineItemPrice($obj$$.selColorIndex);
      $obj$$.colorProduct.configStatus = "FC";
      $obj$$.enableNavigation(4);
      $obj$$.adjustSummaryBox($obj$$.selColorIndex)
    })
  };
  this.getOMSID = function $this$getOMSID$($surface$$, $size$$, $brand$$, $sheen$$) {
    var $rtnOMSID$$ = null;
    if(null == $sheen$$) {
      for(i = 0;i < $obj$$.avlAttrbInfoArr.length;i++) {
        if($obj$$.avlAttrbInfoArr[i].size == $size$$ && $obj$$.avlAttrbInfoArr[i].product == $brand$$) {
          $rtnOMSID$$ = $obj$$.avlAttrbInfoArr[i].omsId;
          break
        }
      }
    }else {
      for(i = 0;i < $obj$$.avlAttrbInfoArr.length;i++) {
        if($obj$$.avlAttrbInfoArr[i].surface == $surface$$ && $obj$$.avlAttrbInfoArr[i].size == $size$$ && $obj$$.avlAttrbInfoArr[i].product == $brand$$ && $obj$$.avlAttrbInfoArr[i].sheen == $sheen$$) {
          $rtnOMSID$$ = $obj$$.avlAttrbInfoArr[i].omsId;
          break
        }
      }
    }
    return $rtnOMSID$$
  };
  this.validateSelection = function $this$validateSelection$($selectedSurface$$, $selectedContainerSize$$, $selectedBehrBrand$$, $selectedSheen$$) {
    var $productObj$$, $isSelectionValid$$ = !1;
    "8oz" == $selectedContainerSize$$ && ($selectedSurface$$ = "");
    if(0 < this.avlAttrbInfoArr.length) {
      for(var $i$$ = 0;$i$$ < this.avlAttrbInfoArr.length;$i$$++) {
        $productObj$$ = this.avlAttrbInfoArr[$i$$];
        if("" != $selectedSurface$$) {
          if($selectedSurface$$ == $productObj$$.surface) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if("" != $selectedContainerSize$$) {
          if($selectedContainerSize$$ == $productObj$$.size) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if("" != $selectedBehrBrand$$) {
          if($selectedBehrBrand$$ == $productObj$$.product) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if("" != $selectedSheen$$) {
          if($selectedSheen$$ == $productObj$$.sheen) {
            $isSelectionValid$$ = !0
          }else {
            $isSelectionValid$$ = !1;
            continue
          }
        }
        if(!0 == $isSelectionValid$$ && ("" == $selectedContainerSize$$ || $selectedContainerSize$$ == $productObj$$.size) && ("" == $selectedSurface$$ || $selectedSurface$$ == $productObj$$.surface) && ("" == $selectedBehrBrand$$ || $selectedBehrBrand$$ == $productObj$$.product) && ("" == $selectedSheen$$ || $selectedSheen$$ == $productObj$$.sheen)) {
          "" != $selectedContainerSize$$ && "" != $selectedSurface$$ && "" != $selectedBehrBrand$$ && "" != $selectedSheen$$ ? this.productSelected = $productObj$$ : "8oz" == $selectedContainerSize$$ && "" != $selectedBehrBrand$$ && (this.productSelected = $productObj$$);
          break
        }
      }
    }
    return $isSelectionValid$$
  };
  this.isValidAttrb = function $this$isValidAttrb$($attrbName$$, $attrbVal$$) {
    var $attrbFlag$$ = !1;
    switch($attrbName$$) {
      case "surface":
        $attrbFlag$$ = this.validateSelection($attrbVal$$, "", "", "");
        break;
      case "containerSize":
        $attrbFlag$$ = this.validateSelection(this.colorProduct.surface, $attrbVal$$, "", "");
        break;
      case "behrBrand":
        $attrbFlag$$ = this.validateSelection(this.colorProduct.surface, this.colorProduct.containerSize, $attrbVal$$, "");
        break;
      case "sheen":
        $attrbFlag$$ = this.validateSelection(this.colorProduct.surface, this.colorProduct.containerSize, this.colorProduct.behrBrand, $attrbVal$$);
        break;
      default:
        $attrbFlag$$ = this.validateSelection(this.colorProduct.surface, this.colorProduct.containerSize, this.colorProduct.behrBrand, this.colorProduct.sheen)
    }
    return $attrbFlag$$
  };
  this.configAllColorSummaryBoxes = function $this$configAllColorSummaryBoxes$() {
    for(var $configuration_paint_module$$ = this.display.find(".configuration_paint_module"), $colorIndex$$ = 0;$colorIndex$$ < this.userSelInfoArr.length;$colorIndex$$++) {
      if("undefined" != typeof this.userSelInfoArr[$colorIndex$$]) {
        if("FC" == $obj$$.userSelInfoArr[$colorIndex$$].configStatus) {
          $($configuration_paint_module$$[$colorIndex$$]).addClass("orange");
          var $configuration_item_tabs_module$$ = $($configuration_paint_module$$[$colorIndex$$]).find(".configuration_item_tabs_module");
          $($configuration_item_tabs_module$$).css("display", "block");
          $($configuration_paint_module$$[$colorIndex$$]).removeClass("configuredAndSelected")
        }else {
          "PC" == $obj$$.userSelInfoArr[$colorIndex$$].configStatus ? ($($configuration_paint_module$$[$colorIndex$$]).removeClass("orange"), $configuration_item_tabs_module$$ = $($configuration_paint_module$$[$colorIndex$$]).find(".configuration_item_tabs_module"), $($configuration_item_tabs_module$$).css("display", "block"), $($configuration_paint_module$$[$colorIndex$$]).removeClass("configuredAndSelected")) : $($configuration_paint_module$$[$colorIndex$$]).removeClass("orange")
        }
      }
    }
  };
  this.initiateColorSummary = function $this$initiateColorSummary$($colorIndex$$8_configuration_item_tab$$) {
    var $configuration_paint_module$$2_selectedBrand$$ = $obj$$.display.find(".configuration_paint_module"), $currentColorProduct$$ = $obj$$.userSelInfoArr[$colorIndex$$8_configuration_item_tab$$];
    if($currentColorProduct$$.isConfigStarted && "NA" != $currentColorProduct$$.configStatus) {
      $($configuration_paint_module$$2_selectedBrand$$[$colorIndex$$8_configuration_item_tab$$]).addClass("configured");
      $($configuration_paint_module$$2_selectedBrand$$[$colorIndex$$8_configuration_item_tab$$]).find(".configuration_item_module .fl-w");
      $obj$$.adjustSummaryBox($colorIndex$$8_configuration_item_tab$$);
      var $brandName$$3_configuration_item_tabs_module$$ = $($configuration_paint_module$$2_selectedBrand$$[$colorIndex$$8_configuration_item_tab$$]).find(".configuration_item_tabs_module");
      $($brandName$$3_configuration_item_tabs_module$$).css("display", "none");
      $($configuration_paint_module$$2_selectedBrand$$[$obj$$.selColorIndex]).addClass("configuredAndSelected")
    }
    $($configuration_paint_module$$2_selectedBrand$$[$colorIndex$$8_configuration_item_tab$$]).removeClass("orange");
    $brandName$$3_configuration_item_tabs_module$$ = $($configuration_paint_module$$2_selectedBrand$$[$colorIndex$$8_configuration_item_tab$$]).find(".configuration_item_tabs_module");
    $colorIndex$$8_configuration_item_tab$$ = $($brandName$$3_configuration_item_tabs_module$$[0]).find(".configuration_item_tab h5");
    "" != $currentColorProduct$$.surface ? $($colorIndex$$8_configuration_item_tab$$[0]).text($currentColorProduct$$.surface) : $($colorIndex$$8_configuration_item_tab$$[0]).text("Not Yet Configured");
    "" != $currentColorProduct$$.containerSize ? "" != $currentColorProduct$$.oneGalOmsId ? $($colorIndex$$8_configuration_item_tab$$[1]).text("1Gal & 5Gal") : $($colorIndex$$8_configuration_item_tab$$[1]).text($currentColorProduct$$.containerSize) : $($colorIndex$$8_configuration_item_tab$$[1]).text("Not Yet Configured");
    "" != $currentColorProduct$$.behrBrand ? ($configuration_paint_module$$2_selectedBrand$$ = $currentColorProduct$$.behrBrand, $brandName$$3_configuration_item_tabs_module$$ = "", "PP" == $configuration_paint_module$$2_selectedBrand$$ ? $brandName$$3_configuration_item_tabs_module$$ = "Premium Plus" : "UL" == $configuration_paint_module$$2_selectedBrand$$ ? $brandName$$3_configuration_item_tabs_module$$ = "Premium Plus Ultra" : "MQ" == $configuration_paint_module$$2_selectedBrand$$ && ($brandName$$3_configuration_item_tabs_module$$ = 
    "Marquee"), "" != $brandName$$3_configuration_item_tabs_module$$ && $($colorIndex$$8_configuration_item_tab$$[2]).text($brandName$$3_configuration_item_tabs_module$$)) : $($colorIndex$$8_configuration_item_tab$$[2]).text("Not Yet Configured");
    "" != $currentColorProduct$$.sheen ? "interior" == $currentColorProduct$$.surface && "UL" == $currentColorProduct$$.behrBrand && "flat" == $currentColorProduct$$.sheen ? $($colorIndex$$8_configuration_item_tab$$[3]).text("Matte") : $($colorIndex$$8_configuration_item_tab$$[3]).text($currentColorProduct$$.sheen) : $($colorIndex$$8_configuration_item_tab$$[3]).text("Not Yet Configured")
  };
  this.adjustSummaryBox = function $this$adjustSummaryBox$($configuration_item_tabs_module$$3_idx$$) {
    var $paintModule$$ = $obj$$.display.find(".configuration_paint_module"), $item_module_name$$ = $($paintModule$$[$configuration_item_tabs_module$$3_idx$$]).find(".configuration_item_module"), $cancut_color_nameId_hgt$$ = $($item_module_name$$).find(".summary_can_image"), $can_image_hgt$$ = null, $isContainer$$ = !1;
    $($cancut_color_nameId_hgt$$[0]).is(":visible") ? ($can_image_hgt$$ = $($cancut_color_nameId_hgt$$[0]).outerHeight(!0), $isContainer$$ = !0) : $($cancut_color_nameId_hgt$$[1]).is(":visible") ? ($can_image_hgt$$ = $($cancut_color_nameId_hgt$$[1]).outerHeight(!0), $isContainer$$ = !0) : ($can_image_hgt$$ = 0, $isContainer$$ = !1);
    var $cancut_color_nameId_hgt$$ = $($item_module_name$$).find(".configuration_paint_module_paint_color").find(".paint_color_text_container").outerHeight(!0), $divider_hgt$$ = $($item_module_name$$).find(".configuration_paint_module_divider").outerHeight(!0), $line_item_hgt$$ = $($item_module_name$$).find(".configuration_paint_module_info").outerHeight(!0), $action_hgt_total_hgt$$ = $($item_module_name$$).find(".configuration_paint_module_actions").outerHeight(!0), $action_hgt_total_hgt$$ = parseInt($can_image_hgt$$) + 
    parseInt($cancut_color_nameId_hgt$$) + parseInt($divider_hgt$$) + parseInt($line_item_hgt$$) + parseInt($action_hgt_total_hgt$$);
    $configuration_item_tabs_module$$3_idx$$ = $($paintModule$$[$configuration_item_tabs_module$$3_idx$$]).find(".configuration_item_tabs_module");
    $paintModule$$ = $($configuration_item_tabs_module$$3_idx$$).find(".configuration_item_tab");
    $item_module_name$$ = $($item_module_name$$).find(".configuration_paint_module_paint_color").find(".paint_color_text_container").find("h3");
    20 < parseInt($($item_module_name$$).outerHeight(!0)) ? ($($configuration_item_tabs_module$$3_idx$$).height(parseInt($action_hgt_total_hgt$$) + 17), $($paintModule$$).height(parseInt($can_image_hgt$$) + parseInt($cancut_color_nameId_hgt$$) + parseInt($divider_hgt$$) + parseInt($line_item_hgt$$) + 26)) : ($($configuration_item_tabs_module$$3_idx$$).height(parseInt($action_hgt_total_hgt$$) + 23), $($paintModule$$).height(parseInt($can_image_hgt$$) + parseInt($cancut_color_nameId_hgt$$) + parseInt($divider_hgt$$) + 
    parseInt($line_item_hgt$$) + 32));
    $isContainer$$ ? $($paintModule$$).find("h4").css("margin-top", "125px") : $($paintModule$$).find("h4").css("margin-top", "60px")
  };
  this.showPaintCalc = function $this$showPaintCalc$() {
    $(document).width();
    paintCalc.display.outerWidth();
    $(document).height();
    paintCalc.display.outerHeight();
    showModal(paintCalc)
  };
  this.showProjectSummary = function $this$showProjectSummary$() {
    projectSummary.setColors(this.origColorsArr);
    var $x$$ = $(document).width() / 2 - projectSummary.display.outerWidth() / 2, $y$$ = $(document).height() / 2 - projectSummary.display.outerHeight() / 2;
    showModal(projectSummary, $x$$, $y$$)
  };
  this.showGenericMessage = function $this$showGenericMessage$($titleMessage$$1_x$$, $contentMessage$$1_y$$, $okCallBack$$, $cancelCallBack$$) {
    genericMessage.setIntialContent($titleMessage$$1_x$$, $contentMessage$$1_y$$, $okCallBack$$, $cancelCallBack$$);
    $titleMessage$$1_x$$ = $(document).width() / 2 - genericMessage.display.outerWidth() / 2;
    $contentMessage$$1_y$$ = $(document).height() / 2 - genericMessage.display.outerHeight() / 2;
    showModal(genericMessage, $titleMessage$$1_x$$, $contentMessage$$1_y$$)
  };
  this.showFiveGalSuggestion = function $this$showFiveGalSuggestion$($container_size_quantity$$, $container_size_module$$) {
    fiveGalSuggestion.setIntialContent($container_size_quantity$$, $container_size_module$$);
    var $x$$ = $(document).width() / 2 - fiveGalSuggestion.display.outerWidth() / 2, $y$$ = $(document).height() / 2 - fiveGalSuggestion.display.outerHeight() / 2;
    showModal(fiveGalSuggestion, $x$$, $y$$)
  };
  this.showAboutSheen = function $this$showAboutSheen$() {
    var $sheenToOpen$$;
    $sheenToOpen$$ = "exterior" == this.colorProduct.surface && "UL" == this.colorProduct.behrBrand ? aboutSheenExtUL : "exterior" == this.colorProduct.surface && "PP" == this.colorProduct.behrBrand ? aboutSheenExtPP : "exterior" == this.colorProduct.surface && "MQ" == this.colorProduct.behrBrand ? aboutSheenExtMQ : "interior" == this.colorProduct.surface && "UL" == this.colorProduct.behrBrand ? aboutSheenIntUL : "interior" == this.colorProduct.surface && "PP" == this.colorProduct.behrBrand ? aboutSheenIntPP : 
    aboutSheenIntMQ;
    var $x$$ = $(document).width() / 2 - $sheenToOpen$$.display.outerWidth() / 2, $y$$ = $(document).height() / 2 - $sheenToOpen$$.display.outerHeight() / 2;
    showModal($sheenToOpen$$, $x$$, $y$$)
  };
  this._init = function $this$_init$() {
    this.colorTabTemplate = this.display.find(".configuration_paint_module");
    this.paintColorChipTemplate = this.display.find(".order_summary_container .paint_colors_container .paint_color_chip");
    this.noProjectPaintColorChipTemplate = this.display.find(".no_project_adv_container .paint_colors_container .paint_color_chip");
    this.colorChipTemplate = this.display.find(".paint_colors_container");
    this.selColorsPalette = this.display.find(".configuration-content-paints");
    this.sheenSelectionTemplate = this.display.find(".sheen_module");
    this.sheenAttributeTab = this.display.find(".sheen_module_container");
    this.houzz_label = null == readCookie("houzz_ref") ? "" : "-Houzz"
  };
  this._init()
}
BuyNow.NAME = "BuyNow";
function ColorProduct() {
  this.isConfigStarted;
  this.surface;
  this.containerSize;
  this.behrBrand;
  this.sheen;
  this.quantity;
  this.omsId;
  this.message;
  this.oneGalOmsId;
  this.oneGalQty;
  this.isConfigCompleted;
  this.isSheen;
  this.configStatus;
  this.isColorBound;
  this._init = function $this$_init$() {
    this.isConfigStarted = !1;
    this.sheen = this.behrBrand = this.containerSize = this.surface = "";
    this.quantity = 0;
    this.oneGalOmsId = this.omsId = this.message = "";
    this.oneGalQty = 0;
    this.isConfigCompleted = !1;
    this.isSheen = !0;
    this.configStatus = "UC";
    this.isColorBound = !1
  };
  this._init()
}
;function ProjectSummary($display$$) {
  this.display = $display$$;
  this.colors = this._deleteId = null;
  this.name = "projectSummary";
  this.summaryColorChipTemplate = this.summaryColorsChipTemplate = null;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    topPosition = $("#colorsmart")[0].offsetTop + 200;
    this.display.css("top", topPosition + "px");
    this.display.show();
    var $index$$ = this.display.find(".project_overlay1_image"), $color$$91_dataURL$$ = $(".RoomVisualizer .canvas .PaintRoom").find("canvas")[0].toDataURL();
    $index$$.css({background:"url('" + $color$$91_dataURL$$ + "') #cccccc", "background-size":"651px 458px", "background-repeat":"no-repeat"});
    $index$$ = this.display.find(".project_overlay1_color");
    $($index$$).remove();
    for($index$$ = 0;$index$$ < this.colors.length;$index$$++) {
      if($color$$91_dataURL$$ = this.colors[$index$$]) {
        var $summaryColorChip$$ = this.summaryColorChipTemplate.clone();
        $summaryColorChip$$.find(".project_overlay1_color_chip_container").css("background-color", $color$$91_dataURL$$.rgb);
        $summaryColorChip$$.find(".project_overlay1_color_text_container h3").text($color$$91_dataURL$$.name.toLowerCase());
        $summaryColorChip$$.find(".project_overlay1_color_text_container h5").text($color$$91_dataURL$$.id);
        this.summaryColorsChipTemplate.append($summaryColorChip$$)
      }
    }
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.setColors = function $this$setColors$($selectedColors$$) {
    this.colors = $selectedColors$$
  };
  this.init = function $this$init$() {
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    this.summaryColorsChipTemplate = this.display.find(".project_overlay1_colors");
    this.summaryColorChipTemplate = this.display.find(".project_overlay1_colors .project_overlay1_color")
  };
  this.init()
}
ProjectSummary.NAME = "ProjectSummary";
function GenericMessage($display$$) {
  this.display = $display$$;
  this.name = "genericMessage";
  this.closeClick = this.cancelClick = this.okClick = !1;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    var $parentTop$$ = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, $selfHeight$$ = this.display.height(), $minTop$$ = $("#colorsmart div.note")[0].offsetTop - $selfHeight$$;
    topPosition = 0 >= $parentTop$$ ? 25 : $parentTop$$ - $selfHeight$$ < $minTop$$ ? $parentTop$$ - $selfHeight$$ + 200 : $minTop$$ + 100;
    this.display.css("top", topPosition + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.setIntialContent = function $this$setIntialContent$($messageText$$, $backToProjectButton_cancelButton_messageContent_okButton$$, $okCallBack$$, $cancelCallBack$$) {
    var $titleText$$ = this.display.find(".overlay_title_row h3");
    $($titleText$$).text($messageText$$);
    $messageText$$ = this.display.find(".overlay-content p");
    $($messageText$$).html($backToProjectButton_cancelButton_messageContent_okButton$$);
    $backToProjectButton_cancelButton_messageContent_okButton$$ = this.display.find(".ok_button");
    $backToProjectButton_cancelButton_messageContent_okButton$$.unbind();
    $($backToProjectButton_cancelButton_messageContent_okButton$$).show();
    null == $okCallBack$$ && $($backToProjectButton_cancelButton_messageContent_okButton$$).hide();
    $backToProjectButton_cancelButton_messageContent_okButton$$.on("click", function($e$$) {
      hideModal();
      "undefined" != typeof $okCallBack$$ && "" != $okCallBack$$ && $okCallBack$$()
    });
    $backToProjectButton_cancelButton_messageContent_okButton$$ = this.display.find(".cancel_button");
    $backToProjectButton_cancelButton_messageContent_okButton$$.unbind();
    $($backToProjectButton_cancelButton_messageContent_okButton$$).show();
    null == $cancelCallBack$$ && $($backToProjectButton_cancelButton_messageContent_okButton$$).hide();
    $backToProjectButton_cancelButton_messageContent_okButton$$.on("click", function($e$$) {
      hideModal();
      "undefined" != typeof $cancelCallBack$$ && "" != $cancelCallBack$$ && $cancelCallBack$$()
    });
    $backToProjectButton_cancelButton_messageContent_okButton$$ = this.display.find(".back_to_proj");
    $backToProjectButton_cancelButton_messageContent_okButton$$.unbind();
    $backToProjectButton_cancelButton_messageContent_okButton$$.on("click", function($e$$) {
      hideModal();
      buyNow.resetToVisualizer()
    })
  };
  this.init = function $this$init$() {
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
GenericMessage.NAME = "GenericMessage";
function PaintCalc($display$$) {
  this.display = $display$$;
  this._deleteId = null;
  this.name = "paintCalc";
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.init = function $this$init$() {
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
var intentPinwheel;
function hidePinwheel() {
  $(".loading_pinwheel").hide();
  $("table.results_table").show()
}
function showPinwheel() {
  $(".loading_pinwheel").show();
  $("table.results_table").hide()
}
function updateResults() {
  function $rectifyTouchUpValue$$($t$$) {
    return 1 === $t$$ ? $TOUCHUP_QTY_FACTOR$$ : 1
  }
  function $calculateCeilingQuantity$$($resultElement$$, $ceilingQty_length$$, $width$$, $vaulted$$, $touchUp$$) {
    $vaulted$$ = 1 === $vaulted$$ ? $VAULTED_CEILING_FACTOR$$ : 1;
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    $ceilingQty_length$$ = $ceilingQty_length$$ * $width$$ * $vaulted$$ * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $ceilingQty_length$$, $ceilingQty_length$$ - Math.floor($ceilingQty_length$$))
  }
  function $calculateDoorQuantity$$($resultElement$$, $doors$$, $touchUp$$) {
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    var $doorsQty$$ = 0, $doorsQty$$ = $(".paint_calculator-header .pc-header_button.interior").hasClass("active") ? 2 * $doors$$ * $DOOR_SURFACE_AREA$$ * $touchUp$$ / $SPREAD_RATE$$ : $doors$$ * $DOOR_SURFACE_AREA$$ * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $doorsQty$$, $doorsQty$$ - Math.floor($doorsQty$$))
  }
  function $calculateInternalWallQuantity$$($resultElement$$, $length$$, $width$$, $doors$$, $windows$$, $vaulted$$, $touchUp$$) {
    var $wallHeight$$ = $STANDARD_CEILING_HEIGHT$$;
    1 == $vaulted$$ && ($wallHeight$$ = $VAULTED_CEILING_HEIGHT$$);
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    0 < $windows$$ || ($windows$$ = 0);
    0 < $doors$$ || ($doors$$ = 0);
    $length$$ = (2 * $wallHeight$$ * ($length$$ + $width$$) - $windows$$ * $WINDOW_SURFACE_AREA$$ - $doors$$ * $DOOR_SURFACE_AREA$$) * $touchUp$$ / $SPREAD_RATE$$;
    0 > $length$$ && ($length$$ = 0);
    return $calculatePaintQuantity$$($resultElement$$, $length$$, $length$$ - Math.floor($length$$))
  }
  function $calculateInternalTrimQuantity$$($resultElement$$, $length$$, $width$$, $doors$$, $windows$$, $touchUp$$) {
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    0 < $windows$$ || ($windows$$ = 0);
    $length$$ = (2 * ($length$$ + $width$$) + $windows$$ * $WINDOW_PERIMETER$$) * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $length$$, $length$$ - Math.floor($length$$))
  }
  function $calculateExternalTrimQuantity$$($resultElement$$, $garage_trimQty$$, $area$$, $windows$$, $doors$$, $touchUp$$) {
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    $garage_trimQty$$ = 0 < $garage_trimQty$$ ? 1 == $garage_trimQty$$ ? $GARAGEDOOR_1CAR_PERIMETER$$ : 2 == $garage_trimQty$$ ? $GARAGEDOOR_2CAR_PERIMETER$$ : $GARAGEDOOR_3CAR_PERIMETER$$ : 0;
    0 < $windows$$ || ($windows$$ = 0);
    0 < $doors$$ || ($doors$$ = 0);
    $garage_trimQty$$ = ($windows$$ * $WINDOW_PERIMETER$$ + $area$$ + $doors$$ * $DOOR_PERIMETER$$ + $garage_trimQty$$) * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $garage_trimQty$$, $garage_trimQty$$ - Math.floor($garage_trimQty$$))
  }
  function $calculateExternalWallQuantity$$($resultElement$$, $extWallsQty_garage$$, $area$$, $windows$$, $doors$$, $touchUp$$) {
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    $extWallsQty_garage$$ = 0 < $extWallsQty_garage$$ ? $extWallsQty_garage$$ * $GARAGEDOOR_SURFACE_AREA$$ : 0;
    0 < $windows$$ || ($windows$$ = 0);
    0 < $doors$$ || ($doors$$ = 0);
    $extWallsQty_garage$$ = ($area$$ * $FOOTAGE_2_SURFACE_FACTOR$$ - $windows$$ * $WINDOW_SURFACE_AREA$$ - $doors$$ * $DOOR_SURFACE_AREA$$ - $extWallsQty_garage$$) * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $extWallsQty_garage$$, $extWallsQty_garage$$ - Math.floor($extWallsQty_garage$$))
  }
  function $calculateExternalGarageDoorQuantity$$($resultElement$$, $garage$$, $touchUp$$) {
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    $garage$$ = 0 < $garage$$ ? $garage$$ * $GARAGEDOOR_SURFACE_AREA$$ : 0;
    $garage$$ = $garage$$ * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $garage$$, $garage$$ - Math.floor($garage$$))
  }
  function $calculateExternalShuttersQuantity$$($resultElement$$, $shutters_shuttersQty$$, $touchUp$$) {
    $touchUp$$ = $rectifyTouchUpValue$$($touchUp$$);
    $shutters_shuttersQty$$ = $shutters_shuttersQty$$ * $SHUTTERS_SURFACE_AREA$$ * $touchUp$$ / $SPREAD_RATE$$;
    return $calculatePaintQuantity$$($resultElement$$, $shutters_shuttersQty$$, $shutters_shuttersQty$$ - Math.floor($shutters_shuttersQty$$))
  }
  function $calculatePaintQuantity$$($resultElement$$, $elementQty$$, $fractionalQty$$) {
    var $gallon$$ = 0, $quart$$ = 0, $data$$ = [];
    if($fractionalQty$$ > $QUART_THRESHOLD$$) {
      $gallon$$ = Math.ceil($elementQty$$), $quart$$ = 0
    }else {
      if(0 < $fractionalQty$$ || 0 < $elementQty$$) {
        $gallon$$ = Math.floor($elementQty$$), $quart$$ = 0 < $fractionalQty$$ ? 1 : 0
      }
    }
    $data$$.push($gallon$$);
    $data$$.push($quart$$);
    $($resultElement$$.find("td.value_cell-gallons div.value")[1]).html($gallon$$);
    $($resultElement$$.find("td.value_cell-gallons div.value_description")[1]).html(1 < $gallon$$ ? "Gallons" : "Gallon");
    $($resultElement$$.find("td.value_cell-quarts div.value")[1]).html($quart$$);
    $($resultElement$$.find("td.value_cell-quarts div.value_description")[1]).html(1 < $quart$$ ? "Quarts" : "Quart");
    return $data$$
  }
  var $VAULTED_CEILING_HEIGHT$$ = 12, $VAULTED_CEILING_FACTOR$$ = 1.103377919, $STANDARD_CEILING_HEIGHT$$ = 9, $FOOTAGE_2_SURFACE_FACTOR$$ = 1.75, $GARAGEDOOR_SURFACE_AREA$$ = 56, $GARAGEDOOR_1CAR_PERIMETER$$ = 22, $GARAGEDOOR_2CAR_PERIMETER$$ = 30, $GARAGEDOOR_3CAR_PERIMETER$$ = 52, $SHUTTERS_SURFACE_AREA$$ = 6, $WINDOW_PERIMETER$$ = 18, $WINDOW_SURFACE_AREA$$ = 20, $DOOR_PERIMETER$$ = 17, $DOOR_SURFACE_AREA$$ = 21, $TOUCHUP_QTY_FACTOR$$ = 1.05, $SPREAD_RATE$$ = 350, $QUART_THRESHOLD$$ = 0.25;
  clearTimeout(intentPinwheel);
  intentPinwheel = setTimeout(hidePinwheel, 2E3);
  showPinwheel();
  if($(".paint_calculator_header .pc-header_button.interior").hasClass("active")) {
    var $rExWalls_rWalls$$ = $("table.results_table .interior.walls"), $rExDoors_rTrim$$ = $("table.results_table .interior.trim"), $rDoors_rExTrim$$ = $("table.results_table .interior.doors"), $rCeiling_rExShutters$$ = $("table.results_table .interior.ceiling"), $rExGarage_roomLength$$ = parseInt($(".interior .slider-room_length")[1].value), $exSquareFootage_roomWidth$$ = parseInt($(".interior .slider-room_width")[1].value), $doors_exDoors$$ = parseInt($(".interior .slider-doors")[1].value), $exWindows_windows$$ = 
    parseInt($(".interior .slider-windows")[1].value), $exShutters_vaultedCeiling$$ = "yes" == $(".interior .switch-vaulted_ceiling input:checked").val() ? 1 : 0, $exGarageDoors_touchUpPaint$$ = "yes" == $(".interior .switch-touch_up input:checked").val() ? 1 : 0;
    $calculateCeilingQuantity$$($rCeiling_rExShutters$$, $rExGarage_roomLength$$, $exSquareFootage_roomWidth$$, $exShutters_vaultedCeiling$$, $exGarageDoors_touchUpPaint$$);
    $calculateDoorQuantity$$($rDoors_rExTrim$$, $doors_exDoors$$, $exGarageDoors_touchUpPaint$$);
    $calculateInternalWallQuantity$$($rExWalls_rWalls$$, $rExGarage_roomLength$$, $exSquareFootage_roomWidth$$, $doors_exDoors$$, $exWindows_windows$$, $exShutters_vaultedCeiling$$, $exGarageDoors_touchUpPaint$$);
    $calculateInternalTrimQuantity$$($rExDoors_rTrim$$, $rExGarage_roomLength$$, $exSquareFootage_roomWidth$$, $doors_exDoors$$, $exWindows_windows$$, $exGarageDoors_touchUpPaint$$)
  }else {
    if($(".paint_calculator_header .pc-header_button.exterior").hasClass("active")) {
      var $rExWalls_rWalls$$ = $("table.results_table .exterior.exterior_walls"), $rExDoors_rTrim$$ = $("table.results_table .exterior.doors"), $rDoors_rExTrim$$ = $("table.results_table .exterior.trim"), $rCeiling_rExShutters$$ = $("table.results_table .exterior.shutters"), $rExGarage_roomLength$$ = $("table.results_table .exterior.garage_doors"), $exSquareFootage_roomWidth$$ = parseInt($(".exterior .slider-square_footage")[1].value), $doors_exDoors$$ = parseInt($(".exterior .slider-doors")[1].value), 
      $exWindows_windows$$ = parseInt($(".exterior .slider-windows")[1].value), $exShutters_vaultedCeiling$$ = parseInt($(".exterior .slider-shutters")[1].value), $exGarageDoors_touchUpPaint$$ = parseInt($(".exterior .slider-garage_doors")[1].value), $exTouchUpPaint$$ = "yes" == $("input:radio[name=switch-exterior-touch_up]:checked").val() ? 1 : 0;
      $calculateExternalTrimQuantity$$($rDoors_rExTrim$$, $exGarageDoors_touchUpPaint$$, $exSquareFootage_roomWidth$$, $exWindows_windows$$, $doors_exDoors$$, $exTouchUpPaint$$);
      $calculateExternalWallQuantity$$($rExWalls_rWalls$$, $exGarageDoors_touchUpPaint$$, $exSquareFootage_roomWidth$$, $exWindows_windows$$, $doors_exDoors$$, $exTouchUpPaint$$);
      $calculateExternalShuttersQuantity$$($rCeiling_rExShutters$$, $exShutters_vaultedCeiling$$, $exTouchUpPaint$$);
      $calculateExternalGarageDoorQuantity$$($rExGarage_roomLength$$, $exGarageDoors_touchUpPaint$$, $exTouchUpPaint$$);
      $calculateDoorQuantity$$($rExDoors_rTrim$$, $doors_exDoors$$, $exTouchUpPaint$$)
    }
  }
}
function updateSliderFromValue($container$$) {
  var $orange_vMax$$ = parseInt($($container$$.parent().find(".slider-maximum_value")[0]).html().replace(/,/, "")), $vMin$$ = parseInt($($container$$.parent().find(".slider-minimum_value")[0]).html().replace(/,/, "")), $targetTab$$ = $($container$$.find(".slider-tab")[1]);
  1E3 > $orange_vMax$$ && $targetTab$$.width(32);
  100 > $orange_vMax$$ && $targetTab$$.width(28);
  var $tWidth$$ = $targetTab$$.width(), $bWidth$$ = $container$$.width();
  $container$$.offset();
  var $value$$ = $container$$.attr("value");
  switch(!0) {
    case $value$$ <= $vMin$$:
      newLeft = 0;
      $value$$ = $vMin$$;
      break;
    case $value$$ >= $orange_vMax$$:
      newLeft = $bWidth$$ - $tWidth$$;
      $value$$ = $orange_vMax$$;
      break;
    default:
      $value$$ = Math.ceil($value$$), newLeft = Math.floor(($bWidth$$ - $tWidth$$) * ($value$$ / $orange_vMax$$))
  }
  $container$$.attr("value", $value$$);
  $targetTab$$.css("left", newLeft);
  $orange_vMax$$ = $($container$$.find(".slider-bar-highlight")[1]).width(newLeft);
  $($container$$.find(".slider-bar")[1]).width($bWidth$$ - $orange_vMax$$.width() - 2);
  $container$$.find(".value-display").html($value$$);
  conatiner = null;
  updateResults()
}
function updateSlider($container$$, $pageX$$) {
  var $orange$$1_targetTab$$ = $($container$$.find(".slider-tab")[0]), $vMax$$1_value$$ = parseInt($($container$$.parent().find(".slider-maximum_value")[0]).html().replace(/,/, "")), $vMin$$ = parseInt($($container$$.parent().find(".slider-minimum_value")[0]).html().replace(/,/, "")), $tWidth$$ = $orange$$1_targetTab$$.outerWidth(), $bWidth$$ = $container$$.innerWidth(), $bLeft$$ = $container$$.offset().left;
  switch(!0) {
    case $pageX$$ - $bLeft$$ <= Math.floor($tWidth$$ / 2):
      newLeft = 0;
      $vMax$$1_value$$ = $vMin$$;
      break;
    case Math.ceil($pageX$$ - ($bLeft$$ - $tWidth$$ / 2)) >= $bWidth$$:
      newLeft = $bWidth$$ - $tWidth$$;
      break;
    default:
      var $low_oldrange$$ = $bWidth$$ - $tWidth$$, $newrange$$ = $vMax$$1_value$$ - $vMin$$;
      newLeft = Math.ceil($pageX$$ - $tWidth$$ / 2 - $bLeft$$);
      $vMax$$1_value$$ = Math.ceil(($vMax$$1_value$$ - $vMin$$) * (newLeft / ($bWidth$$ - $tWidth$$)) + $vMin$$);
      100 > $newrange$$ && (newLeft = Math.floor($low_oldrange$$ / $newrange$$ * $vMax$$1_value$$))
  }
  $orange$$1_targetTab$$.css("left", newLeft);
  $orange$$1_targetTab$$ = $($container$$.find(".slider-bar-highlight")[0]).width(newLeft);
  $low_oldrange$$ = $($container$$.find(".slider-bar")[0]);
  $low_oldrange$$.width($bWidth$$ - $orange$$1_targetTab$$.outerWidth() - ($low_oldrange$$.outerWidth() - $low_oldrange$$.innerWidth()));
  $bWidth$$ = $($container$$.find(".slider-hovering_report")[0]).show();
  $bWidth$$.css("left", parseInt(newLeft + $tWidth$$ / 2 - $bWidth$$.width() / 2));
  $vMax$$1_value$$ = Math.ceil($vMax$$1_value$$);
  $container$$.attr("value", $vMax$$1_value$$);
  $container$$.find(".value-display").html($vMax$$1_value$$);
  updateResults()
}
function barClick($e$$) {
  var $container$$ = $($e$$.currentTarget).parent().parent();
  updateSlider($container$$, $e$$.pageX)
}
function tabDragMouseup() {
  $(document).unbind("mousemove.tabDrag");
  $(".slider-tab.currentlyDragging .value-display").show();
  $(".slider-tab.currentlyDragging").removeClass("currentlyDragging");
  $(".slider-hovering_report").remove()
}
function tabMousemove($e$$) {
  var $container$$3_targetTab$$ = $(".slider-tab.currentlyDragging");
  if(!$container$$3_targetTab$$.length) {
    return tabDragMouseup(), !1
  }
  $container$$3_targetTab$$ = $container$$3_targetTab$$.parent().parent();
  updateSlider($container$$3_targetTab$$, $e$$.pageX);
  return!1
}
function tabMousedown() {
  $(this).addClass("currentlyDragging");
  $(document).bind("mousemove.tabDrag", tabMousemove);
  $(this).parent().prepend($(document.createElement("div")).addClass("slider-hovering_report hidden").append($(document.createElement("div")).addClass("value-display")).append($(document.createElement("div")).addClass("hovering_report-arrow")));
  $(".slider-tab.currentlyDragging .value-display").hide();
  $(document).one("mouseup", tabDragMouseup);
  $(document).one("dragend", tabDragMouseup);
  return!1
}
function calculateSFClick() {
  var $slider_widthElement$$ = $($(this).parent().find("input.text-width")[0]), $lengthElement$$ = $($(this).parent().find("input.text-length")[0]);
  if(0 == $slider_widthElement$$.length || 0 == $lengthElement$$.length) {
    return!1
  }
  $slider_widthElement$$.val(parseInt($slider_widthElement$$.val()));
  $lengthElement$$.val(parseInt($lengthElement$$.val()));
  var $exit_sliderClass$$ = !1;
  isNaN($slider_widthElement$$.val()) && ($slider_widthElement$$.val(""), $exit_sliderClass$$ = !0);
  isNaN($lengthElement$$.val()) && ($lengthElement$$.val(""), $exit_sliderClass$$ = !0);
  if(!0 === $exit_sliderClass$$) {
    return!1
  }
  $exit_sliderClass$$ = $(this).parent().attr("target_slider");
  if("undefined" === typeof $exit_sliderClass$$) {
    return!1
  }
  $slider_widthElement$$ = $("" + $exit_sliderClass$$).attr("value", $slider_widthElement$$.val() * $lengthElement$$.val());
  if(0 == $slider_widthElement$$.length) {
    return!1
  }
  updateSliderFromValue($slider_widthElement$$)
}
function sizeButtonClick() {
  $(".pc-swappable").hide();
  $(".size_button_container").removeClass("active");
  var $container$$, $updateSliders$$ = [];
  switch(!0) {
    case $(".pc-header_button.active").hasClass("interior"):
      $updateSliders$$.push($(".interior .slider-room_length").attr("value", $(this).attr("length")));
      $updateSliders$$.push($(".interior .slider-room_width").attr("value", $(this).attr("width")));
      $updateSliders$$.push($(".interior .slider-doors").attr("value", $(this).attr("doors")));
      $updateSliders$$.push($(".interior .slider-windows").attr("value", $(this).attr("windows")));
      $(".interior .switch-vaulted_ceiling input[value=" + $(this).attr("vaulted") + "]").prop("checked", !0);
      $(".interior .switch-touch_up input[value=" + $(this).attr("touch_up") + "]").prop("checked", !0);
      $container$$ = "interior";
      break;
    case $(".pc-header_button.active").hasClass("exterior"):
      $updateSliders$$.push($(".exterior .slider-square_footage").attr("value", $(this).attr("square_footage")));
      $updateSliders$$.push($(".exterior .slider-doors").attr("value", $(this).attr("doors")));
      $updateSliders$$.push($(".exterior .slider-windows").attr("value", $(this).attr("windows")));
      $updateSliders$$.push($(".exterior .slider-shutters").attr("value", $(this).attr("shutters")));
      $updateSliders$$.push($(".exterior .slider-garage_doors").attr("value", $(this).attr("garage_doors")));
      $(".exterior .switch-touch_up input[value=" + $(this).attr("touch_up") + "]").prop("checked", !0);
      $container$$ = "exterior";
      break;
    default:
      $updateSliders$$.push($(".stain .slider-square_footage").attr("value", $(this).attr("square_footage"))), $(".stain .text-width").attr("value", $(this).attr("width")), $(".stain .text-length").attr("value", $(this).attr("length")), $container$$ = "stain"
  }
  $($updateSliders$$).each(function() {
    updateSliderFromValue($(this))
  });
  $updateSliders$$ = null;
  $(".pc-swappable.pc-all,.calculator_wrapper .pc-swappable." + $container$$).show();
  $container$$ = $(this).parent();
  $container$$.addClass("active");
  $(".pc-left .pc-left-indicator").css("top", $container$$.position().top).show();
  updateResults()
}
function headerButtonClick() {
  if(!$(this).attr("show")) {
    return!1
  }
  $(".calculator_wrapper .active").removeClass("active");
  $(".calculator_wrapper .pc-swappable").hide();
  $(".pc-swappable.initial,.calculator_wrapper .pc-left .pc-swappable." + $(this).attr("show")).show();
  "exterior" == $(this).attr("show") ? $(".pc-swappable.initial.initial_message").html("<h2>Choose a home size on the left to get started... <br />Then you can customize your calculation here.</h2>") : $(".pc-swappable.initial.initial_message").html("<h2>Choose a room size on the left to get started... <br />Then you can customize your calculation here.</h2>");
  $(this).addClass("active")
}
function paintCalcInit() {
  $(".pc-header_button").click(headerButtonClick);
  $(".slider-tab").on("mousedown", tabMousedown);
  $(".slider-bar-component").on("click", barClick);
  $(".pc-left .size_button_container a").on("click", sizeButtonClick);
  $(".switch_container input").on("change", updateResults);
  $(".switch-touch_up input").on("change", updateResults);
  $(".pc-center .calculate_sf a.orange_button").on("click", calculateSFClick)
}
$(document).ready(paintCalcInit);
PaintCalc.NAME = "PaintCalc";
function FiveGalSuggestion($display$$) {
  this.display = $display$$;
  this.oneGalQty = null;
  this.container_size_quantity;
  this.container_size_module;
  this.name = "fiveGalSuggestion";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    var $parentTop$$ = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, $selfHeight$$ = this.display.height(), $minTop$$ = $("#colorsmart div.note")[0].offsetTop - $selfHeight$$;
    topPosition = 0 >= $parentTop$$ ? 25 : $parentTop$$ - $selfHeight$$ < $minTop$$ ? $parentTop$$ - $selfHeight$$ + 200 : $minTop$$ + 100;
    this.display.css("top", topPosition + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.display.find(".save_more_bottom_content").on("click", function($e$$) {
    $e$$ = $("input[name=paintContainers]");
    if($($e$$[3]).is(":checked")) {
      $e$$ = parseInt($($obj$$.container_size_quantity[1]).val()) % 5;
      var $fiveGalQty$$ = Math.floor(parseInt($($obj$$.container_size_quantity[1]).val()) / 5) + parseInt($($obj$$.container_size_quantity[2]).val());
      $($obj$$.container_size_quantity[1]).val($e$$);
      $($obj$$.container_size_quantity[2]).val($fiveGalQty$$);
      $($obj$$.container_size_module[2]).addClass("orange");
      0 == $e$$ && $($obj$$.container_size_module[1]).removeClass("orange");
      buyNow.colorProduct.containerSize = "5Gal";
      buyNow.colorProduct.oneGalQty = $e$$;
      buyNow.colorProduct.quantity = $($obj$$.container_size_quantity[2]).val();
      $($obj$$.container_size_quantity[2]).focus()
    }else {
      $($obj$$.container_size_quantity[1]).focus()
    }
    buyNow.enableNavigation(2);
    hideModal()
  });
  this.setIntialContent = function $this$setIntialContent$($container_size_quantity$$, $container_size_module$$) {
    $obj$$.container_size_quantity = $container_size_quantity$$;
    $obj$$.container_size_module = $container_size_module$$;
    var $message$$17_paintContainersOption$$ = $("input[name=paintContainers]");
    $($message$$17_paintContainersOption$$[2]).prop("checked", !0);
    $($message$$17_paintContainersOption$$[3]).prop("checked", !1);
    $message$$17_paintContainersOption$$ = "You selected to add " + $($container_size_quantity$$[1]).val();
    this.display.find(".overlay1-content p").html($message$$17_paintContainersOption$$ + " one-gallon items to your cart. <br />You can <b>save</b> cost by converting your order to a combination of one-gallon and five-gallon containers.");
    var $message$$17_paintContainersOption$$ = "Change the order to " + Math.floor(parseInt($($container_size_quantity$$[1]).val()) / 5), $message$$17_paintContainersOption$$ = $message$$17_paintContainersOption$$ + (" five-gallon(s) and " + parseInt($($container_size_quantity$$[1]).val()) % 5 + " one-gallon(s) and save"), $radioText$$ = this.display.find(".save_more_radio-text");
    $($radioText$$[1]).text($message$$17_paintContainersOption$$)
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay1-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
FiveGalSuggestion.NAME = "FiveGalSuggestion";
function AboutSheenExtPP($display$$) {
  this.display = $display$$;
  this.name = "aboutSheen";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.showSheenExamples = function $this$showSheenExamples$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_examples").show()
  };
  this.showSheenChart = function $this$showSheenChart$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_chart").show()
  };
  this.changeSheenTab = function $this$changeSheenTab$($divParent$$, $button$$) {
    $($divParent$$).find(".gray_button").addClass("white_button");
    $($divParent$$).find(".gray_button").removeClass("gray_button");
    $($button$$).addClass("gray_button");
    $($button$$).removeClass("white_button")
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    $("a.orange_button-sheen_examples").on("click", this.showSheenExamples);
    $("a.orange_button-sheen_chart").on("click", this.showSheenChart)
  };
  this.init()
}
function AboutSheenExtUL($display$$) {
  this.display = $display$$;
  this.name = "aboutSheen";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.showSheenExamples = function $this$showSheenExamples$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_examples").show()
  };
  this.showSheenChart = function $this$showSheenChart$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_chart").show()
  };
  this.changeSheenTab = function $this$changeSheenTab$($divParent$$, $button$$) {
    $($divParent$$).find(".gray_button").addClass("white_button");
    $($divParent$$).find(".gray_button").removeClass("gray_button");
    $($button$$).addClass("gray_button");
    $($button$$).removeClass("white_button")
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    $("a.orange_button-sheen_examples").on("click", this.showSheenExamples);
    $("a.orange_button-sheen_chart").on("click", this.showSheenChart)
  };
  this.init()
}
function AboutSheenExtMQ($display$$) {
  this.display = $display$$;
  this.name = "aboutSheen";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.showSheenExamples = function $this$showSheenExamples$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_examples").show()
  };
  this.showSheenChart = function $this$showSheenChart$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_chart").show()
  };
  this.changeSheenTab = function $this$changeSheenTab$($divParent$$, $button$$) {
    $($divParent$$).find(".gray_button").addClass("white_button");
    $($divParent$$).find(".gray_button").removeClass("gray_button");
    $($button$$).addClass("gray_button");
    $($button$$).removeClass("white_button")
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    $("a.orange_button-sheen_examples").on("click", this.showSheenExamples);
    $("a.orange_button-sheen_chart").on("click", this.showSheenChart)
  };
  this.init()
}
function AboutSheenIntUL($display$$) {
  this.display = $display$$;
  this.name = "aboutSheen";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.showSheenExamples = function $this$showSheenExamples$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_examples").show()
  };
  this.showSheenChart = function $this$showSheenChart$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_chart").show()
  };
  this.changeSheenTab = function $this$changeSheenTab$($divParent$$, $button$$) {
    $($divParent$$).find(".gray_button").addClass("white_button");
    $($divParent$$).find(".gray_button").removeClass("gray_button");
    $($button$$).addClass("gray_button");
    $($button$$).removeClass("white_button")
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    $("a.orange_button-sheen_examples").on("click", this.showSheenExamples);
    $("a.orange_button-sheen_chart").on("click", this.showSheenChart)
  };
  this.init()
}
function AboutSheenIntPP($display$$) {
  this.display = $display$$;
  this.name = "aboutSheen";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.showSheenExamples = function $this$showSheenExamples$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_examples").show()
  };
  this.showSheenChart = function $this$showSheenChart$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_chart").show()
  };
  this.changeSheenTab = function $this$changeSheenTab$($divParent$$, $button$$) {
    $($divParent$$).find(".gray_button").addClass("white_button");
    $($divParent$$).find(".gray_button").removeClass("gray_button");
    $($button$$).addClass("gray_button");
    $($button$$).removeClass("white_button")
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    $("a.orange_button-sheen_examples").on("click", this.showSheenExamples);
    $("a.orange_button-sheen_chart").on("click", this.showSheenChart)
  };
  this.init()
}
function AboutSheenIntMQ($display$$) {
  this.display = $display$$;
  this.name = "aboutSheen";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    $y$$ && this.display.css("top", $y$$ + "px");
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.showSheenExamples = function $this$showSheenExamples$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_examples").show()
  };
  this.showSheenChart = function $this$showSheenChart$() {
    var $divParent$$ = $(this).parent().parent();
    $obj$$.changeSheenTab($divParent$$, $(this));
    $($divParent$$).find(".sheen_change").hide();
    $($divParent$$).find(".sheen_change-sheen_chart").show()
  };
  this.changeSheenTab = function $this$changeSheenTab$($divParent$$, $button$$) {
    $($divParent$$).find(".gray_button").addClass("white_button");
    $($divParent$$).find(".gray_button").removeClass("gray_button");
    $($button$$).addClass("gray_button");
    $($button$$).removeClass("white_button")
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".overlay-close").on("click", function($e$$) {
      hideModal()
    });
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    });
    $("a.orange_button-sheen_examples").on("click", this.showSheenExamples);
    $("a.orange_button-sheen_chart").on("click", this.showSheenChart)
  };
  this.init()
}
AboutSheenIntPP.NAME = "AboutSheenIntPP";
AboutSheenIntUL.NAME = "AboutSheenIntUL";
AboutSheenExtPP.NAME = "AboutSheenExtPP";
AboutSheenExtUL.NAME = "AboutSheenExtUL";
AboutSheenExtMQ.NAME = "AboutSheenExtMQ";
AboutSheenIntMQ.NAME = "AboutSheenIntMQ";
function ZipcodeValidate($display$$) {
  this.display = $display$$;
  this.name = "zipcodeValidate";
  var $obj$$;
  this.show = function $this$show$($x$$, $y$$) {
    this.display.center(void 0 === $x$$, void 0 === $y$$);
    $x$$ && this.display.css("left", $x$$ + "px");
    var $parentTop$$ = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, $selfHeight$$ = this.display.height(), $minTop$$ = $("#colorsmart div.note")[0].offsetTop - $selfHeight$$;
    topPosition = 0 >= $parentTop$$ ? 25 : $parentTop$$ - $selfHeight$$ < $minTop$$ ? $parentTop$$ - $selfHeight$$ + 200 : $minTop$$ + 100;
    this.display.css("top", topPosition + "px");
    this.display.show();
    $($errBox$$).hide()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  var $errBox$$ = this.display.find(".zipcode_validate_bottom_content"), $errMsg$$ = this.display.find(".zip_error_message"), $zipcodeField$$ = this.display.find("#HDZipcode"), $findBtn$$ = this.display.find(".btnFind");
  this.setInitialContent = function $this$setInitialContent$() {
    $($zipcodeField$$).val("");
    $findBtn$$.unbind().bind("click", function($e$$) {
      $obj$$.isValidNumber($($zipcodeField$$).val()) ? ($($errBox$$).hide(), $obj$$.getStore($($zipcodeField$$).val())) : ($($errBox$$).show(), $($errMsg$$).text("Please enter a valid zip code"))
    })
  };
  this.getStore = function $this$getStore$($url$$) {
    $url$$ = "http://" + getUserServiceURL() + "/storelocator/getstate/" + $url$$;
    $.ajax({url:$url$$, type:"GET", dataType:"json", async:!1, success:function($response$$) {
      var $state_name$$ = $response$$.state_name;
      $response$$ = $response$$.state_code;
      buyNow.isOnlySamples ? 0 <= $.inArray($response$$, ["CA", "OR", "CT", "RI", "VT"]) ? buyNow.showStateAlert("We have determined that this zip code is in " + $state_name$$ + ". Gallon and 5 gallon containers cannot be shipped to " + $state_name$$ + ". Samples however are available for delivery in your state.<br/><br/> If you are planning to ship to a different location, please enter the shipping zip code to <a class='check-zip-availibility' onclick='buyNow.showZipCodeAvailability();'>check availability</a>.", 
      "") : 0 <= $.inArray($response$$, ["AK", "GU", "HI", "PR", "VI"]) ? buyNow.showStateAlert("We have determined that this zip code is in " + $state_name$$ + ". Paint products cannot be shipped to " + $state_name$$ + ".<br/><br/> If you are planning to ship to a different location, please enter the shipping zip code to <a class='check-zip-availibility' onclick='buyNow.showZipCodeAvailability();'>check availability</a>.<div class='btnRed back_to_proj fr'>Back To Project</div>", null) : buyNow.showStateAlert("Gallon and 5 gallon containers are available for delivery to " + 
      $state_name$$ + ".", function() {
        buyNow.isOnlySamples = !1;
        buyNow.isNoSales = !1;
        buyNow.setInitialContent()
      }) : buyNow.isNoSales && (0 <= $.inArray($response$$, ["AK", "GU", "HI", "PR", "VI"]) ? buyNow.showStateAlert("We have determined that this zip code is in " + $state_name$$ + ". Paint products cannot be shipped to " + $state_name$$ + ".<br/><br/> If you are planning to ship to a different location, please enter the shipping zip code <a class='check-zip-availibility' onclick='buyNow.showZipCodeAvailability();'>check availability</a>.<div class='btnRed back_to_proj fr'>Back To Project</div>", 
      null) : 0 <= $.inArray($response$$, ["CA", "OR", "CT", "RI", "VT"]) ? buyNow.showStateAlert("We have determined that this zip code is in " + $state_name$$ + ". Gallon and 5 gallon containers cannot be shipped to " + $state_name$$ + ". Samples however are available for delivery in your state.<br/><br/> If you are planning to ship to a different location, please enter the shipping zip code to <a class='check-zip-availibility' onclick='buyNow.showZipCodeAvailability();'>check availability</a>.", 
      function() {
        buyNow.isNoSales = !1;
        buyNow.isOnlySamples = !0;
        buyNow.setInitialContent()
      }) : buyNow.showStateAlert("Paint products are available for delivery to " + $state_name$$ + ".", function() {
        buyNow.isOnlySamples = !1;
        buyNow.isNoSales = !1;
        buyNow.setInitialContent()
      }))
    }, error:function($xhr$$) {
      console.log("Unable to process the request");
      $($errBox$$).show();
      $($errMsg$$).text("Please enter a valid zip code")
    }})
  };
  this.isValidNumber = function $this$isValidNumber$($n$$) {
    return/^[0-9]{1,5}$/.test($n$$)
  };
  this.init = function $this$init$() {
    $obj$$ = this;
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
ZipcodeValidate.NAME = "ZipcodeValidate";


import cv2
import os
from PIL import Image

size = 512,512

input_dir = 'C://Users//Bill//Desktop//my//my_code//website//billpsomas.github.io//images//fulls'
output_dir = 'C://Users//Bill//Desktop//my//my_code//website//billpsomas.github.io//images//thumbs'

for i, name in enumerate(os.listdir(input_dir)):
	print('Reading -> ' + str(os.listdir(input_dir)[i]))
	im = Image.open(input_dir + '//' + os.listdir(input_dir)[i])
	im.thumbnail(size, Image.ANTIALIAS)
	im.save(output_dir + '//' + str(name), "JPEG")

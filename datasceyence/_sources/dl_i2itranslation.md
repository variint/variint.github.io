# Image to Image translation

## Skill

### Description
There are multiple ways of performing the related tasks: image-to-image translation, image synthesis, texture synthesis and texture transfer. The common goal is to transfer a source object/texture/illumination/colour into a destination image.
Poisson image editing > Seamless cloning: The goal of seamless cloning is to avoid discontinuinities at edges between source and destination regions.

### Goals
* I know about Guided Interpolation and Poisson partial differential equations.
* I know about the seamless importation of a source image region into a destination region.
* I can distinguish between the seamless cloning types (1) importing gradients and (2) mixing gradients.
* I can list image transformation techniques that are defined by using a guidance field depending entirely on the original image.

### Links
* Contribution paper: Poisson Image Editing (Perez et al., 2003) - https://www.cs.jhu.edu/~misha/Fall07/Papers/Perez03.pdf
* Tutorial: Seamless Cloning using OpenCV (Python, C++) - https://learnopencv.com/seamless-cloning-using-opencv-python-cpp/
* Cycle-GAN
* Cross-Domain Auto-Encoder and Decoder
* Fourier domain adaptation
* Image quilting - "Texture transfer"



## Architecture

### MUNIT
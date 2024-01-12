# Image to Image translation

## Skill

### Description
There are multiple ways of performing the related tasks: image-to-image translation, image synthesis, texture synthesis and texture transfer. The common goal is to transfer a source object/texture/illumination/colour into a destination image.
Poisson image editing - Seamless cloning: The goal of seamless cloning is to avoid discontinuinities at edges between source and destination regions.

### Goals
* Learn about Guided Interpolation and Poisson partial differential equations.
* Learn about the seamless combination of a source image region into a destination region.
* Learn about the seamless cloning types (1) importing gradients and (2) mixing gradients.
* Learn about image transformation techniques that are defined by using a guidance field depending entirely on the original image.

## Related Work

### Poisson Image Editing
* Contribution paper: Poisson Image Editing (Perez et al., 2003) - https://www.cs.jhu.edu/~misha/Fall07/Papers/Perez03.pdf
* Tutorial: Seamless Cloning using OpenCV (Python, C++) - https://learnopencv.com/seamless-cloning-using-opencv-python-cpp/



### Generative-based
* Cycle-GAN: unsupervised
* Cross-Domain Auto-Encoder and Decoder
* Fourier domain adaptation
* Image quilting - "Texture transfer"
* MNISE-GAN 
* U-GAT-IT 
* NICE-GAN
* pix2pix: requires image pairs

# Multi-modal
* MUNIT
* DRIT++
* DSMAP



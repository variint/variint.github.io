# Supervised learning

## Introdcution

### Description
In supervised learning, a function is used to measure how close a predicted output f(x) is to a target label y. The goal is to quantify some cost, loss, regret, distance or price paid for inaccurate prediction. The resulting total cost over a collection of input-output pairs is used to measure the performance of the function. {cite}`zhang2023disentanglementmetrics`


## Data Annotation Tools
A data annotation tool is used to create the target label/ground truth.

### Makesense.ai
makesense.ai is a free-to-use online tool for labeling pictures

### ImageJ
https://imagej.net/imaging/annotating-images

## Architectures

### CNN

### UNet

### GAN
* *Generative adversarial networks (GANs)* typically employ a generator G and a discriminator D in an adversarial game. G generates an image by sampling from an isotropic Gaussian distribution, while D is given the synthetic image and a real one, and tries to identify which input is real/fake. Especially CycleGAN.

### Transformer


## References
```{bibliography}
:filter: docname in docnames
```
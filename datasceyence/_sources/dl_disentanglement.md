# Disentangled learning

## Introduction

### Description
Disentangled features mean that individual network units detect specific real world concepts {cite}`molnar2022blackboxbook`.

In disentanglement, main factors of variation that are present in a data distribution are separated. Typically factors are decomposed into a single vector representation. 

*Content-style disentanglement (CSD)*, decomposes the image into the domain-specific and domain-invariant representations/latent variables.

*Latent space* (latent feature space, embedding space) is a representation of compressed data in which similar data points are closer together in space.

*Domain-specific* ("the difference") representations describes the style of an image, precisely this could be colour, intensities, and noise. This information may be encoded as a vector latent variable "z".

*Domain-invariant* ("the similarity") representations describe the content of an image, hence the geometry. In order to preserve spatial correlations, this can be encoded in a spatial (tensor) latent variable "C".

### Goals
* I know metrics for measuring the level of disentanglement.
* I know the difference between domain-specific and domain-invariant representations.


<!-- 
## Related Work

### Inductive bias
* Original version: Induction, Inductive Biases, and Infusing Knowledge into Learned Representations (Finlayson, 2020) - https://sgfin.github.io/2020/06/22/Induction-Intro/

* Review Paper: Review of Disentanglement Approaches for Medical Applications (Fragemann, 2022) - https://arxiv.org/abs/2203.11132
* Review paper: Learning Disentangled Representations in the Imaging Domain (Liu, 2022) - https://arxiv.org/abs/2108.12043


### Other links:
* Domain Agnostic Learning with Disentangled Representations (Peng et al., 2019) - http://proceedings.mlr.press/v97/peng19b/peng19b.pdf
* Style and Content Disentanglement in Generative Adversarial Networks - https://arxiv.org/pdf/1811.05621.pdf
* Artifact Disentanglement Network for Unsupervised Metal Artifact Reduction - https://arxiv.org/pdf/1906.01806.pdf
* Mutual Information-based Disentangled Neural Networks for Classifying Unseen Categories in Different Domains: Application to Fetal Ultrasound Imaging - https://arxiv.org/pdf/2011.00739.pdf
* MUNIT - Multimodal Unsupervised Image-to-Image Translation - https://arxiv.org/pdf/1804.04732.pdf
-->




## Content-Style Disentanglement Enforcing Models

<!--*Unsupervised Image-to-Image Translation (UNIT)* consists of two VAE-GANs. The latent space is fully shared. -->
<!--Concepts used: Cycle-Consistency, GAN, VAE, Gaussian latent space assumption, -->
<!--https://arxiv.org/pdf/1703.00848.pdf-->

* *Multimodal Unsupervised Image-to-Image Translation (MUNIT)* consists of a combination of auto-encoders and discriminators. Their adapted auto-encoder architecture introduces a content encoder next to the style encoder. While the basic task of the auto encoder remains reconstructing an image, latent variables for both content and style are accessible separately. - https://arxiv.org/pdf/1804.04732.pdf <!-- Adaptive Instance Normalization (AdaIN) -->

* *Style and Content Disentangled GAN (SC-GAN)* decompose into a content code that represents the geometrical information of the data, and a style code that captures textural properties. - https://arxiv.org/abs/1811.05621

* *Artefact disentanglement network (ADN)* separate the metal artifacts from clinical CT images in a latent space. - https://arxiv.org/pdf/1906.01806.pdf

* *Disentangled Anatomy Arithmetic GAN (DAA-GAN)* disentangles images into spatial anatomy (tensor) factors and accompanying imaging (vector) representations. - https://github.com/spthermo/DAA-GAN

* *Spatial Decomposition Network (SDNet)* disentangles anatomy (content) and modality (style). - https://github.com/spthermo/SDNet

* *Mutual Information-based Disentangled Neural Networks (MIDNet)* separate digital features (categorical features) from domain features to obtain generalized digital features. - https://arxiv.org/abs/2011.00739

* *Style and Content Disentanglement in Generative Adversarial Networks* - https://arxiv.org/pdf/1811.05621.pdf

### Encoder-blocks

* *Instance Normalisation* for style removal
* *Avarage Pooling* for content removal
* *Parsimony* - Vector Quantisation (VQ) restricts the amount of information in a latent space

### Decoder-blocks
Effective recombination or entanglement of the content and style representations in a decoder is vital.

* *Concatenation*
* *Adaptive Instance Normalisation (AdaIN)* combines a content and style representation.
* *Feature-wise Linear Modulation (FiLM)*
* *Spatially-Adaptive Denormalisation (SPADE)*

### Latent Space
Operations and priors can be applied on a latent space to encourage disentanglement.

* *Gaussian prior* - Encouraging the distribution of the encoded (vector) latent representation to match a Gaussian is a common prior. 
* *Task priors* - Task losses, such as the segmentation loss, also contribute at learning a disentangled content representation 
* *Gradient reversal layer*
* *Latent projection*
* *Frequency Decomposition*
* *Structured latent*



## Applications

* *Synthesis*: I2I translation, artefact reduction, casual synthesis, disease decomposition, harmonisation, controllable synthesis, domain adaptation
* *Segmentation*: single-modal vs multi-modal
* *Classification*
* *Registration*
* *Federated learning*

### Synthesis
*Image-to-image (I2I) translation* is one spatially equivariant application of CSD. The goal is to translate one image representation into another where a specific factor differs (e.g. style) while others are maintained. One architecture to use is the MUNIT: To translate an image to another domain, they recombine its content code with a random style code sampled from the style space of the target domain. The network consists of two encoder-decoder pairs for two domains.




## References
```{bibliography}
:filter: docname in docnames
```
# Disentangled learning

## Skill

### Description

### Goals
* I know metrics for measuring the level of disentanglement.
* I know the difference between domain-specific and domain-invariant representations.

### Links
* Modified PhD thesis excerpt (GitHub): Induction, Inductive Biases, and Infusing Knowledge into Learned Representations (Finlayson, 2020) - https://sgfin.github.io/2020/06/22/Induction-Intro/
* Review Paper: Review of Disentanglement Approaches for Medical Applications (Fragemann, 2022) - https://arxiv.org/abs/2203.11132
* Review paper: Learning Disentangled Representations in the Imaging Domain (Liu, 2022) - https://arxiv.org/abs/2108.12043
* Book (GitHub): Network Dissection (Molnar) - https://christophm.github.io/interpretable-ml-book/cnn-features.html#network-dissection

### Other links:
* Domain Agnostic Learning with Disentangled Representations (Peng et al., 2019) - http://proceedings.mlr.press/v97/peng19b/peng19b.pdf
* Style and Content Disentanglement in Generative Adversarial Networks - https://arxiv.org/pdf/1811.05621.pdf
* Artifact Disentanglement Network for Unsupervised Metal Artifact Reduction - https://arxiv.org/pdf/1906.01806.pdf
* Mutual Information-based Disentangled Neural Networks for Classifying Unseen Categories in Different Domains: Application to Fetal Ultrasound Imaging - https://arxiv.org/pdf/2011.00739.pdf
* MUNIT - Multimodal Unsupervised Image-to-Image Translation - https://arxiv.org/pdf/1804.04732.pdf



## Background


<!-- ### Representation Learning

Finding good representations for a task is fundamental.
-->


### Disentanglement | Content-style disentanglement (CSD)

<!-- Disentangled representations can address some of the chal-
lenges described until now by learning representations with
equi/in-variances to specific undesired variables, whilst consid-
ering the data generation process and potential domain shifts.
Although a widely accepted definition of disentangled repre-
sentations is yet to be defined, the main intuition is that by dis-
entangling, we separate out the main factors of variation that
are present in our data distribution (Bengio et al., 2013; Hig-
gins et al., 2018; Caselles-Dupr ́e et al., 2019; Locatello et al.,
2019b). We characterise a factor as “disentangled” when any
intervention on this factor results in a specific change in the gen-
erated data (Caselles-Dupr ́e et al., 2019; Thomas et al., 2017). -->

In disentanglement, main factors of variation that are present in a data distribution are separated. Typically factors are decomposed into a single vector representation. 
A recent trend in disentanglement focuses on the decomposition of the input image into different latent variables that encode different properties (e.g. style and content)

One specific version of disentanglement is the *content-style disentanglement (CSD)*, which has the goal to decompose the image into the domain-specific and domain-invariant representations.

### Latent Space

*Latent space* (latent feature space, embedding space) is a representation of compressed data in which similar data points are closer together in space

*Domain-specific* ("the difference") representations describes the style of an image, precisely this could be colour, intensities, and noise. This information may be encoded as a vector latent variable "z".

*Domain-invariant* ("the similarity") representations describe the content of an image, hence the geometry. In order to preserve spatial correlations, this can be encoded in a spatial (tensor) latent variable "C".


### Domain Shift

Non-synthetic datasets are biased due to the ifinite nature of the acquired data. 

A model’s ability to maintain the desired behaviour across domain changes is also referred to as out-of-distribution generalisation.


<!-- An i.i.d. data distribution is easy to consider but forms a
strong and often unrealistic assumption. All non-synthetic
datasets are somewhat biased due to the finite nature of the ac-
quired data. If learning algorithms are trained with standard
supervised learning (Vapnik, 1999) without additional assump-
tions, there is little hope that the learned function will be ro-
bust to domain shifts. A model’s ability to maintain the de-
sired behaviour across domain changes is also referred to as
out-of-distribution generalisation (Shen et al., 2021). For the
brain tumour detection example, both CT or MRI scanners ac-
quire images, but we might know that a given hospital uses CT.
In this case, modality-related factors are linked to the hospital-
related variables. Therefore, understanding the data generation
process and the underlying relations between variables can help
to distill the important visual information, and to create mech-
anisms that are more generalisable. Such reasoning enables the
design of principled strategies for mitigating the data bias (Cas-
tro et al., 2020). In fact, we can explicitly define the changes
we want our model to be invariant or equivariant to, by model-
ing domain shifts such as: i) population, i.e. different cohorts,
ii) acquisition, i.e. different cameras, sites or scanners, and iii)
annotation shift, i.e. different annotators. -->


<!-- 
### Domain Knowledge

Inductive Bias

Inductive bias refers to a set of assumptions made by a learning algorithm in order to predict outputs of given inputs that it has not encountered. The goal is to generalize a finite set of observation (training data) into a general model of the domain. 

There are two types of inductive biases. Relational inductive biases represent the relationship between entities in a network. Non-relational inductive biases is a set of techniques that further constrain the learning algorithm.


Disentanglement as inductive bias
The solution to identifiability is the use of domain knowl-
edge, i.e. the inductive bias, instead of using explicit supervi-
sion (Locatello et al., 2019b; Peters et al., 2017; Khemakhem
et al., 2020). Current representation learning already benefits
from the inductive biases of Convolutional Neural Networks
(CNNs) (Lecun et al., 1998) and Recurrent Neural Networks
(RNNs) (Graves et al., 2013). Outside of the visual domain,
language has been modeled with recurrent neural networks that
capture the sequential nature of data for making predictions
(LeCun et al., 2015). Recent attention and self-attention mod-
els, such as the transformer architecture (Vaswani et al., 2017),
focus on learning the internal structure of the input data. These
self-attention models essentially learn the best inductive biases
for each sample in the data distribution.
Overall, disentanglement priors add structure to the learned
representations to better correspond to the underlying genera-
tion process. It is this useful bias that makes the utilised models
identifiable. One of the goals of this paper is to highlight the
various inductive biases used
-->

<!-- We can categorize inductive biases into two different groups called relational and non-relational. The former represents the relationship between entities in the network, while the latter is a set of techniques that further constrain the learning algorithm. -->


<!-- Without a bias of that kind, induction would not be possible, since the observations can normally be generalized in many ways. Treating all these possibilities in equally, i.e., without any bias in the sense of a preference for specific types of generalization (reflecting background knowledge about the target function to be learned), predictions for new situations could not be made. -->





## Architecture

### Basic Generative Models


```{figure} _static/images/drawio/generative_models.png
---
height: 300px
name: directive-fig
align: right
---
Generative Models
```

* *Auto-encoders / Variational Auto Encoders (VAEs) / Masked auto-encoders* compose factors via image reconstruction. A typical VAE, discovers and disentangles factors of variation by forcing independence between different dimensions of z, while reconstructing the input.

* *Normalising flows (NFs)* are a family of invertible probabilistic models that can compute the exact likelihood (not the approximated as in VAEs).

* *Generative adversarial networks (GANs)* typically employ a generator G and a discriminator D in an adversarial game. G generates an image by sampling from an isotropic Gaussian distribution, while D is given the synthetic image and a real one, and tries to identify which input is real/fake. Especially CycleGAN.



### Content-Style Disentanglement Enforcing Models

<!--*Unsupervised Image-to-Image Translation (UNIT)* consists of two VAE-GANs. The latent space is fully shared. -->
<!--Concepts used: Cycle-Consistency, GAN, VAE, Gaussian latent space assumption, -->
<!--https://arxiv.org/pdf/1703.00848.pdf-->

* *Multimodal Unsupervised Image-to-Image Translation (MUNIT)* consists of a combination of auto-encoders and discriminators. Their adapted auto-encoder architecture introduces a content encoder next to the style encoder. While the basic task of the auto encoder remains reconstructing an image, latent variables for both content and style are accessible separately. - https://arxiv.org/pdf/1804.04732.pdf <!-- Adaptive Instance Normalization (AdaIN) -->

* *Style and Content Disentangled GAN (SC-GAN)* decompose into a content code that represents the geometrical information of the data, and a style code that captures textural properties. - https://arxiv.org/abs/1811.05621

* *Artefact disentanglement network (ADN)* separate the metal artifacts from clinical CT images in a latent space. - https://arxiv.org/pdf/1906.01806.pdf

* *Disentangled Anatomy Arithmetic GAN (DAA-GAN)* disentangles images into spatial anatomy (tensor) factors and accompanying imaging (vector) representations. - https://github.com/spthermo/DAA-GAN

* *Spatial Decomposition Network (SDNet)* disentangles anatomy (content) and modality (style). - https://github.com/spthermo/SDNet

* *Mutual Information-based Disentangled Neural Networks (MIDNet)* separate digital features (categorical features) from domain features to obtain generalized digital features. - https://arxiv.org/abs/2011.00739



### Encoder

*Instance Normalisation* for style removal

*Avarage Pooling* for content removal

*Parsimony* - Vector Quantisation (VQ) restricts the amount of information in a latent space




### Decoder
Effective recombination or entanglement of the content and style representations in a decoder is vital.

*Concatenation*

*Adaptive Instance Normalisation (AdaIN)*

*Feature-wise Linear Modulation (FiLM)*

*Spatially-Adaptive Denormalisation (SPADE)*



### Latent Space
Operations and priors can be applied on a latent space to encourage disentanglement.

*Gaussian prior* - Encouraging the distribution of the encoded (vector) latent representation to match a Gaussian is a common prior. 

*Task priors* - Task losses, such as the segmentation loss, also contribute at learning a disentangled content representation 

*Gradient reversal layer*

*Latent projection*

*Frequency Decomposition*

*Structured latent*



<!-- ### Learning-based

*Cycle-consistency*

*Latent regression*
-->




## Applications

* *Synthesis*: I2I translation, artefact reduction, casual synthesis, disease decomposition, harmonisation, controllable synthesis
* *Segmentation*: single-modal vs multi-modal
* *Classification*
* *Registration*
* *Federated learning*


### Synthesis

*Image-to-image (I2I) translation* is one spatially equivariant application of CSD. The goal is to translate one image representation into another where a specific factor differs (e.g. style) while others are maintained. One architecture to use is the MUNIT: To translate an image to another domain, they recombine its content code with a random style code sampled from the style space of the target domain. The network consists of two encoder-decoder pairs for two domains.



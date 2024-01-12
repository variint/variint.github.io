# Self-supervised learning

## Introduction

### Description
Self-supervised learning doesn't use labels. This step can be used as pre-training or for representation learning.

### Goals
* Learn about the different approaches for self-supervised learning.

## Related work

* Original Work: Self-supervised learning for medical image classification: a systematic review and implementation guidelines (Huang, 2023) - https://www.nature.com/articles/s41746-023-00811-0



## Generative approaches

```{figure} _static/images/drawio/generative_models.png
---
height: 300px
name: directive-fig
align: right
---
Generative Models
```

### Auto-encoders / Variational Auto Encoders (VAEs) / Masked auto-encoders
Auto encoders (and variants) compose factors via image reconstruction. A typical VAE, discovers and disentangles factors of variation by forcing independence between different dimensions of z, while reconstructing the input.

* Original version: Masked Autoencoders Are Scalable Vision Learners - https://arxiv.org/pdf/2111.06377.pdf


### Normalising Flows
* *Normalising flows (NFs)* are a family of invertible probabilistic models that can compute the exact likelihood (not the approximated as in VAEs).

## Contrastive Learning approaches

### SimCLR


## Innate relationship approaches

### Pseudo labels
* Reverse engineer the augmentation - e.g. model predicts rotation degree (e.g. 90 deg)

## References
```{bibliography}
:filter: docname in docnames
```
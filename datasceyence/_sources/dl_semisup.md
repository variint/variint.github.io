# Semi-Supervised learning (SSL)

## Skill

### Description
Semi-supervised learning combines a (small) labelled with a (bigger) unlabelled dataset to perform a task such as classification or segmentation.

### Goals
* I know the difference between self-training and co-training.
* I know multiple ways to implement SSL.
* I can explain the mean teacher approach.
* I can name the main assumptions in SSL.

### Links
* Contribution paper: Mean teachers are better role models: Weight-averaged consistency targets improve semi-supervised deep learning results (Tarvainen et al., 2017) - https://arxiv.org/abs/1703.01780
* Review paper: Not-so-supervised: A survey of semi-supervised, multi-instance, and transfer learning in medical image analysis (Cheplygina et al., 2019) - https://arxiv.org/abs/1804.06353
* Review paper: An Overview of Deep Semi-Supervised Learning (Ouali et al., 2020) - https://arxiv.org/abs/2006.05278
* Github repository with papers: Semi-supervised-learning-for-medical-image-segmentation - https://github.com/HiLab-git/SSL4MIS
* Contribution paper: Temporal Ensembling for Semi-Supervised Learning (Laine and Aila, 2017) - https://arxiv.org/pdf/1610.02242.pdf
* GitHub repository with implementations: https://github.com/ZHKKKe/PixelSSL/tree/master/pixelssl/ssl_algorithm


## Background

Over the past decades, there were many approaches introduced to tackle semi-supervised learning. Semi-supervised learning (SSL) is halfway between supervised and unsupervised learning, using both, labelled and unlabelled data for training.

We want to introduce three main concepts, entropy minimisation, consistency regularisation and pseudo labelling. 

### Entropy minimisation
Entropy minimisation incorporates uncertainty additionally to confidence into the training routine to receive more certain predictions. In its simplest way is performed at pixel-level, so that each spatial unit of the prediction map brings an independent contribution to the final objective. <!-- \citep{grandvalet2004semi} -->

### Consistency regularisation
Consistency regularisation follows the assumption, that a perturbation, for instance, dropout, data augmentation or multiple models trained together, should not modify model predictions given the same input. 

### Pseudo-labelling
Pseudo-labelling methods use a model, trained on the labelled set to produce additional training examples by labelling images of the unlabelled set.


## Architecture
Here you can find multiple architectures that use these strategies as a foundation.

### Self-training and co-training
Self-training (which became popular in the 1970s through the success of the expectation maximisation algorithm), and later co-training use pseudo labelling. Either a single or multiple networks generate pseudo labels for further training iterations. <!-- \citep{blum1998cotraining} -->

### Temporal ensembling
Temporal ensembling employs self-ensembling. This means that a prediction of unlabelled images are derived using the outputs of the network-in-training on different epochs using different regularisation and data augmentation techniques. <!-- \citep{laine2016temporal} -->

### Mean Teacher
The mean teacher algorithm uses the strategy of temporal ensembling in combination with an exponential moving average between two models. This can improve consistency regularisation and reduces overfitting.
One of its drawbacks is that given a large number of epochs, the teacher model's weights converge to those of the student model, the result is that biased and unstable predictions are carried over to the student. <!-- \citep{tarvainen2017mean} -->

### Virtual Adversarial Training (VAT)
Virtual Adversarial Training (VAT) is a semi-supervised learning method based on adversarial noise. Adversarial noise is injected into the training data for consistency regularisation. Using a confidence threshold, pseudo labels can be obtained. It can improve the generalisation performance and reduce the influence of noisy labels. <!-- \citep{miyato2018virtual} -->

### MixMatch
MixMatch performs linear interpolation to mix both labelled and unlabeled images to get augmented image-label pairs. <!-- \citep{berthelot2019mixmatch} -->

### FixMatch 
FixmMatch enforces the prediction consistency between weakly augmented images and strongly augmented images. <!-- \citep{sohn2020fixmatch} -->
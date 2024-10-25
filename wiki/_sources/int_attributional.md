# Attributional interpretablility

## Introduction

Attributional interpretability quantifies individual input feature influences. 
Many methods focus on some sort of gradient visualisation.

### Key takeaways
* Learn about saliency maps.
* Learn about guided backpropagation.

### Keywords
* GradCAM
* Gradients
* Heatmaps: a way for visualising important regions derived from attribution methods (e.g. GradCAM results)

### Tools
* DoWhy: Intro to Causal AI Using the DoWhy Library in Python
* Leap AI: https://docs.tryleap.ai/
* https://raw.githubusercontent.com/bdcht/grandalf/master/doc/hgd.pdf


## Methods

* Original version: https://theaisummer.com/xai/

### Feature Map
Visual representation of the outputs from various layers in a neural network, highlighting how features are detected.


### Layer-wise Relevance Propagation (LRP)
A technique that assigns relevance scores to each input feature based on the model's output, helping to explain predictions.
- A technique for backpropagating the relevance scores through the network to identify which parts of the input were most influential for the prediction.

### DeconvNet
A method for visualizing features learned by a convolutional network by reversing the forward pass to project back to the input space.

### Guided Backprop
A technique that enhances the backpropagation of gradients to visualize important regions in an image influencing predictions.

### Saliency Maps
Visualizations that highlight which parts of an input (e.g., image pixels) most influence the model’s prediction.
- Visualizations that highlight which parts of the input (e.g., image pixels) contribute most to a model’s prediction, providing insight into how specific features affect outcomes.

### Guided Saliency
An improved version of saliency maps that considers the gradients of the activation function to emphasize important input regions.

### Taylor Decomposition
A method that decomposes the output of a neural network into contributions from different input features to explain predictions.

### Integrated Gradients
A method for attributing the output of a neural network to its input features based on the integral of gradients along a path from a baseline.

### Deep LiFT
A method that assigns importance scores to input features based on how the model's output changes relative to a baseline input.

### Integrated Gradients with Perturbations
Perturbs input images along a baseline path to evaluate how important each pixel is to the model output.

### LIME (Local Interpretable Model-agnostic Explanations)
Perturbs image pixels to approximate a local, interpretable model that explains a specific prediction.

### SHAP (SHapley Additive exPlanations)
Calculates Shapley values by adding and removing pixel groups to quantify each region's contribution to the prediction.

### CAM (Class Activation Mapping)
Uses class-specific weights to generate heatmaps indicating which parts of an image contribute most to a given class prediction.

### GradCAM (Gradient-weighted Class Activation Mapping)
A visualization technique that uses the gradients of the model to identify which regions of an image are most important for a specific prediction.
- Visualizes the areas of an input image that most influence the model’s prediction by combining gradients with activation maps from convolutional layers.

### Occlusion Sensitivity
Analyzes the effect on predictions by masking parts of an image to reveal important regions for the model’s decision.

### Feature Ablation
Sequentially removes image features (like superpixels) to determine their importance by measuring prediction changes.

### Sensitivity Analysis
Introduces small perturbations across an image to see which regions lead to the largest changes in prediction confidence.

### Counterfactual Explanations
Alters key image features to create a minimally modified version of the input that changes the model's prediction.

### Guided Perturbations
Systematically distorts specific visual patterns in the image to highlight areas the model relies on for its decision.

### Feature Importance
Measures the contribution of each feature to the model’s predictions, often assessed through methods like permutation importance or SHAP.

### SHAP (SHapley Additive exPlanations)
Provides a unified measure of feature importance and model explainability by attributing each prediction to the contribution of each feature using cooperative game theory.

### LIME (Local Interpretable Model-agnostic Explanations)
Creates locally interpretable models to approximate the behavior of a more complex model in the vicinity of a particular prediction, helping to understand individual predictions.

### Partial Dependence Plots (PDPs)
Illustrates the relationship between a feature and the predicted outcome, averaging the effects of all other features to show how changes in the feature affect predictions.

### Individual Conditional Expectation (ICE) Plots
Displays the effect of a feature on the prediction for individual instances, providing insight into how feature values influence predictions on a case-by-case basis.

### Permutation Importance
Measures the change in model performance when the values of a feature are randomly shuffled, which helps assess the feature’s impact on model accuracy.

### Rule-Based Explanations
Generates human-understandable rules that approximate the decision-making process of the model, often used in models like decision trees or rule-based classifiers.

### Activation Maps
Shows which parts of a neural network's layers are activated by a given input, providing insight into the features and patterns that the network is focusing on.

### Attention Maps
Used in models with attention mechanisms to visualize which parts of the input are being focused on for a given prediction, often used in natural language processing.

### Model Distillation
Involves training a simpler, interpretable model to mimic the behavior of a complex model, providing insights into the complex model’s decision-making process.

### Surrogate Models
Employs simpler, interpretable models to approximate the behavior of more complex models, helping to understand the decision-making process of the complex model.



<!-- 

### Links
* Distilled Notes for Stanford CS231n: Convolutional Neural Networks for Visual Recognition (Chadha, 2020) - https://aman.ai/cs231n/visualization/
* Stanford CS231n: Lecture 14: Visualizing and Understanding (Fei-Fei Li & Justin Johnson & Serena Yeung, 2019) - http://cs231n.stanford.edu/slides/2019/cs231n_2019_lecture13.pdf
* Article: Feature Visualization (Olah et al., 2017) - https://distill.pub/2017/feature-visualization/
* Book (GitHub): Interpretable Machine Learning: A Guide for Making Black Box Models Explainable (Molnar) - https://christophm.github.io/interpretable-ml-book/
* Code (GitHub): Convolutional Neural Network Visualizations (Ozbulak, 2019) - https://github.com/utkuozbulak/pytorch-cnn-visualizations
* https://towardsdatascience.com/explainable-neural-networks-recent-advancements-part-4-73cacc910fef

### Youtube
* Human-centered AI (non-technical): https://www.youtube.com/watch?v=ZxPV_KVq-tI

-->

## References
```{bibliography}
:filter: docname in docnames
```
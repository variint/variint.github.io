# Metrics

## Introduction


### Description


### Key Takeaways
* Learn about performance metrics
* Learn about faithfullness of xAI



## Methods (Mechanistic Interpretability Metrics)

### Activation Maximization
- Identifies the input patterns that maximally activate a particular neuron or layer, helping to understand what features or concepts the neuron is detecting.

### Neuron Attribution
- Determines the contribution of individual neurons to the final prediction, often used to understand the role of specific neurons in the model’s decision-making process.

### Feature Attribution
- Quantifies the importance of each feature in making a prediction, often using methods like SHAP (SHapley Additive exPlanations) or LIME (Local Interpretable Model-agnostic Explanations).

### Counterfactual Explanations
- Provides explanations by generating input variations that would lead to different predictions, helping to understand the decision boundaries of the model.

### Internal State Analysis
- Examines the internal activations or state changes within the model to understand how different inputs are processed and how they affect the final output.

### Attribution Maps
- Visualizations that show how different parts of the input contribute to the prediction, often using techniques like integrated gradients or gradient-based methods.

### Feature Visualization
- Directly visualizes the features learned by the model, such as filters in a convolutional neural network, to understand what the model is focusing on.

### Decomposition Methods
- Analyzes the model’s decisions by decomposing the contributions of various parts of the network, helping to identify which components are critical for specific predictions.

### Model Distillation
- Simplifies a complex model into a more interpretable model while preserving its behavior, allowing for easier analysis and understanding of the model’s decision-making process.

### Sensitivity Analysis
- Assesses how changes in the input or model parameters affect the predictions, providing insights into the robustness and stability of the model’s internal mechanisms.

### Concept Drift Detection
- Monitors changes in the underlying data distribution or the model’s behavior over time, helping to understand how the model adapts to new or shifting concepts.



## Distance Metrics (for Adversarial Attacks)

### L2 Distance
- **Definition**: Euclidean distance between the original and adversarial example.
- **Formula**: \[ \text{L2 Distance} = \sqrt{\sum_{i=1}^n (x_i - x_i')^2} \]
- **Usage**: Measures the overall magnitude of perturbations applied to the input, providing a sense of how much the input has been altered.

### L∞ Distance (Infinity Norm)
- **Definition**: Maximum change in any single dimension of the input.
- **Formula**: \[ \text{L∞ Distance} = \max_i |x_i - x_i'| \]
- **Usage**: Focuses on the largest single perturbation applied to any feature, indicating the most significant individual change.

### L1 Distance (Manhattan Distance)
- **Definition**: Sum of the absolute differences between the original and adversarial examples.
- **Formula**: \[ \text{L1 Distance} = \sum_{i=1}^n |x_i - x_i'| \]
- **Usage**: Measures the total absolute change across all dimensions, useful for assessing overall perturbation in terms of feature-wise changes.

### Cosine Similarity
- **Definition**: Measures the cosine of the angle between the original and adversarial examples in high-dimensional space.
- **Formula**: \[ \text{Cosine Similarity} = \frac{x \cdot x'}{\|x\| \|x'\|} \]
- **Usage**: Evaluates the similarity in direction between the original and adversarial examples, often used to assess how directionally close two vectors are.

### Jaccard Distance
- **Definition**: Measures dissimilarity between two sets, used in scenarios where inputs are categorical or binary.
- **Formula**: \[ \text{Jaccard Distance} = 1 - \frac{|A \cap B|}{|A \cup B|} \]
- **Usage**: Quantifies the proportion of non-overlapping elements between the original and adversarial sets.

### Wasserstein Distance (Earth Mover’s Distance)
- **Definition**: Measures the minimum cost to transform one probability distribution into another.
- **Formula**: \[ \text{Wasserstein Distance} = \inf_{\gamma \in \Gamma(P, Q)} \mathbb{E}_{(x, y) \sim \gamma} [\|x - y\|] \]
- **Usage**: Used to measure how much effort is required to move probability mass between distributions, applicable in scenarios with probability distributions.

### Hamming Distance
- **Definition**: Measures the number of positions at which the corresponding symbols differ, used for binary or categorical data.
- **Formula**: \[ \text{Hamming Distance} = \sum_{i=1}^n \mathbf{1}_{x_i \ne x_i'} \]
- **Usage**: Counts the number of differing elements between two binary strings or categorical inputs.

### Mahalanobis Distance
- **Definition**: Measures the distance between a point and a distribution, considering correlations between variables.
- **Formula**: \[ \text{Mahalanobis Distance} = \sqrt{(x - \mu)^T S^{-1} (x - \mu)} \]
- **Usage**: Takes into account the covariance of the data, providing a measure of distance in terms of statistical dispersion.

### Total Variation Distance
- **Definition**: Measures the maximum difference between the probabilities assigned by two distributions.
- **Formula**: \[ \text{Total Variation Distance} = \frac{1}{2} \sum_{x} |P(x) - Q(x)| \]
- **Usage**: Quantifies the divergence between two probability distributions, often used in the context of probabilistic models.






## Types of Sanity Checks



### Label Consistency Check
- **Definition**: Checks if the model's predictions are consistent with the expected output for given inputs.
- **Method**: Compare model predictions with known labels or expected outcomes to ensure consistency.
- **Purpose**: Ensures that the model's predictions are accurate and align with the true labels.

### Randomness Check
- **Definition**: Verifies if the model’s explanations are consistent when applied to random or synthetic data.
- **Method**: Generate random or synthetic inputs and assess if the explanations remain sensible and consistent.
- **Purpose**: Checks if the explanation technique is robust and not overly sensitive to random inputs.

### Consistency Across Models
- **Definition**: Ensures that the explanations are consistent across different models or versions of the same model.
- **Method**: Compare explanations from different models or model checkpoints to check for consistency.
- **Purpose**: Verifies if the explanation technique provides stable and reliable insights across various model configurations.

### Boundary Case Check
- **Definition**: Evaluates how the model behaves at the boundaries or extremes of the input space.
- **Method**: Test the model with boundary or edge cases and check if the explanations are still valid and coherent.
- **Purpose**: Ensures that the model and its explanations handle extreme or rare cases appropriately.

### Monotonicity Check
- **Definition**: Verifies if the model’s predictions change monotonically with changes in input features.
- **Method**: Observe if increasing or decreasing input feature values leads to predictable changes in the output.
- **Purpose**: Ensures that the model’s behavior and explanations align with expected monotonic relationships.

### Cross-Validation of Explanations
- **Definition**: Checks if the explanations hold up across different subsets of data or during cross-validation.
- **Method**: Validate the consistency of explanations across different folds or splits of the data.
- **Purpose**: Ensures that the explanations are generalizable and not specific to a particular subset of data.

### Human Validation Check
- **Definition**: Involves human judges to validate the correctness and usefulness of the model’s explanations.
- **Method**: Collect feedback from domain experts or users on the quality and clarity of the explanations.
- **Purpose**: Provides qualitative validation to complement quantitative sanity checks.

### Consistency with Known Facts
- **Definition**: Ensures that the model’s explanations align with established knowledge or domain-specific facts.
- **Method**: Compare explanations with known domain knowledge to validate their accuracy.
- **Purpose**: Verifies that the explanations reflect accurate and relevant domain information.

### Training Stability Check
- **Definition**: Assesses if the model’s explanations remain stable across different training runs or initializations.
- **Method**: Train the model multiple times with different random seeds and check if explanations are consistent.
- **Purpose**: Ensures that explanations are not unduly affected by randomness in training.

### Explanation Plausibility
- **Definition**: Evaluates if the explanations provided are plausible and make sense in the context of the model’s behavior.
- **Method**: Review explanations for logical coherence and relevance to the model’s predictions.
- **Purpose**: Ensures that the explanations are not only accurate but also sensible and understandable.





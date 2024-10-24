# Metrics

## Introduction


### Description


### Goals
* Learn about performance metrics
* Learn about faithfullness of xAI







## Explainability Metrics

### Feature Importance
- Measures the contribution of each feature to the model’s predictions, often assessed through methods like permutation importance or SHAP (SHapley Additive exPlanations).

### SHAP (SHapley Additive exPlanations)
- Provides a unified measure of feature importance and model explainability by attributing each prediction to the contribution of each feature using cooperative game theory.

### LIME (Local Interpretable Model-agnostic Explanations)
- Creates locally interpretable models to approximate the behavior of a more complex model in the vicinity of a particular prediction, helping to understand individual predictions.

### Partial Dependence Plots (PDPs)
- Illustrates the relationship between a feature and the predicted outcome, averaging the effects of all other features to show how changes in the feature affect predictions.

### Individual Conditional Expectation (ICE) Plots
- Displays the effect of a feature on the prediction for individual instances, providing insight into how feature values influence predictions on a case-by-case basis.

### Permutation Importance
- Measures the change in model performance when the values of a feature are randomly shuffled, which helps assess the feature’s impact on model accuracy.

### Counterfactual Explanations
- Provides explanations by showing how the input features would need to change for the model’s prediction to be different, offering insight into decision boundaries.

### Rule-Based Explanations
- Generates human-understandable rules that approximate the decision-making process of the model, often used in models like decision trees or rule-based classifiers.

### Saliency Maps
- Visualizations that highlight which parts of an input (e.g., image pixels) have the most influence on the model’s prediction, commonly used in image classification tasks.

### Activation Maps
- Shows which parts of a neural network's layers are activated by a given input, providing insight into the features and patterns that the network is focusing on.

### Grad-CAM (Gradient-weighted Class Activation Mapping)
- A technique for visualizing which regions of an image are important for a specific prediction by combining the gradients of the output with the activations of convolutional layers.

### Attention Maps
- Used in models with attention mechanisms to visualize which parts of the input are being focused on for a given prediction, often used in natural language processing.

### Model Distillation
- Involves training a simpler, interpretable model to mimic the behavior of a complex model, providing insights into the complex model’s decision-making process.

### Surrogate Models
- Employs simpler, interpretable models to approximate the behavior of more complex models, helping to understand the decision-making process of the complex model.

### Feature Ablation
- Systematically removes features from the model and observes the impact on performance, helping to identify which features are crucial for the model's predictions.







## Mechanistic Interpretability Metrics

### Concept Activation Vectors (CAVs)
- Measures how well a specific concept is represented within a neural network by comparing activation vectors of examples belonging to that concept.

### Activation Maximization
- Identifies the input patterns that maximally activate a particular neuron or layer, helping to understand what features or concepts the neuron is detecting.

### Neuron Attribution
- Determines the contribution of individual neurons to the final prediction, often used to understand the role of specific neurons in the model’s decision-making process.

### Layer-wise Relevance Propagation (LRP)
- A technique for backpropagating the relevance scores through the network to identify which parts of the input were most influential for the prediction.

### Saliency Maps
- Visualizations that highlight which parts of the input (e.g., image pixels) contribute most to a model’s prediction, providing insight into how specific features affect outcomes.

### Grad-CAM (Gradient-weighted Class Activation Mapping)
- Visualizes the areas of an input image that most influence the model’s prediction by combining gradients with activation maps from convolutional layers.

### Feature Attribution
- Quantifies the importance of each feature in making a prediction, often using methods like SHAP (SHapley Additive exPlanations) or LIME (Local Interpretable Model-agnostic Explanations).

### Counterfactual Explanations
- Provides explanations by generating input variations that would lead to different predictions, helping to understand the decision boundaries of the model.

### Internal State Analysis
- Examines the internal activations or state changes within the model to understand how different inputs are processed and how they affect the final output.

### Concept-Based Explanations
- Uses high-level concepts or human-understandable features to explain the model’s behavior, assessing how well these concepts align with the model’s internal mechanisms.

### Subnetwork Probing
- Investigates the roles of specific subnetworks or components within a larger model to understand their contributions to the overall model performance.

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





## Distance Metrics for Adversarial Attacks

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




## Disentanglement Metrics

### Mutual Information Gap (MIG)
- **Definition**: Measures the difference between the mutual information between latent variables and the ground truth factors of variation.
- **Formula**: \[ \text{MIG} = \frac{\text{MI}_{\text{latent}, \text{ground truth}} - \text{MI}_{\text{latent}, \text{random}}}{\text{MI}_{\text{ground truth}, \text{random}}} \]
- **Usage**: Evaluates how well latent factors correspond to ground truth factors, with higher values indicating better disentanglement.

### Beta-VAE Score
- **Definition**: Evaluates the extent of disentanglement in Variational Autoencoders (VAEs) by comparing the mutual information between latent variables and the ground truth.
- **Formula**: \[ \text{Beta-VAE Score} = \frac{\text{MI}_{\text{latent}, \text{ground truth}}}{\text{MI}_{\text{latent}, \text{reconstructed}}} \]
- **Usage**: Assesses how well the latent variables capture distinct and meaningful factors of variation in the data.

### FactorVAE Score
- **Definition**: Measures disentanglement by evaluating the mutual information between latent variables and the ground truth while penalizing entanglement in the VAE.
- **Formula**: \[ \text{FactorVAE Score} = \frac{\text{MI}_{\text{latent}, \text{ground truth}}}{\text{MI}_{\text{latent}, \text{random}}} \]
- **Usage**: Quantifies the ability of the model to disentangle factors by comparing latent variable mutual information with both ground truth and random distributions.

### Disentanglement Score (Dscore)
- **Definition**: A metric that measures the degree of disentanglement based on the ability of the model to represent factors independently.
- **Formula**: \[ \text{Dscore} = \frac{\text{MI}_{\text{latent}, \text{ground truth}}}{\text{MI}_{\text{latent}, \text{reconstructed}}} \]
- **Usage**: Assesses how effectively the model separates different factors of variation in the latent space.

### Information Bottleneck (IB) Method
- **Definition**: Measures how much information about the input is retained in the latent representation while discarding irrelevant information.
- **Formula**: \[ \text{IB} = I(X; Z) - I(Z; Y) \]
- **Usage**: Evaluates the trade-off between retaining relevant information and discarding irrelevant information in the latent space.

### Independence Metric (Indep)
- **Definition**: Quantifies the statistical independence between latent variables to assess disentanglement.
- **Formula**: \[ \text{Indep} = 1 - \text{MI}_{\text{latent variables}} \]
- **Usage**: Measures how independent the latent variables are from each other, with higher values indicating better disentanglement.

### Variational Information Bottleneck (VIB)
- **Definition**: Measures the trade-off between the information retained about the input and the complexity of the latent representation.
- **Formula**: \[ \text{VIB} = I(X; Z) - \beta I(Z; Y) \]
- **Usage**: Assesses how well the model balances between capturing useful information and reducing redundancy in the latent space.

### Latent Traversal
- **Definition**: Evaluates the quality of disentangled representations by traversing the latent space and checking if each dimension corresponds to a specific factor of variation.
- **Formula**: \[ \text{Latent Traversal} = \frac{\text{Number of interpretable factors}}{\text{Total number of latent dimensions}} \]
- **Usage**: Assesses how well changes in individual latent dimensions correspond to meaningful changes in the data.

### Factorized Representation
- **Definition**: Measures the extent to which the latent space can be factorized into distinct, interpretable components.
- **Formula**: \[ \text{Factorized Representation} = \frac{\text{Number of independent factors}}{\text{Total number of latent dimensions}} \]
- **Usage**: Evaluates how effectively the latent representation can be decomposed into separate, interpretable factors.





## Pruning Metrics

### Weight Sparsity
- **Definition**: Measures the proportion of zero weights in the pruned model.
- **Formula**: \[ \text{Weight Sparsity} = \frac{\text{Number of zero weights}}{\text{Total number of weights}} \]
- **Usage**: Indicates the extent to which weights have been removed, with higher values suggesting greater sparsity.

### Model Compression Ratio
- **Definition**: Ratio of the size of the pruned model to the size of the original model.
- **Formula**: \[ \text{Compression Ratio} = \frac{\text{Size of pruned model}}{\text{Size of original model}} \]
- **Usage**: Evaluates the reduction in model size due to pruning, with lower ratios indicating more effective compression.

### Accuracy Drop
- **Definition**: Measures the change in model performance (accuracy) due to pruning.
- **Formula**: \[ \text{Accuracy Drop} = \text{Accuracy}_{\text{original}} - \text{Accuracy}_{\text{pruned}} \]
- **Usage**: Assesses the impact of pruning on the model’s predictive performance, with smaller drops indicating better preservation of accuracy.

### FLOPs Reduction
- **Definition**: Measures the reduction in the number of floating-point operations (FLOPs) after pruning.
- **Formula**: \[ \text{FLOPs Reduction} = \frac{\text{FLOPs}_{\text{original}} - \text{FLOPs}_{\text{pruned}}}{\text{FLOPs}_{\text{original}}} \]
- **Usage**: Evaluates the computational efficiency gained through pruning, with higher reductions indicating more effective pruning.

### Parameter Reduction
- **Definition**: Measures the reduction in the total number of parameters due to pruning.
- **Formula**: \[ \text{Parameter Reduction} = \frac{\text{Number of parameters}_{\text{original}} - \text{Number of parameters}_{\text{pruned}}}{\text{Number of parameters}_{\text{original}}} \]
- **Usage**: Indicates how much the model size has been reduced by pruning, with higher reductions suggesting more aggressive pruning.

### Model Latency
- **Definition**: Measures the change in the time required for the model to make predictions after pruning.
- **Formula**: \[ \text{Model Latency} = \text{Latency}_{\text{pruned}} - \text{Latency}_{\text{original}} \]
- **Usage**: Assesses the impact of pruning on inference time, with lower latencies indicating improved efficiency.

### Memory Footprint
- **Definition**: Measures the reduction in the memory required to store the pruned model.
- **Formula**: \[ \text{Memory Footprint} = \frac{\text{Memory}_{\text{original}} - \text{Memory}_{\text{pruned}}}{\text{Memory}_{\text{original}}} \]
- **Usage**: Evaluates how pruning affects the memory usage of the model, with higher reductions indicating more efficient memory utilization.

### Reconstruction Error
- **Definition**: Measures the error between the original model's outputs and those of the pruned model on the same inputs.
- **Formula**: \[ \text{Reconstruction Error} = \frac{1}{N} \sum_{i=1}^N \|f_{\text{original}}(x_i) - f_{\text{pruned}}(x_i)\| \]
- **Usage**: Assesses how well the pruned model approximates the behavior of the original model, with lower errors indicating better preservation of the original model’s functionality.

### Efficiency Metrics
- **Definition**: Assesses the trade-off between efficiency gains (e.g., speed, memory) and the loss of accuracy due to pruning.
- **Formula**: Efficiency metrics can be domain-specific and may involve a combination of FLOPs reduction, latency, and accuracy drop.
- **Usage**: Provides a holistic view of the effectiveness of pruning in terms of efficiency versus accuracy.

### Sensitivity Analysis
- **Definition**: Measures the model’s sensitivity to pruning, i.e., how pruning affects different parts of the model.
- **Formula**: Typically involves evaluating performance changes with various levels of pruning.
- **Usage**: Helps understand which layers or components of the model are more sensitive to pruning and may guide more targeted pruning strategies.





## Pruning Conditions

### Magnitude-Based Pruning
- **Definition**: Prunes weights or neurons based on their magnitude.
- **Condition**: Weights or neurons with values below a certain threshold are removed.
- **Usage**: Simple and effective; commonly used to prune less significant weights or neurons.

### L1 Norm Pruning
- **Definition**: Prunes weights or neurons based on the L1 norm of their values.
- **Condition**: Weights or neurons with the smallest L1 norm are removed.
- **Usage**: Useful for creating sparse models by removing less influential components.

### L2 Norm Pruning
- **Definition**: Prunes weights or neurons based on the L2 norm of their values.
- **Condition**: Weights or neurons with the smallest L2 norm are removed.
- **Usage**: Helps in reducing redundancy and focusing on more significant weights.

### Gradient-Based Pruning
- **Definition**: Prunes weights or neurons based on the gradient of their loss function.
- **Condition**: Weights or neurons with the smallest gradients are removed.
- **Usage**: Targets components with the least impact on the model’s training process.

### Variance-Based Pruning
- **Definition**: Prunes weights or neurons based on their variance.
- **Condition**: Weights or neurons with low variance in their activations are removed.
- **Usage**: Identifies and removes components that contribute minimally to the model’s variability.

### Activation-Based Pruning
- **Definition**: Prunes weights or neurons based on their activation levels.
- **Condition**: Weights or neurons with activations below a certain threshold are removed.
- **Usage**: Focuses on components that have minimal impact on the output activations.

### Connection Pruning
- **Definition**: Prunes entire connections between layers based on their importance.
- **Condition**: Connections with the lowest importance scores (e.g., based on magnitude or gradient) are removed.
- **Usage**: Reduces complexity by removing less significant connections.

### Structured Pruning
- **Definition**: Prunes entire structures, such as filters or channels, instead of individual weights.
- **Condition**: Entire structures with low importance or contribution to performance are removed.
- **Usage**: Helps in maintaining efficiency while reducing the model size.

### Sparse Regularization
- **Definition**: Uses regularization techniques to induce sparsity in the model.
- **Condition**: Regularization terms in the loss function encourage sparsity in weights or activations.
- **Usage**: Integrates pruning into the training process by promoting sparsity.

### Dynamic Pruning
- **Definition**: Prunes weights or neurons dynamically during the training process.
- **Condition**: Components are pruned based on their performance metrics or importance, which can change over time.
- **Usage**: Allows for adaptive pruning based on the evolving training state.

### Sensitivity-Based Pruning
- **Definition**: Prunes components based on their sensitivity to perturbations in the input data.
- **Condition**: Components that show minimal sensitivity to input variations are removed.
- **Usage**: Focuses on retaining components that are crucial for robust performance.



## Plot Types for Visualizing Results

### Line Plot
- **Usage**: Shows trends over time or continuous data. Useful for displaying changes and comparisons across different variables.
- **Example**: Performance metrics (e.g., accuracy, loss) over epochs.

### Scatter Plot
- **Usage**: Illustrates the relationship between two continuous variables. Helpful for identifying correlations and clustering.
- **Example**: Comparing predicted vs. actual values, feature importance.

### Bar Chart
- **Usage**: Compares discrete categories or groups. Useful for summarizing categorical data and differences between groups.
- **Example**: Model performance across different methods, accuracy by class.

### Histogram
- **Usage**: Displays the distribution of a single continuous variable. Useful for understanding data distribution and frequency.
- **Example**: Distribution of errors or activations.

### Box Plot
- **Usage**: Shows the distribution and spread of data, including median, quartiles, and outliers. Useful for comparing distributions.
- **Example**: Distribution of performance metrics across different runs or models.

### Heatmap
- **Usage**: Represents data values in a matrix format using color coding. Useful for visualizing correlation matrices and confusion matrices.
- **Example**: Correlation between features, confusion matrix of classification results.

### ROC Curve
- **Usage**: Illustrates the performance of a binary classifier by plotting the true positive rate against the false positive rate.
- **Example**: Comparing classification performance of different models.

### Precision-Recall Curve
- **Usage**: Shows the trade-off between precision and recall for different thresholds. Useful for evaluating classification performance, especially with imbalanced datasets.
- **Example**: Performance of a classifier in detecting rare events.

### AUC-ROC Curve
- **Usage**: Displays the area under the ROC curve to summarize classifier performance. Higher AUC indicates better model performance.
- **Example**: Comparing overall performance of different models.

### 3D Surface Plot
- **Usage**: Visualizes three-dimensional data and relationships between three variables. Useful for understanding complex relationships and interactions.
- **Example**: Performance metrics across two hyperparameters.

### Violin Plot
- **Usage**: Combines box plot and density plot to show data distribution, highlighting the density of data at different values.
- **Example**: Distribution of performance metrics across different models.

### Pair Plot
- **Usage**: Displays pairwise relationships and distributions between multiple variables. Useful for exploring interactions and correlations.
- **Example**: Relationships between multiple features or model parameters.

### Error Bar Plot
- **Usage**: Shows the variability or uncertainty of data points with error bars. Useful for visualizing confidence intervals or standard deviations.
- **Example**: Performance metrics with confidence intervals across different models or experiments.

### Contour Plot
- **Usage**: Represents the density or intensity of data in two dimensions using contour lines. Useful for visualizing the relationship between variables in a continuous space.
- **Example**: Decision boundaries or error surfaces.

### Stacked Bar Chart
- **Usage**: Compares the total size across categories while breaking down each category into sub-groups. Useful for visualizing the composition of categories.
- **Example**: Breakdown of errors or performance across different classes.

### Cumulative Gain/Lift Chart
- **Usage**: Shows the improvement of a model’s performance over random guessing. Useful for evaluating the effectiveness of classification models.
- **Example**: Performance of a model in ranking or targeting tasks.





## Measuring Faithfulness of Explainable Techniques

### 1. **Feature Attribution Consistency**
- **Definition**: Measures whether the importance scores assigned to features remain consistent under slight perturbations.
- **Method**: Evaluate if small changes in input lead to consistent changes in feature attributions.
- **Metric**: Consistency score or stability measure of feature importance across perturbations.

### 2. **Counterfactual Explanations**
- **Definition**: Examines if the explanations correctly predict the output changes when certain features are altered.
- **Method**: Generate counterfactuals and check if the explanation aligns with the changes in the model’s predictions.
- **Metric**: Accuracy of the explanation in predicting the outcome of counterfactual scenarios.

### 3. **Model Fidelity**
- **Definition**: Assesses how well the explanation technique reflects the behavior of the model it is explaining.
- **Method**: Compare explanations generated by the technique with the model’s decision boundaries or learned features.
- **Metric**: Fidelity score or agreement rate between the explanation and model’s internal representations.

### 4. **Human Evaluation**
- **Definition**: Involves human judges assessing the quality and reliability of the explanations.
- **Method**: Collect feedback from domain experts or end-users on how well the explanations align with their understanding of the model’s behavior.
- **Metric**: Qualitative scores or ratings from human evaluators regarding the clarity and accuracy of the explanations.

### 5. **Perturbation Analysis**
- **Definition**: Tests if explanations change in a meaningful way when input data is perturbed.
- **Method**: Apply perturbations to input data and observe if the explanations adjust accordingly.
- **Metric**: Degree of change in explanations relative to changes in input data.

### 6. **Consistency with Known Facts**
- **Definition**: Evaluates if the explanations are consistent with established knowledge or domain-specific facts.
- **Method**: Compare explanations with known information or domain expertise to assess alignment.
- **Metric**: Accuracy of explanations in reflecting established knowledge.

### 7. **Local vs. Global Consistency**
- **Definition**: Measures if the explanations are consistent at both local (individual predictions) and global (overall model behavior) levels.
- **Method**: Assess if local explanations for specific predictions align with global trends or patterns.
- **Metric**: Consistency score between local explanations and global model behavior.

### 8. **Visualization Comparison**
- **Definition**: Compares visual explanations with model predictions to check for alignment.
- **Method**: Use visualization tools to interpret explanations and compare them with model outputs.
- **Metric**: Visual alignment score or agreement between visual explanations and model predictions.

### 9. **Robustness Testing**
- **Definition**: Assesses if the explanation technique is robust to changes in model parameters or training data.
- **Method**: Test explanations across different model versions or datasets to evaluate robustness.
- **Metric**: Robustness score based on changes in explanations across different model settings.

### 10. **Simplification Test**
- **Definition**: Evaluates if simplifying the explanation maintains its accuracy in reflecting the model’s behavior.
- **Method**: Simplify explanations and check if the simplified versions still accurately represent the model’s decisions.
- **Metric**: Accuracy of simplified explanations compared to original, detailed explanations.





## Types of Sanity Checks

### 1. **Input Perturbation Check**
- **Definition**: Evaluates how small changes in the input affect the model’s output.
- **Method**: Apply small perturbations to the input data and observe if the model's predictions or explanations change in a consistent manner.
- **Purpose**: Ensures that the model and its explanations respond appropriately to slight variations in input.

### 2. **Feature Ablation Test**
- **Definition**: Assesses the impact of removing or modifying individual features on the model’s output.
- **Method**: Systematically remove or alter features and observe changes in the model’s performance or explanation.
- **Purpose**: Verifies if the model’s reliance on specific features aligns with the explanations provided.

### 3. **Label Consistency Check**
- **Definition**: Checks if the model's predictions are consistent with the expected output for given inputs.
- **Method**: Compare model predictions with known labels or expected outcomes to ensure consistency.
- **Purpose**: Ensures that the model's predictions are accurate and align with the true labels.

### 4. **Randomness Check**
- **Definition**: Verifies if the model’s explanations are consistent when applied to random or synthetic data.
- **Method**: Generate random or synthetic inputs and assess if the explanations remain sensible and consistent.
- **Purpose**: Checks if the explanation technique is robust and not overly sensitive to random inputs.

### 5. **Consistency Across Models**
- **Definition**: Ensures that the explanations are consistent across different models or versions of the same model.
- **Method**: Compare explanations from different models or model checkpoints to check for consistency.
- **Purpose**: Verifies if the explanation technique provides stable and reliable insights across various model configurations.

### 6. **Boundary Case Check**
- **Definition**: Evaluates how the model behaves at the boundaries or extremes of the input space.
- **Method**: Test the model with boundary or edge cases and check if the explanations are still valid and coherent.
- **Purpose**: Ensures that the model and its explanations handle extreme or rare cases appropriately.

### 7. **Monotonicity Check**
- **Definition**: Verifies if the model’s predictions change monotonically with changes in input features.
- **Method**: Observe if increasing or decreasing input feature values leads to predictable changes in the output.
- **Purpose**: Ensures that the model’s behavior and explanations align with expected monotonic relationships.

### 8. **Cross-Validation of Explanations**
- **Definition**: Checks if the explanations hold up across different subsets of data or during cross-validation.
- **Method**: Validate the consistency of explanations across different folds or splits of the data.
- **Purpose**: Ensures that the explanations are generalizable and not specific to a particular subset of data.

### 9. **Human Validation Check**
- **Definition**: Involves human judges to validate the correctness and usefulness of the model’s explanations.
- **Method**: Collect feedback from domain experts or users on the quality and clarity of the explanations.
- **Purpose**: Provides qualitative validation to complement quantitative sanity checks.

### 10. **Consistency with Known Facts**
- **Definition**: Ensures that the model’s explanations align with established knowledge or domain-specific facts.
- **Method**: Compare explanations with known domain knowledge to validate their accuracy.
- **Purpose**: Verifies that the explanations reflect accurate and relevant domain information.

### 11. **Training Stability Check**
- **Definition**: Assesses if the model’s explanations remain stable across different training runs or initializations.
- **Method**: Train the model multiple times with different random seeds and check if explanations are consistent.
- **Purpose**: Ensures that explanations are not unduly affected by randomness in training.

### 12. **Explanation Plausibility**
- **Definition**: Evaluates if the explanations provided are plausible and make sense in the context of the model’s behavior.
- **Method**: Review explanations for logical coherence and relevance to the model’s predictions.
- **Purpose**: Ensures that the explanations are not only accurate but also sensible and understandable.





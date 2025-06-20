# Mechanistic interpretability

## Introdcution

Mechanistic interpretability is the study of reverse engineering the weights and interactions in a trained network. The goal is to uncover precise causal mechanisms
from inputs to outputs. {cite}`bereska2024mechanistic`

Key takeaways:
*
*
*

Keywords:
* capacity
* disentanglement
* enmashment
* faithfullness
* mono-semanticity vs polysemanticity
* sanity checks
* superposition: networks representing more features than they have neurons
* visual model interpretation: feature visualisation

## Methods (Circuit discovery)

### Subnetwork Probing
- Investigates the roles of specific subnetworks or components within a larger model to understand their contributions to the overall model performance.


### DeepDream
A technique that enhances patterns in images by maximizing the activation of specific layers in a neural network.

### 2. **Feature Ablation Test**
- **Definition**: Assesses the impact of removing or modifying individual features on the model’s output.
- **Method**: Systematically remove or alter features and observe changes in the model’s performance or explanation.
- **Purpose**: Verifies if the model’s reliance on specific features aligns with the explanations provided.






## References
```{bibliography}
:filter: docname in docnames
```
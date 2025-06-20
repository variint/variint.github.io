# Modular neural networks

- keywords: clustering, sub-entities

## Definitions
Sources: {cite:p}`sun2023modularity`

Modularity is a general principle present in many fields such as biology, complex systems, mathematics, system design, computer science, graph theory. While sharing the same name, there is no universally agreed upon definition of modularity. However, we can identify a shared definition: in general, modularity is the property of an entity whereby it can be broken down into a number of sub-entities (referred to as modules).

Sources: http://gral.ip.rm.cnr.it/rcalabretta/modularity.html
A general definition of modularity and nonmodularity in neural networks can be the following: "modular systems can be defined as systems made up of structurally and/or functionally distinct parts. While non-modular systems are internally homogeneous, modular systems are segmented into modules, i.e., portions of a system having a structure and/or function different from the structure or function of other portions of the system. [...] In a nonmodular architecture one and the same connection weight may be involved in two or more tasks. In a modular architecture each weight is always involved in a single task: Modules are sets of 'proprietary' connections that are only used to accomplish a single task." (Calabretta & Parisi, 2005, Fig. 14.4; see also Calabretta et al., 2003). 


## Properties
- level of modularity / hierarchy (low level vs high level)
- Modularity and flexibility/scalability/context/complexity/structure


## Motivation
Sources {cite:p}`azam2000biologically`{cite:p}`wang2012hierarchical`

Important motivations for considering modularity include: 
1 - Reduction of model complexity: Each module only has to learn a simple and small task/concept and hence will converge faster. 
2 - Increased robustness: 
The modular structure limits the spreading of avalanches. 
Possible areas that benefit from this are out-of-distribution research as well as class imbalance and biases.
3 - Scalability: Additional information can be added without the need of retraining the whole model. This is especially beneficial for federated learning, transfer learning, domain adaption and meta learning. 
4 - Explainability: Analysing the output behaviour of each individual module is possible and hence understanding which task is learned by a module is possible. This aspect is important for biomarker detection as well as understanding the decision making process in computer-aided diagnosis.




### Hierarchical modular structure | Monolithic vs Modular
Sources: {cite:p}`wang2012hierarchical`

Hierarchical modular structure enhances the robustness of self-organized criticality in neural networks. One of the most prominent architecture properties of neural networks in the brain is the hierarchical modular structure. How does the structure property constrain or improve brain function? It is thought that operating near criticality can be beneficial for brain function. Here, we find that networks with modular structure can extend the parameter region of coupling strength over which critical states are reached compared to non-modular networks. Moreover, we find that one aspect of network function—dynamical range—is highest for the same parameter region. Thus, hierarchical modularity enhances robustness of criticality as well as function. However, too much modularity constrains function by preventing the neural networks from reaching critical states, because the modular structure limits the spreading of avalanches. Our results suggest that the brain may take advantage of the hierarchical modular structure to attain criticality and enhanced function.

My summary: Modular networks are able to learn different concepts in specified modules. Due to the progressed disentanglement also on the macro level, explainability becomes easier. The reduced model complexity for each module is also considered to make the model converge faster, more robust, and easily scalable. The trade-off here is, the higher the level of modularity, the more difficult it is for the network to learn complex correlations in the later layers. Monolithic networks only follow modularity on a micro level in form of neurons, channels and layers, making it an unstructured black box that is difficult to interpret, but able to learn complex correlations.


## Applications

- transfer learning
- domain adaption
- federated learning
- meta-learning
- Unsupervised Domain Adaption
- Explainability and Interpretation


## References
```{bibliography}
:filter: docname in docnames
```

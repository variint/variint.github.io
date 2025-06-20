# Shape of knowledge

## Definitions

## Abstraction levels
Descriptive terms used to characterize different architectural or functional properties of neural networks, whether biological or artificial
- cooperative neural
- competitive neural
- hierarchical neural
- structured neural
- modular neural

| Term             | Description                                      | Analogy                |
| ---------------- | ------------------------------------------------ | ---------------------- |
| **Cooperative**  | Units support each other’s actions               | Teamwork               |
| **Competitive**  | Units inhibit others; only strongest “wins”      | Game or election       |
| **Hierarchical** | Organized by layers of increasing abstraction    | Government bureaucracy |
| **Structured**   | Designed with meaningful topology or constraints | Blueprinted machine    |
| **Modular**      | Composed of specialized sub-units                | Swiss army knife       |


## Disentangled vs entangled networks
Sources: {cite:p}`molnar2020interpretable`

Common CNNs are neither perfectly disentangled nor perfectly entangled.

Disentangled networks would detect specific real-world concepts in each unit. It would imply that the network is highly interpretable. It would open up the possibility to track the network’s decision making process and help identify problematic non-causal correlations. It would help to automatically list all highly activated units and their concepts to explain an individual prediction. It would help to easily detect bias. 

Entangled networks, on the other hand, wouldn’t have an individual unit for a region of interest (RoI) (e.g. a specific organ or a lesion in computer-aided diagnosis or a dog snout for dog classification). All channels would contribute to the recognition of a RoI.

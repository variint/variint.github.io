# Multi-modality



## Fusion
Sources: \cite{yan2021deep} \cite{seeland2021multi}, https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0245230


## Operator
Fusion types: Sum, Max, Concatenation, Convolutional, Bilinear.

### Early / late
For early and late fusion, the original CNN is split into two parts, NN1 and NN2, and extended by a view fusion layer between both parts. In early fusion, convolutional feature maps from the different CNN branches are \textbf{stacked and subsequently processed together}. In early fusion (conv), we replace the max-pooling operation by a 1 × 1 convolution operation as inspired by “Network-in-Network” [27] and the fusion layer by Feichtenhofer et al.

Fusing methods: FOCUS ON EARLY FUSION \textbf{mostly element-wise sum or maximum operations} have been studied for fusing CNN feature maps from multiple views for the purpose of classification. Correspondence between multiple views is thereby lost, while \textbf{fusion by concatenation or convolution were found to efficiently model correspondences between different views for other learning tasks}. Comparative evaluations of different strategies for image classification are either missing or yield contradicting results.

In early fusion, convolutional feature maps from the different CNN branches are stacked and subsequently processed together. 

In contrast, late fusion relies on aggregating the output of the last layer before the classification layer, or, in case of multiple fully connected layers at the top, the classification block, as latent representation. At last, score fusion is based on element-wise aggregation of the softmax classification scores per branch. % todo, re-write


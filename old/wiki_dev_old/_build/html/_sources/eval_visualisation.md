# Plotting


## Methods

* Deep learning model architecture visualization: Graph-like representation of a neural network with nodes representing layers and edges representing connections between neurons.
* Activation heatmap: Layer-wise visualization of activations in a deep neural network that provides insights into what input elements a model is sensitive to.
* Feature visualization: Heatmaps that visualize what features or patterns a deep learning model can detect in its input.
* Deep feature factorization: Advanced method to uncover high-level concepts a deep learning model learned during training.
* Training dynamics plots: Visualization of model performance metrics across training epochs.
* Gradient plots: Representation of the loss function gradients at different layers within a deep learning model. Data scientists often use these plots to detect exploding or vanishing gradients during model training.
* Loss landscape: Three-dimensional representation of the loss function’s value across a deep learning model’s input space. 
* Visualizing attention: Heatmap and graph-like visual representations of a transformer-model’s attention that can be used, e.g., to verify if a model focuses on the correct parts of the input data.
* Visualizing embeddings: Graphical representation of embeddings, an essential building block for many NLP and computer vision applications, in a low-dimensional space to unveil their relationships and semantic similarity.

https://neptune.ai/blog/deep-learning-visualization



### Box Plot
- For distribution analysis
- Includes the interquartile range (IQR), which is the range between the first and third quartiles, and identifies outliers as points outside 1.5 times the IQR from the quartiles.

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

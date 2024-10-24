# Distribution-Based Metrics

## Introduction



### Goals
* Learn about performance metrics




## Methods

### Mean
- The average value of a dataset, calculated by summing all values and dividing by the number of values.

### Median
- The middle value of a dataset when it is ordered from smallest to largest, or the average of the two middle values if the number of observations is even.

### Variance
- Measures the spread of data points from the mean, calculated as the average of the squared differences between each data point and the mean.

### Standard Deviation
- The square root of the variance, indicating the average distance of data points from the mean, providing a measure of dispersion in the same units as the data.

### Skewness
- Measures the asymmetry of the distribution of data points around the mean, indicating whether the data is skewed to the left (negative skewness) or right (positive skewness).

### Kurtosis
- Measures the "tailedness" of the data distribution, indicating the presence of outliers. High kurtosis signifies heavy tails, while low kurtosis indicates light tails.

### Quantiles
- Values that divide the dataset into equal parts, including quartiles (dividing into four parts), deciles (ten parts), and percentiles (hundred parts), providing insight into the data distribution.


### Kolmogorov-Smirnov Test
- A statistical test that compares the distribution of a sample with a reference probability distribution to assess whether the sample comes from the specified distribution.

### Chi-Square Test
- A test used to determine if there is a significant difference between the expected and observed frequencies in categorical data, often used to assess goodness of fit.

### Anderson-Darling Test
- A statistical test that assesses whether a sample comes from a specific distribution by measuring the distance between the empirical and theoretical distribution functions.

### Jaccard Index
- Measures the similarity between two distributions by comparing the size of their intersection to the size of their union.

### Kullback-Leibler Divergence (KL Divergence)
- Measures how one probability distribution diverges from a second, reference probability distribution, quantifying the difference between the two distributions.

### Earth Mover's Distance (EMD)
- Measures the distance between two probability distributions over a region by calculating the minimum amount of work needed to transform one distribution into the other.

### Wasserstein Distance
- A metric that measures the distance between two probability distributions based on the optimal transport problem, also known as Earth Mover's Distance (EMD) in some contexts.

### Entropy
- Measures the uncertainty or randomness in a dataset, with higher entropy indicating more disorder or unpredictability in the distribution.

### Cross-Entropy
- Measures the difference between two probability distributions for a given random variable, commonly used in classification problems to quantify the loss between predicted and true distributions.





## Visualisation

### Box Plot
- Includes the interquartile range (IQR), which is the range between the first and third quartiles, and identifies outliers as points outside 1.5 times the IQR from the quartiles.

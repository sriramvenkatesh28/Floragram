import pandas as pd
import numpy as np
import seaborn as sns
from sklearn import svm
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split

data = pd.read_csv("D:/react-website-tutorial-main/src/dataset2.csv")

# print(data.head())

label = LabelEncoder()
data['label'] = label.fit_transform(data['label'])

print(data)

#bins = (5.0, 6.0, 7.0)
#ph = [["acidic", "slightly acidic", "basic"]]
#data["label"] = pd.cut(data["label"], bins=bins, labels=ph)
# print(data["label"])

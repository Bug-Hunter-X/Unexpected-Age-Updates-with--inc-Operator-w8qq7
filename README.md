# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB to update a numeric field. The bug arises from directly decrementing a value without checking for potential negative values resulting in unexpected behavior. 
The solution presents a safe approach which handles such cases.
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=new Array();
  let obj=new Object();
  if (!transactions) return result;

  //putting the category along with its price in an object
  for(var i in transactions)
  {
    if(!obj[transactions[i]['category']])
    {
       obj[transactions[i]['category']] = transactions[i]['price'];
    }
  }

  //checking if the category is more than one time then increasing the value
  for(var j in obj)
  {
    let c=0;
    for(var i in transactions)
    {
      if(j==transactions[i]['category'])
      {
        ++c;
        if(c>=2)
        {
          obj[transactions[i]['category']]= obj[transactions[i]['category']]+transactions[i]['price'];
        }
      }
    }
}

//pushing the values in the array
  for(let key in obj)
  {
    const value=obj[key];
    arr.push({
       category: key,
       totalSpent: value,
    });
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
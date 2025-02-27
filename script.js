const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let count =0;
const numberOfBooksRead = () => {
  // write your code here
	for(let i of library){
		if(library[i].readingStatus===true && true){
			count++;
		}
	}
	return count;
};

// Do not change the code below

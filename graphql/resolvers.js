const { where } = require('sequelize');
const { Authors,Books, sequelize } = require('../models');
const initModels = require("../models/init-models");

const models = initModels(sequelize);


// try{
// 	var authors = models.Authors.findAll();
// 	console.log(authors);
// }catch(error){
// 	console.error(error);
// }


const Query = {
	getAuthorDetails: async () => {
		try {
			const authors = await Authors.findAll();
			return authors;
		}catch(err){
			console.log(err);
		}
	},
	getAuthor: async (root, { AuthorID }) => {
    	try {
      		const auth = await Authors.findByPk(AuthorID)
      		return auth;
    	} catch (err) {
      		console.log(err);
    	}
  	},
	getBookDetails: async () => {
		try {
			const books = await Books.findAll();
			return books;
		}catch(err){
			console.log(err);
		}
	},
	getBook: async (root, { BookID }) => {
    	try {
      		const book = await Books.findByPk(BookID)
      		return book;
    	} catch (err) {
      		console.log(err);
    	}
  	},
}

const Author = {
	book: (auth) => Books.findByPk(auth.BookID)
}

const Book = {
	author: (book) => Authors.findByPk(book.AuthorID)
}

const Mutation = {
	createAuthor: async (_ , {
		Abbrv,
		FirstName,
		LastName,
		DOB,
		DOD
	}) =>  {
		try {
			await Authors && Authors.create({
				Abbrv,
				FirstName,
				LastName,
				DOB,
				DOD			
			})																							
			return "Author created."
		}catch(error){
			console.error(error);
		}
	},

	updateAuthor: async (_ , {
		AuthorID,
		Abbrv,
		FirstName,
		LastName,
		DOB,
		DOD
	}) => {
		try {
			await Authors && Authors.update({
				AuthorID,
				Abbrv,
				FirstName,
				LastName,
				DOB,
				DOD
			} ,{ where: { AuthorID: AuthorID } });
			return "Author Updated";
		}catch (err) {
			console.error(err);
  		}	
	},

	deleteAuthor: async(_ , { AuthorID }) => {
		await Authors.destroy({ where: { AuthorID: AuthorID }})
		return "Author Deleted";
	},

	createBook: async (_ , {
		ISBN,
		Abbrv,
		BookTitle,
		EditionNumber,
		TotalPages,
	}) =>  {
		try {
			await Books && Books.create({
				ISBN,
				Abbrv,
				BookTitle,
				EditionNumber,
				TotalPages,		
			})																							
			return "Book created."
		}catch(error){
			console.error(error);
		}
	},

	updateBook: async (_ , {
				BookID,
				ISBN,
				Abbrv,
				BookTitle,
				EditionNumber,
				TotalPages,	
	}) => {
		try {
			await Books && Books.update({
				BookID,
				ISBN,
				Abbrv,
				BookTitle,
				EditionNumber,
				TotalPages,	
			} ,{ where: { BookID: BookID } });
			return "Book Updated";
		}catch (err) {
			console.error(err);
  		}	
	},

	deleteBook: async(_ , { BookID }) => {
		await Books.destroy({ where: { BookID: BookID }})
		return "Book Deleted";
	}
}
module.exports = { Query , Author , Book , Mutation }
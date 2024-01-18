document.addEventListener('DOMContentLoaded',()=>{
    let movieArray=[];
    const movieList =document.querySelector("#movie-list");
    const movieListWrapper=document.querySelector(".movie-list-wrapper");
    const label=document.querySelector('.label')
    const dateLabel=document.querySelector('.date-label')
    const movieItem=document.querySelector('.movie-item')


    console.log(movieListWrapper,movieItem)
    const forms=document.forms
    const addMovieForm=forms["add-movie"];
    

    displayMovieData()
    
    

    //array of the movies 

    

    //adding movies
    console.log(forms)

    

    addMovieForm.addEventListener('submit',(e)=>{
        e.preventDefault()

        //create the elements to be appended to the list 
        const movieNameValue=addMovieForm.querySelector('input[type=text]').value;
        const dateReleasedValue=addMovieForm.querySelector('input[type=date]').value;
         //create an object the movie item
         if(movieNameValue!=="" && dateReleasedValue!==""){
            let movieInputData={
                name:movieNameValue,
                dateReleased:dateReleasedValue
    
             }
             //push the new data to the array
             movieArray.push(movieInputData)
             // save the data to the local storage
    
             localStorage.setItem('movieData',JSON.stringify(movieArray))
             displayMovieData()


         }
         else{
            alert("movie data cannot be empty");
            return 
         }
       

       


        // const movieItem=document.createElement('li')
        // const movieName=document.createElement('span')
        // const movieDate=document.createElement('span')
        // const deleteBtn=document.createElement('span')

        // //add text content to the movie name and movie date spans
        // movieName.textContent=movieNameValue
        // movieDate.textContent=dateReleasedValue
        // deleteBtn.textContent='delete'
        // // add classname to the movie released date and name
        // movieName.classList.add('name');
        // movieDate.classList.add('release-date');
        // deleteBtn.classList.add('delete')
        // //append to DOM

        // movieItem.appendChild(movieName)
        
       




    })


    function displayMovieData(){
        //get data from the local storage
        let fetchedData=localStorage.getItem('movieData');
        
        if(fetchedData){
            movieArray=JSON.parse(fetchedData)
            

            movieArray.forEach((item)=>{

                // const movieItem=document.createElement('li')
                const movieName=document.createElement('span')
                const movieDate=document.createElement('span')
                const deleteBtn=document.querySelector('.delete')
        
                //add text content to the movie name and movie date spans
                movieName.textContent=item.name
                movieDate.textContent=item.dateReleased;
                deleteBtn.textContent='delete'
                // add classname to the movie released date and name
                movieName.classList.add('name');
                movieDate.classList.add('release-date');
                deleteBtn.classList.add('delete');

                // append the elements to the DOM
                label.appendChild(movieName);
                dateLabel.appendChild(movieDate);

                movieItem.appendChild(label)
                movieItem.appendChild(dateLabel)
                movieItem.appendChild(deleteBtn)

                movieListWrapper.appendChild(movieItem)
                movieList.appendChild(movieListWrapper)


                //clear form input

                addMovieForm.querySelector('input[type=text]').value=""
                addMovieForm.querySelector('input[type=date]').value=""

            })

        }
    }

})


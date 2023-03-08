import React from 'react'
import PostActions from '../PostActions/PostActions';
import './Posts.scss';


function Posts() {
  const posts = [
    {
      id: 1,
      name: "Kerala Blasters",
      userId: 1,
      profilePic:
        "https://www.insidesport.in/wp-content/uploads/2020/12/qtBXoqloyMecjfc-800x450-noPad.jpg",
      desc: "Welcoming the new year in style ! #keralablasters",
      img: "https://th-i.thgim.com/public/sport/7weh07/article66335227.ece/alternates/LANDSCAPE_1200/TH04ISL.jpg",
    },
    {
      id: 2,
      name: "Alphonse Puthren",
      userId: 2,
      profilePic:
        "https://images.news18.com/ibnlive/uploads/2022/02/untitled-design-2-92-16452650693x2.png?impolicy=website&width=510&height=356",
      desc: "Review Writers, Roasters and Trollers .. Please do videos on these issues . 15 years back, I ate Shawarma from a shop in Aluva. It was Sharaf U Dheens treat. I had shawarma and Mayonnaise in Aakraantham. Next day I was having severe pancreatitis pain and was admitted in Lakeshore hospital and my parents had to spent Rs.70,000 to save me. I was in a special section called MCU. I was angry at Sharaf for no reason. The actual reason was old contaminated food. Who is the actual culprit here ? Open your eyes and see the truth. Life is very very costly"
    },
  ];
  return (
    <div className='posts'>
      {posts.map(post =>(
        <PostActions post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts

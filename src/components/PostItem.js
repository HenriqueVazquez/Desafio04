import React from 'react';

// contruindo Header da aplicação recebendo author e date do post
// building Comments header receiving author and post date
function PostHeader({author, date}) {
  return (
    <div className="post-header">
      {/* retornando dados do autor como avatar, name e date do post */}
      {/* returning author data such as avatar, name and date of the post */}
      <img className="avatar" src={author.avatar} />    
    <div className="details">
      <span>{author.name}</span>
      <span>{date}</span>
    </div>
    </div>
  );
}

// função para construir o conteúdo do comentario e ajustando com nome e avatar do autor
// function to build the comment content and set it with the author's name and avatar
function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider"/>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} /> 
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
          </div>
      ))}      
    </div>
  );
}

// construindo postagem 
// building post

function PostItem ({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{ content }</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
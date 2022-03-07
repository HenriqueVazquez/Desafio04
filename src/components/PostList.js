import React, { Component } from 'react';

import PostItem from './PostItem';


// Criando as postagens com os dados dos nosso state
// Creating posts with our state data
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Karen Tatiane',
          avatar: 'https://scontent.fgru4-1.fna.fbcdn.net/v/t31.18172-8/17635180_1272881216100819_2528004439665770154_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE8SibpInr7dso3eTfCsvpGWgSd9XGCU-5aBJ31cYJT7hL9rV2m_W8Tyo2q6GgaKZ_1XHCmucAYmL6b7iJATtBs&_nc_ohc=0v1_4y48AeMAX-iJeQq&_nc_ht=scontent.fgru4-1.fna&oh=00_AT8nwopE7J2_7m8gh1U1wcLOabzGcXJavtdO0MIpIQG7YQ&oe=624C0A76'
        },
        date: '20 Jun 2022',
        content: 'Assisti um filme incrivel hoje, recomendo john wick!',
        comments: [
          {
            id: 2,
            author: {
              name: 'Henrique Paim',
              avatar: 'https://avatars1.githubusercontent.com/u/14090441?s=60&v=4',
            },
            date: '21 Jun 2022',
            content:
              'Que legal, vou assistir!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Raphael Silva',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: '24 Jun 2022',
        content:
          'E ae galera!\nEstou querendo fazer um curso de programação com javascript, o que vocês me indicam?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Felipe Ribeiro',
              avatar: 'https://i.pravatar.cc/150?img=15'
            },
            date: '25 Jun 2022',
            content:
              'Eu recomendo o Bootcamp da Rocketseat'
          },
          {
            id: 5,
            author: {
              name: 'Raphael Silva',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            date: '25 Jun 2022',
            content:
              'Que legal!\nVou me inscrever nesse, já ouvi falar muito bem deles!'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Ricardo Cruz',
          avatar: 'https://i.pravatar.cc/150?img=6'
        },
        date: '27 Jun 2022',
        content:
          'Posei um projeto no GitHub, verifiquem e quem quiser pode contribuir',
        comments: [
          {
            id: 7,
            author: {
              name: 'Leonardor Ruiz',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            date: '27 Jun 2022',
            content:
              'Poxa, seu trabalho esta muito bom!',
          },
          {
            id: 8,
            author: {
              name: 'Caio Madureira',
              avatar: 'https://i.pravatar.cc/150?img=12'
            },
            date: '28 Jun 2022',
            content:
              'Vou tentar melhorar alguns pontos e te mando o commit'
          }
        ]
      }
    ]
  };

  render(){
    // desestruturando state para variável posts
    // destructuring state to posts variable
    const { posts } = this.state;

    // contruindo postagem coms os dados 
    // building post with your data
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    )
  }

}

export default PostList;

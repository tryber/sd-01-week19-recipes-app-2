import React from 'react';
import YouTube from 'react-youtube';

function renderYoutubeVideo(recipe) {
  const opts = {
    height: '200px',
    width: '90%',
    playerVars: { autoplay: 0 },
  };
  const recipeVideo = recipe.strYoutube || recipe.strVideo;
  if (recipeVideo) {
    return (
      <YouTube
        className="details-box"
        videoId={recipeVideo.split('=')[1]}
        opts={opts}
      />
    );
  }
  return <div>Não possui video.</div>;
}

function RecipeDetailsVideo({ recipe }) {
  return (
    <div>
      <p className="details-subtitle">Video</p>
      {renderYoutubeVideo(recipe)}
    </div>
  );
}

export default RecipeDetailsVideo;

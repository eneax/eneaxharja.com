import React from 'react';
import books from '../../libs/books';
import Footer from '../Footer/Footer';

const BookItem = ({ title, link, img }) => {
  return (
    <a href={`${link}`} target="_blank" rel="noopener noreferrer" className="fl w-50 w-25-l link overflow-hidden">
      <div 
        role="img" aria-label={`${title}`} 
        className="grow aspect-ratio--4x6" 
        style={{
          background: `url(${img}) no-repeat center center`, 
          backgroundSize: "cover"
        }}
      ></div>
    </a>
  )
}

const BookList = () => {
	return (
		<div>
			<main className="pt1">
				<div className="ph2 ph5-m ph6-l">
					<div className="pv3 f5 f2-ns measure center tc">
		        <h1 className="fw6 f2 fl w-100 black-70 mt0 mb3 courier">Library</h1>
		      </div>
		      <div className="measure f3 center mv5 black-70 tj">
		        <p className="lh-copy mt0 mb0 f4 f3-ns black-70 georgia">
		          The reading list below contains the books (at least the ones it is worth mentioning) I've read over the years.
		        </p>
		        <p className="lh-copy indent f4 f3-ns black-70 georgia">
              Some of these taught me important life lessons and completely changed the way I think and live my life today. Check it out and maybe you will find your next book!
            </p>
		      </div>
		    </div>

		    <article className="ba bw3 b--washed-blue br3">
					{
						books.map((book, i) => (
							<BookItem 
								key={i}
								title={books[i].title}
								link={books[i].link}
								img={books[i].img}
							/>
	        	))
	        }
				</article>
		  </main>

			<Footer />
		</div>
	)
}

export default BookList;
import { useScrollReveal } from '../hooks/useScrollReveal';

const ebooks = [
  {
    id: 1,
    title: 'Number to Date',
    description: 'Master the art of turning a number into a meaningful connection. Learn proven strategies and real conversations.',
    image: '/from_number_to_date.png',
    link: 'https://pages.razorpay.com/pl_T5ohEIJJtuICVq/view',
  },
  {
    id: 2,
    title: 'The Approach Bible',
    description: 'The complete guide to approaching anyone, anywhere. Break the ice, build attraction, and create genuine connections.',
    image: '/approach_bible.png',
    link: 'https://pages.razorpay.com/pl_T5o7yjfIM7NacD/view',
  },
  {
    id: 3,
    title: 'Body Language Guide',
    description: 'Read people like a book. Understand non-verbal cues, project confidence, and communicate without words.',
    image: '/body_languagee_guide.png',
    link: 'https://pages.razorpay.com/pl_T5oQbaRjDDGd89/view',
  },
  {
    id: 4,
    title: 'Unfiltered Reality',
    description: 'Raw truths about life, success, and personal growth. No sugar-coating, just reality as it is.',
    image: '/unfiltered_reality.png',
    link: 'https://pages.razorpay.com/pl_T4OmBq1FGxqd7K/view',
  },
  {
    id: 5,
    title: 'Paisa Mindset',
    description: 'Change your relationship with money. Build wealth, think like the rich, and escape the paycheck trap.',
    image: '/paisa_mindset.png',
    link: 'https://pages.razorpay.com/pl_T4NY8Axudvdr2i/view',
  },
];

const Ebooks = () => {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="ebooks" className="ebooks-section">
      <div className="ebooks-inner">
        <div className="section-header reveal" ref={headRef}>
          <span className="section-label">Digital Products</span>
          <h2 className="section-title">
            eBooks by<br />
            <span className="text-blue">Rohit Sah</span>
          </h2>
          <p className="section-subtitle">
            No fluff. No theories. Just practical guides based on real experience.
          </p>
        </div>

        <div className="ebooks-grid reveal-stagger" ref={gridRef}>
          {ebooks.map((book) => (
            <a
              key={book.id}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ebook-card"
            >
              <div className="ebook-image-wrap">
                <img
                  src={book.image}
                  alt={book.title}
                  className="ebook-image"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-ebook.jpg';
                  }}
                />
                <div className="ebook-overlay">
                  <span className="ebook-cta">View Details →</span>
                </div>
              </div>
              <div className="ebook-content">
                <h3 className="ebook-title">{book.title}</h3>
                <p className="ebook-description">{book.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ebooks;

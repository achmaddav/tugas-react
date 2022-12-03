import Content from './fragments/content';
import './styles.css';

function About() {
  let data = "ini adalah isi about";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default About;

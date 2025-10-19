import '../styles/Contact.css'
import SectionTitle from './SectionTitle'
import Button from './Button'

function Contact() {
  const contactLinks = [
    { text: 'rrojas181920@gmail.com', url: 'mailto:rrojas181920@gmail.com' },
    { text: 'LinkedIn', url: 'https://linkedin.com/in/richierr' },
    { text: 'GitHub', url: 'https://github.com/rrojas1819' },
    { text: '(908) 502-1964', url: 'tel:+19085021964' }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="contact-content-centered">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you're looking for a developer, want to discuss technology, or just want to connect, 
              feel free to reach out!
            </p>
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a key={index} href={link.url} className="contact-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          {/* Contact Form - Commented out for now */}
          {/* 
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <Button type="submit" variant="primary">Send Message</Button>
            </form>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}

export default Contact

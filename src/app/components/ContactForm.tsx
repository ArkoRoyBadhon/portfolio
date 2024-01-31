import { MdEmail } from 'react-icons/md';


const ContactForm = ({contactRef}:any) => {

    return (
        <section id="contact" ref={contactRef}  className='mt-28 md:mr-10 mb-10 h-[80vh]'>
            <div className="w-[200px] flex gap-3 justify-center items-center py-1 border rounded-l-full rounded-r-full">
                <MdEmail />
                <p className="uppercase">Contact</p>
            </div>
            <h5 className="text-center text-[22px] font-semibold mt-5">Contact With Me</h5>
            <form action="https://formspree.io/f/mayzkprz" method="POST" className='flex flex-col gap-5 mt-8'>
                <input
                    className='py-2 rounded-md px-1 text-[black]'
                    type="text"
                    name="username"
                    placeholder='username'
                    autoComplete='off'
                    required
                />
                <input
                    className='py-2 rounded-md px-1 text-[black]'
                    type="email"
                    name="email"
                    placeholder='Email'
                    autoComplete='off'
                    required
                />

                <textarea
                    className='py-2 rounded-md px-1 text-[black]'
                    name="message"
                    id=""
                    autoComplete='off'
                    placeholder='Message'
                    required></textarea>

                <input className='bg-green-400 hover:bg-green-500 py-2 rounded-md cursor-pointer' type="submit" value="send" />
            </form>
        </section>
    );
};

export default ContactForm;
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { NavBar } from './components/Nav';
import { MobileNav } from './components/MobileNav';
import { useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Page = () => {
  const [loading, setLoading] = useState(true);
  const topics = [
    {
      label: 'Hydrogen VS Electric Cars',
      desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      label: 'The Downsides of AI Artistry',
      desc: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      label: 'Is VC Funding Drying Up?',
      desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];
  const articles = [
    {
      imageUrl: 'image-retro-pcs.jpg',
      number: '01',
      title: 'Reviving Retro PCs',
      desc: 'What happens when old PCs are given modern upgrades?',
    },
    {
      imageUrl: 'image-top-laptops.jpg',
      number: '02',
      title: 'Top 10 Laptops of 2022',
      desc: 'Our best picks for various needs and budgets.',
    },
    {
      imageUrl: 'image-gaming-growth.jpg',
      number: '03',
      title: 'The Growth of Gaming',
      desc: 'How the pandemic has sparked fresh opportunities.',
    },
  ];
  useLayoutEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <div className='w-full bg-[#FFFDFA] h-full '>
      {' '}
      <AnimatePresence mode='wait'>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <NavBar />
            <MobileNav />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: [0.16, 1, 0.3, 1],
                duration: 0.6,
                delay: 0.46,
              }}
              className='w-full mt-[75px] max-w-[1100px] px-6 h-full md:mt-14 flex flex-col mx-auto'
            >
              <div className='flex flex-col md:flex-row gap-x-[30px] '>
                <section className='flex flex-col'>
                  <img
                    className=' h-[300px] object-cover'
                    src='image-web-3-desktop.jpg'
                    srcSet='
                  image-web-3-desktop.jpg 768w,
                  image-web-3-mobile.jpg 320w
                    '
                    alt='The Bright Future of Web 3.0?'
                  />
                  <div className='flex flex-col md:flex-row w-full justify-between gap-x-7 mt-6 md:mt-8'>
                    <h1 className='text-slate-950 max-w-[350px] text-[40px] md:text-[56px] font-extrabold leading-10 md:leading-[56px]'>
                      The Bright Future of Web 3.0?
                    </h1>
                    <aside className='flex flex-col'>
                      <p className='text-[#5E607A] text-[15px] max-w-[350px]'>
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                      </p>
                      <a className='mt-6 md:mt-[29px] w-[185px] h-12 uppercase text-[#FFFDFA] font-bold text-sm tracking-[4.38px] bg-[#F15D51] hover:bg-[#00001A] cursor-pointer transition duration-200 flex items-center justify-center'>
                        Read More
                      </a>
                    </aside>
                  </div>
                </section>
                <aside className='bg-[#00001A] py-6 md:py-8 px-5 md:px-6 md:max-w-[350px] w-full max-md:mt-16'>
                  <h2 className='text-[#E9AA52] font-bold text-[32px] leading-loose md:text-[40px] md:leading-10'>
                    New
                  </h2>
                  <ul className='mt-[34px] flex flex-col gap-y-[31px]'>
                    {topics.map((topic, index) => (
                      <Topic
                        key={index}
                        desc={topic.desc}
                        label={topic.label}
                      />
                    ))}
                  </ul>
                </aside>
              </div>
              <div className='w-full flex flex-col md:flex-row justify-between mt-16 md:mt-[72px] gap-y-8 pb-8'>
                {articles.map(({ title, imageUrl, desc, number }, index) => (
                  <Article key={index} {...{ title, imageUrl, desc, number }} />
                ))}
              </div>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const Topic = ({ label, desc }: { label: string; desc: string }) => (
  <li className='border-b pb-[29px] last-of-type:border-b-0'>
    <a
      href=''
      className='text-[#FFFDFA] text-xl hover:text-[#E9AA52] transition duration-200 font-extrabold leading-normal'
    >
      {label}
    </a>
    <p className='text-[#C5C6CE] text-[15px] leading-relaxed'>{desc}</p>
  </li>
);
const Article = ({
  title,
  desc,
  imageUrl,
  number,
}: {
  title: string;
  desc: string;
  number: string;
  imageUrl: string;
}) => (
  <div className='flex items-center gap-x-6'>
    <img className='w-[99.65px] object-cover ' src={imageUrl} alt={title} />
    <div>
      <h4 className='leading-none  font-bold text-[32px] text-neutral-300'>
        {number}
      </h4>
      <h5 className='text-[#00001A] mt-3 hover:text-[#F15D51] cursor-pointer transition duration-200  text-lg font-extrabold leading-normal'>
        {title}
      </h5>
      <p className='text-[#5E607A] md:max-w-[226px] text-[15px] leading-relaxed'>
        {desc}
      </p>
    </div>
  </div>
);

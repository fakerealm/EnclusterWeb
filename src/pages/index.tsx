import Link from 'next/link';
import {VerticalFeatureRow} from '../components/VerticalFeatureRow';
import {Button} from '../components/Button';
import Nav from '../components/Nav';
import {Footer} from '../components/Footer';

const HomePage = () => (
  <>
    <div className="bg-blue-50">
      <Nav color="bg-gray-900" showSecondaryNav={true} />
      <div className="px-3 pt-20 mx-auto max-w-screen-lg">
        <div className="mb-12 text-center">
          <header className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 whitespace-pre-line leading-hero">
              <span className="text-primary-500">Encluster</span>
              <br />
              <span className="text-2xl md:text-4xl">
                The best way to share notes and resources
              </span>
              <br />
              <span className="text-xl text-primary-500 md:text-3xl">
                We are 100% open source
              </span>
            </h1>
            <br />
            <Link href="/register">
              <a>
                <Button xl>Register Today!</Button>
              </a>
            </Link>
          </header>
        </div>
      </div>
      <div className="px-3 pb-20 mx-auto max-w-screen-lg">
        <div className="mb-12 text-center">
          <VerticalFeatureRow
            title="Your title here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature.png"
            imageAlt="First feature alt text"
          />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default HomePage;

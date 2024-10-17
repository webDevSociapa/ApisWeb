import { useState } from 'react'
import ROffice from '../../../../assets/images/ContactUs/ROffice.png'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('RegisteredOffice')
  const tabContent = {
    RegisteredOffice: {
      image: ROffice.src,
      title: 'Registered Office',
      address1: '18/32, East Patel Nagar New Delhi 110 008 India',
      address2:
        '18/32, East Patel Nagar New Delhi 110 008 India Telephone No : +91-11-43206666 Fax No: +91-11-43559111 vikas.cs@apisindia.com'},
    // BranchOffice: {
    //   image: ROffice.src,
    //   title: 'Branch Office',
    //   address1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   address2:
    //     'Consectetur tristique nunc nisl ultricies nunc, id aliquam nunc nisl id nunc.',
    // },
    // Factories: {
    //   image: ROffice.src,
    //   title: 'Factories',
    //   address1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   address2:
    //     'Consectetur tristique nunc nisl ultricies nunc, id aliquam nunc nisl id nunc.',
    // },
    // GlobalOfficeFactory: {
    //   image: ROffice.src,
    //   title: 'Global Office & Factory',
    //   address1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   address2:
    //     'Consectetur tristique nunc nisl ultricies nunc, id aliquam nunc nisl id nunc.',
    // },
    // Subsidiaries: {
    //   image: ROffice.src,
    //   title: 'Subsidiaries',
    //   address1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   address2:
    //     'Consectetur tristique nunc nisl ultricies nunc, id aliquam nunc nisl id nunc.',
    // },
  }

  return (
    <div className="w-full text-center px-4">
      <div className="flex flex-wrap justify-around mb-4">
        {/* {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`text-lg font-bold capitalize px-2 py-1 ${
              activeTab === tab
                ? 'text-[#9F7B49] border-b-2 border-[#000000]'
                : 'text-[#9F7B49]'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tabContent[tab].title}
          </button>
        ))} */}
      </div>
      <div>
        <h1 className="text-[#545454] text-3xl font-bold mb-10 pt-0 capitalize" style={{ color: 'rgb(159, 123, 73)', marginBottom:"75px" }}>
          {tabContent[activeTab].title}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={tabContent[activeTab].image}
            alt={tabContent[activeTab].title}
            width={637}
            height={344}
            className="w-full md:w-auto h-auto object-cover border border-stone-500 rounded"
          />
         <div className="w-full md:w-1/2 mt-4 md:mt-0 text-left xl: ml-3"> {/* Ensures left alignment on larger screens */}
            <div className="mb-6">
              <h3 className="text-[#9F7B49] text-xl font-bold mb-2">Head office</h3>
              <p className="text-black text-sm leading-relaxed">
                {tabContent[activeTab].address1}
              </p>
            </div>
            <div>
              <h3 className="text-[#9F7B49] text-xl font-bold mb-2">Registered office</h3>
              <p className="text-black text-sm leading-relaxed mt-2 2xl:line-clamp-4">
                {tabContent[activeTab].address2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs

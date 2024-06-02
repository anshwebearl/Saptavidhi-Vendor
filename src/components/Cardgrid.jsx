import Card from './InquiryCard';

const CardGrid = () => {
  return (
    <div className="p-4 bg-white rounded-3xl border-[1px] border-[#00000033] flex flex-col gap-3 md:gap-5 w-full">
      <h1 className="text-xl md:text-2xl font-semibold font-poppins">Inquiries</h1>
      <div className="border-b-[1px] border-[#00000033] "></div>
      <div className="flex flex-wrap justify-around gap-3 md:gap-5 w-full">
        <Card
          name="Saathi Rathod"
          phone="+91 987-654-3210"
          email="saathirathod@gmail.com"
          status="Active"
          statusText="Active"
        />
        <Card
          name="John Doe"
          phone="+91 123-456-7890"
          email="johndoe@example.com"
          status="Inactive"
          statusText="Inactive"
        />
        <Card
          name="Jane Smith"
          phone="+91 234-567-8901"
          email="janesmith@example.com"
          status="Expired"
          statusText="Expired"
        />
        <Card
          name="Michael Johnson"
          phone="+91 345-678-9012"
          email="michaeljohnson@example.com"
          status="Pending"
          statusText="Pending"
        />
        <Card
          name="Emily Davis"
          phone="+91 456-789-0123"
          email="emilydavis@example.com"
          status="Active"
          statusText="Active"
        />
        <Card
          name="David Wilson"
          phone="+91 567-890-1234"
          email="davidwilson@example.com"
          status="Inactive"
          statusText="Inactive"
        />
      </div>
    </div>
  );
};

export default CardGrid;

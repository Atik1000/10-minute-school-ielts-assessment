export default function CTAButton({
  btnText,
}: {
  btnText: string | undefined;
}) {
  return (
    <button className="bg-[#1CAB55] py-2 px-8 text-center md:w-full border-b-4 border-b-green-700 rounded-md text-white font-semibold hover:bg-green-700 cursor-pointer transition-colors duration-300 capitalize">
      {btnText}
    </button>
  );
}

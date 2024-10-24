import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};
function AccordionItem(props: AccordionItemProps) {
  const { question, answer, isOpen, onToggle } = props;
  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex items-center justify-between group cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="text-dark-purple text-base font-semibold w-72 md:w-full md:text-lg group-hover:text-cc-pink">
          {question}
        </h2>
        <div className="relative w-[30px] h-[30px] flex-shrink-0">
          {isOpen ? (
            <img src={minusIcon} alt="minus icon" className="w-full h-full" />
          ) : (
            <img src={plusIcon} alt="plus icon" className="w-full h-full" />
          )}
        </div>
      </div>
      {isOpen && (
        <p className="text-sm text-grayish-purple md:text-base">{answer}</p>
      )}
    </div>
  );
}

export default AccordionItem;

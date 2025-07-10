import ArithmeticButton from "./ArithmeticButton"
import FuncButton  from "./FuncButton"
export default function Keypad() {
    return (
        <div className="grid grid-cols-4 gap-x-3 gap-y-5 grid-rows-5 w-[90%] mx-auto my-5 p-6 rounded-lg bg-bg-toggle gap-2 flex-wrap">
            <ArithmeticButton value="7"/>
            <ArithmeticButton value="8"/>
            <ArithmeticButton value="9"/>
            <FuncButton value="DEL" className=" bg-key-primary shadow-[0px_5px_0px_1px_var(--color-key-primary-shadow)]"/>
            <ArithmeticButton value="4"/>
            <ArithmeticButton value="5"/>
            <ArithmeticButton value="6"/>
            <ArithmeticButton value="+"/>
            <ArithmeticButton value="1"/>
            <ArithmeticButton value="2"/>
            <ArithmeticButton value="3"/>
            <ArithmeticButton value="-"/>
            <ArithmeticButton value="."/>
            <ArithmeticButton value="0"/>
            <ArithmeticButton value="/"/>
            <ArithmeticButton value="x"/>
            <FuncButton value="RESET" className="col-span-2 hover:bg-key-primary-shadow bg-key-primary shadow-[0px_5px_0px_1px_var(--color-key-primary-shadow)]"/>
            <FuncButton value="=" className="col-span-2 bg-key-accent hover:bg-key-accent-shadow shadow-[0px_5px_0px_1px_var(--color-key-accent-shadow)]"/>
        </div>
    )}
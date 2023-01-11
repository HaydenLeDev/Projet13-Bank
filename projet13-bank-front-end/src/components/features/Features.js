import "./Features.css"
import Items from "./items/Items";
import imageSrcTchat from "../../assets/img/icon-chat.png"
import imageSrcMoney from "../../assets/img/icon-money.png"
import imageSrcSecurity from "../../assets/img/icon-security.png"


function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <Items
                scrImage={imageSrcTchat}
                alt="Chat Icon"
                text="Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes." 
                title="You are our #1 priority"
            />
            <Items
                scrImage={imageSrcMoney}
                alt="Money Icon"
                text="The more you save with us, the higher your interest rate will be!" 
                title="More savings means higher rates"
            />
            <Items
                scrImage={imageSrcSecurity}
                alt="Security Icon"
                text="We use top of the line encryption to make sure your data and money
                is always safe." 
                title="Security you can trust"
            />
        </section>
    );
}

export default Features;

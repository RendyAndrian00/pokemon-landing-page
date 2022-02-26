import {
    faUser,
    faGift,
    faMap,
    faGlobe
  } from "@fortawesome/free-solid-svg-icons";
import Card from '@material-tailwind/react/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color={color} iconOnly className="mb-0">
                        {icon==='faMap' && <FontAwesomeIcon icon={faMap} size="2x"/>}
                        {icon==='faUser' && <FontAwesomeIcon icon={faUser} size="2x"/>}
                        {icon==='faGift' && <FontAwesomeIcon icon={faGift} size="2x"/>}
                        {icon==='faGlobe' && <FontAwesomeIcon icon={faGlobe} size="2x"/>}
                    </CardHeader>
                    <CardStatus title={title} amount={amount} />
                </CardRow>

                <CardStatusFooter
                    amount={percentage}
                    color={percentageColor}
                    date={date}
                >
                    <FontAwesomeIcon icon={percentageIcon}/>
                </CardStatusFooter>
            </Card>
        </div>
    );
}

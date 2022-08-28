import Speed from "../assets/speed.svg";
import Acceleration from "../assets/acceleration.svg";
import Force from "../assets/force.svg";
import Gasoline from "../assets/gasoline.svg";
import Energy from "../assets/energy.svg";
import Hybrid from "../assets/hybrid.svg";
import Exchange from "../assets/exchange.svg";
import People from "../assets/people.svg";
import CarSvg from "../assets/car.svg";

export function getAccessoriesIcons(type: string) {
  switch (type) {
    case "speed": {
      return Speed;
    }
    case "acceletarion": {
      return Acceleration;
    }
    case "turning_diameter": {
      return Force;
    }
    case "gasoline_motor": {
      return Gasoline;
    }
    case "eletric_motor": {
      return Energy;
    }
    case "hybrid_motor": {
      return Hybrid;
    }
    case "exchange": {
      return Exchange;
    }
    case "seats": {
      return People;
    }
    default:
      return CarSvg;
  }
}

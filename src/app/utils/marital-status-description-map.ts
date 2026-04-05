import { MaritalStatusEnum } from '../enums/marital-status.enum';

export const maritalStatusDescriptionMap: {
  [key in MaritalStatusEnum]: string;
} = {
  [MaritalStatusEnum.SINGLE]: 'Solteiro',
  [MaritalStatusEnum.MARRIED]: 'Casado',
  [MaritalStatusEnum.DIVORCED]: 'Divorciado',
};

// aqui eu transformo o objeto maritalStatusDescriptionMap em um array de objetos, onde cada objeto tem a propriedade code (que é o valor do enum) e a propriedade description (que é a descrição correspondente ao valor do enum). Isso facilita a iteração sobre os valores do enum e suas descrições
export const maritalStatusArray = Object.keys(maritalStatusDescriptionMap)
  .map(Number)
  .map((key) => {
    return {
      code: key,
      description: maritalStatusDescriptionMap[key as MaritalStatusEnum],
    };
  });

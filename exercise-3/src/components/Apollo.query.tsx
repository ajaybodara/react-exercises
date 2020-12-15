import {gql} from "@apollo/client";


export const GET_COUNTRIES = gql`
query GetCountries($code: ID!){
    country(code: $code){
        name
        capital
        emoji
        currency
        code
        languages{
            code
            name
        }
    }
}

`;


export const GET_CONTINENT = gql`
query GetContinent($code: ID!){
    continent(code: $code){
        code
        name
        countries {
            name
            emoji
        }
    }
}

`;
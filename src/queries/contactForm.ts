import { gql } from "@apollo/client";

export const GET_ALL_FORM = gql`
  query GetForm {
    gfForms {
      edges {
        node {
          description
          formId
          title
          id
        }
      }
    }
  }
`;

export const CONTACT_FORM = gql`
  query getContactForm {
    gfForm(id: 3) {
      title
      formId
      labelPlacement
      descriptionPlacement
      submitButton {
        text
        type
        location
      }
      formFields {
        nodes {
          inputType
          id
          type
          ... on RadioField {
            id
            label
            value
            type
            inputName
            inputType
            isRequired
            pageNumber
            labelPlacement
            errorMessage
            description
            descriptionPlacement
            choices {
              text
              value
              ... on RadioFieldChoice {
                isOtherChoice
                isSelected
                text
                value
              }
            }
          }
          ... on PhoneField {
            id
            description
            descriptionPlacement
            errorMessage
            defaultValue
            inputName
            inputType
            isRequired
            labelPlacement
            label
            pageNumber
            phoneFormat
            placeholder
            type
            value
          }
          ... on TextAreaField {
            id
            defaultValue
            description
            descriptionPlacement
            errorMessage
            inputName
            inputType
            isRequired
            label
            labelPlacement
            maxLength
            pageNumber
            placeholder
            type
            value
            visibility
          }
          ... on EmailField {
            id
            description
            descriptionPlacement
            errorMessage
            hasEmailConfirmation
            inputName
            inputType
            isRequired
            label
            labelPlacement
            pageNumber
            placeholder
            type
            subLabelPlacement
            value
            visibility
          }
          ... on NameField {
            id
            description
            descriptionPlacement
            errorMessage
            inputName
            inputType
            isRequired
            label
            labelPlacement
            pageNumber
            subLabelPlacement
            type
            value
            visibility
            nameValues {
              first
              last
              middle
              prefix
              suffix
            }
          }
          ... on TextField {
            id
            description
            descriptionPlacement
            errorMessage
            inputMaskValue
            inputName
            inputType
            label
            labelPlacement
            maxLength
            pageNumber
            placeholder
            type
            value
            visibility
          }
        }
      }
    }
  }
`;

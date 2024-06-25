import { ADD_NEW_APPLICANT, CANCAL_UPDATE_APPLICANT, CLEAN_PREPARE_APPLICANT_INFO, CLEAN_VALIDATION_CREATE, CLEAR_PREPATE_UPDATE_APPLICANT_VALID, DELETE_APPLICANT_BY_ID, UPDATE_APPLICANT, UPDATE_PREPARE_APPLICANT_EMAIL, UPDATE_PREPARE_APPLICANT_FIRST_NAME, UPDATE_PREPARE_APPLICANT_LAST_NAME, UPDATE_PREPARE_APPLICANT_PHONE, UPDATE_PREPARE_UPDATE_APPLICANT, UPDATE_PREPARE_UPDATE_APPLICANT_EMAIL, UPDATE_PREPARE_UPDATE_APPLICANT_FIRST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_LAST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_PHONE, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_EMAIL, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_FIRST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_LAST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_PHONE, UPDATE_VALIDATE_CREATE_EMAIL, UPDATE_VALIDATE_CREATE_FIRST_NAME, UPDATE_VALIDATE_CREATE_LAST_NAME, UPDATE_VALIDATE_CREATE_PHONE } from "./constant"

// initState : 
const initState = {
    applicants: [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "phone": "1234567890",
            "address": {
                "street": "123 Main St",
                "city": "Anytown",
                "state": "CA",
                "zipCode": "12345"
            },
            "education": [
                {
                    "degree": "B.Sc. Computer Science",
                    "institution": "University of Example",
                    "yearOfGraduation": 2020
                }
            ],
            "workExperience": [
                {
                    "company": "Tech Solutions Inc.",
                    "position": "Software Developer",
                    "startDate": "2021-01-15",
                    "endDate": "2023-06-30",
                    "responsibilities": [
                        "Developed and maintained web applications",
                        "Collaborated with cross-functional teams to define project requirements"
                    ]
                }
            ],
            "skills": ["JavaScript", "React", "Node.js", "SQL"],
        },
        {
            "id": 2,
            "firstName": "Emily",
            "lastName": "Johnson",
            "email": "emily.johnson@example.com",
            "phone": "1234567892",
            "address": {
                "street": "456 Elm St",
                "city": "Othertown",
                "state": "TX",
                "zipCode": "67890"
            },
            "education": [
                {
                    "degree": "M.Sc. Information Technology",
                    "institution": "Institute of Example",
                    "yearOfGraduation": 2018
                }
            ],
            "workExperience": [
                {
                    "company": "Innovative Solutions Ltd.",
                    "position": "IT Consultant",
                    "startDate": "2019-03-01",
                    "endDate": "2022-12-31",
                    "responsibilities": [
                        "Provided IT consulting services to clients",
                        "Implemented software solutions and managed projects"
                    ]
                }
            ],
            "skills": ["Python", "Django", "Machine Learning", "Project Management"],
        }
    ],
    prepareApplicant: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    },
    validateCreate: {
        isValidFirstName: false,
        isValidLastName: false,
        isValidEmail: false,
        isValidPhone: false,
    },
    prepateUpdateApplicant: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        valid: {
            isValidFirstName: '',
            isValidLastName: '',
            isValidEmail: '',
            isValidPhone: '',
            isActiveUpdate: false
        }
    }

}

// reducer function : 
const reducer = (state, action) => {
    let newState = ''
    switch (action.type) {

        case ADD_NEW_APPLICANT:
            const newApplicant = { ...state.prepareApplicant }
            newApplicant.id = state.applicants.length + 1
            return {
                ...state,
                applicants: [...state.applicants, newApplicant]
            }
        case UPDATE_PREPARE_APPLICANT_FIRST_NAME:
            return {
                ...state,
                prepareApplicant: { ...state.prepareApplicant, firstName: action.payload }
            }
        case UPDATE_PREPARE_APPLICANT_LAST_NAME:
            return {
                ...state,
                prepareApplicant: { ...state.prepareApplicant, lastName: action.payload }
            }
        case UPDATE_PREPARE_APPLICANT_EMAIL:
            return {
                ...state,
                prepareApplicant: { ...state.prepareApplicant, email: action.payload }
            }
        case UPDATE_PREPARE_APPLICANT_PHONE:
            return {
                ...state,
                prepareApplicant: { ...state.prepareApplicant, phone: action.payload }
            }
        case CLEAN_PREPARE_APPLICANT_INFO:
            return {
                ...state,
                prepareApplicant: { ...state.prepareApplicant, firstName: '', lastName: '', email: '', phone: '' }
            }
        case UPDATE_VALIDATE_CREATE_FIRST_NAME:
            return {
                ...state,
                validateCreate: { ...state.validateCreate, isValidFirstName: action.payload }
            }

        case CLEAN_VALIDATION_CREATE:
            return {
                ...state,
                validateCreate: {
                    ...state.validateCreate,
                    isValidFirstName: false,
                    isValidLastName: false,
                    isValidEmail: false,
                    isValidPhone: false,
                }
            }
        case UPDATE_VALIDATE_CREATE_LAST_NAME:
            return {
                ...state,
                validateCreate: {
                    ...state.validateCreate,
                    isValidLastName: action.payload
                }
            }
        case UPDATE_VALIDATE_CREATE_EMAIL:
            return {
                ...state,
                validateCreate: {
                    ...state.validateCreate,
                    isValidEmail: action.payload
                }
            }
        case UPDATE_VALIDATE_CREATE_PHONE:
            return {
                ...state,
                validateCreate: {
                    ...state.validateCreate,
                    isValidPhone: action.payload
                }
            }
        case DELETE_APPLICANT_BY_ID:
            newState = { ...state }
            newState.applicants.splice(action.payload, 1)
            return newState
        case UPDATE_PREPARE_UPDATE_APPLICANT:
            return (state.applicants[action.payload].id === state.prepateUpdateApplicant.id ? state : {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    id: state.applicants[action.payload].id,
                    firstName: state.applicants[action.payload].firstName,
                    lastName: state.applicants[action.payload].lastName,
                    phone: state.applicants[action.payload].phone,
                    email: state.applicants[action.payload].email,
                }
            })
        case UPDATE_PREPARE_UPDATE_APPLICANT_VALID_FIRST_NAME:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    valid: {
                        ...state.prepateUpdateApplicant.valid,
                        isValidFirstName: action.payload
                    }
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_FIRST_NAME:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    firstName: action.payload
                }
            }
        case CLEAR_PREPATE_UPDATE_APPLICANT_VALID:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    valid: {
                        isValidFirstName: '',
                        isValidLastName: '',
                        isValidEmail: '',
                        isValidPhone: '',
                    }
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_LAST_NAME:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    lastName: action.payload
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_VALID_LAST_NAME:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    valid: {
                        ...state.prepateUpdateApplicant.valid,
                        isValidLastName: action.payload
                    }
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_EMAIL:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    email: action.payload
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_VALID_EMAIL:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    valid: {
                        ...state.prepateUpdateApplicant.valid,
                        isValidEmail: action.payload
                    }
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_PHONE:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    phone: action.payload
                }
            }
        case UPDATE_PREPARE_UPDATE_APPLICANT_VALID_PHONE:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    valid: {
                        ...state.prepateUpdateApplicant.valid,
                        isValidPhone: action.payload
                    }
                }
            }
        case UPDATE_APPLICANT:
            newState = { ...state }
            newState.applicants[action.payload].firstName = state.prepateUpdateApplicant.firstName
            newState.applicants[action.payload].lastName = state.prepateUpdateApplicant.lastName
            newState.applicants[action.payload].email = state.prepateUpdateApplicant.email
            newState.applicants[action.payload].phone = state.prepateUpdateApplicant.phone
            return newState
        case CANCAL_UPDATE_APPLICANT:
            return {
                ...state,
                prepateUpdateApplicant: {
                    ...state.prepateUpdateApplicant,
                    id: state.applicants[action.payload].id,
                    firstName: state.applicants[action.payload].firstName,
                    lastName: state.applicants[action.payload].lastName,
                    phone: state.applicants[action.payload].phone,
                    email: state.applicants[action.payload].email,
                }
            }
        default:
            throw new Error('Invalid action ....')
    }
}

// export : 
export { initState }
export default reducer
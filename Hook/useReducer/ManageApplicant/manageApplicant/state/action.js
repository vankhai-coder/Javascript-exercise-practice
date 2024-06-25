import { ADD_NEW_APPLICANT, CANCAL_UPDATE_APPLICANT, CLEAN_PREPARE_APPLICANT_INFO, CLEAN_VALIDATION_CREATE, CLEAR_PREPATE_UPDATE_APPLICANT_VALID, DELETE_APPLICANT_BY_ID, UPDATE_APPLICANT, UPDATE_PREPARE_APPLICANT_EMAIL, UPDATE_PREPARE_APPLICANT_FIRST_NAME, UPDATE_PREPARE_APPLICANT_LAST_NAME, UPDATE_PREPARE_APPLICANT_PHONE, UPDATE_PREPARE_UPDATE_APPLICANT, UPDATE_PREPARE_UPDATE_APPLICANT_EMAIL, UPDATE_PREPARE_UPDATE_APPLICANT_FIRST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_LAST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_PHONE, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_EMAIL, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_FIRST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_LAST_NAME, UPDATE_PREPARE_UPDATE_APPLICANT_VALID_PHONE, UPDATE_VALIDATE_CREATE_EMAIL, UPDATE_VALIDATE_CREATE_FIRST_NAME, UPDATE_VALIDATE_CREATE_LAST_NAME, UPDATE_VALIDATE_CREATE_PHONE } from "./constant"

export const handleAddNewApplicant = () => ({
    type: ADD_NEW_APPLICANT
})

export const handleUpdatePrepareApplicantFirstName = (payload) => ({
    type: UPDATE_PREPARE_APPLICANT_FIRST_NAME,
    payload
})
export const handleUpdatePrepareApplicantLastName = (payload) => ({
    type: UPDATE_PREPARE_APPLICANT_LAST_NAME,
    payload
})
export const handleUpdatePrepareApplicantEmail = (payload) => ({
    type: UPDATE_PREPARE_APPLICANT_EMAIL,
    payload
})
export const handleUpdatePrepareApplicantPhone = (payload) => ({
    type: UPDATE_PREPARE_APPLICANT_PHONE,
    payload
})
export const handleCleanPrepareApplicantInfo = () => ({
    type: CLEAN_PREPARE_APPLICANT_INFO,

})

export const handleCleanvalidationCreate = () => ({
    type: CLEAN_VALIDATION_CREATE,
})
export const handleUpdateValidateCreateFirstName = (payload) => ({
    type: UPDATE_VALIDATE_CREATE_FIRST_NAME,
    payload
})
export const handleUpdateValidateCreateLasttName = (payload) => ({
    type: UPDATE_VALIDATE_CREATE_LAST_NAME,
    payload
})

export const handleUpdateValidateCreateEmail = (payload) => ({
    type: UPDATE_VALIDATE_CREATE_EMAIL,
    payload
})

export const handleUpdateValidateCreatePhone = (payload) => ({
    type: UPDATE_VALIDATE_CREATE_PHONE,
    payload
})


export const handleDeleteApplicantByIndex = (payload) => ({
    type: DELETE_APPLICANT_BY_ID,
    payload
})
export const handleUpdatePrepareUpdateApplicant = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT,
    payload
})
export const handleUpdatePrepateUpdateApplicantValidFirstName = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_VALID_FIRST_NAME,
    payload
})
export const handleUpdatePrepateUpdateApplicantValidLastName = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_VALID_LAST_NAME,
    payload
})
export const handleUpdatePrepateUpdateApplicantFirstName = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_FIRST_NAME,
    payload
})
export const handleCleanPrepareApplicantValid = (payload) => ({
    type: CLEAR_PREPATE_UPDATE_APPLICANT_VALID,
    payload
})
export const handleUpdatePrepateUpdateApplicantLastName = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_LAST_NAME,
    payload
})
export const handleUpdatePrepateUpdateApplicantEmail = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_EMAIL,
    payload
})
export const handleUpdatePrepateUpdateApplicantValidEmail = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_VALID_EMAIL,
    payload
})
export const handleUpdatePrepateUpdateApplicantPhone = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_PHONE,
    payload
})
export const handleUpdatePrepateUpdateApplicantValidPhone = (payload) => ({
    type: UPDATE_PREPARE_UPDATE_APPLICANT_VALID_PHONE,
    payload
})
export const handleUpdateApplicant = (payload) => ({
    type: UPDATE_APPLICANT , 
    payload
})
export const handleCancleUpdateApplicant = (payload) => ({
    type: CANCAL_UPDATE_APPLICANT , 
    payload
})

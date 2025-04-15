document.addEventListener('DOMContentLoaded', () => {



    function hideModal(modalOverlayElement) {
        if (modalOverlayElement) {
            modalOverlayElement.classList.remove('modal-active');
            console.log(`Helper: Modal hidden - ID: ${modalOverlayElement.id}`);
        } else {
            console.warn("Helper: hideModal called with null element.");
        }
    }

    function showModal(modalOverlayElement) {
        if (modalOverlayElement) {
            modalOverlayElement.classList.add('modal-active');
            console.log(`Helper: Modal shown - ID: ${modalOverlayElement.id}`);
        } else {
            console.warn("Helper: showModal called with null element.");
        }
    }
 

    const requestModalOverlay = document.getElementById('requestModalOverlay');
    let requestModalForm = null;
    let requestCloseButton = null;

    console.log("--- Request Modal Element Check ---");
    if (requestModalOverlay) {
        console.log("requestModalOverlay found: TRUE");
        requestModalForm = document.getElementById('requestModalForm'); 
        requestCloseButton = requestModalOverlay.querySelector('.modal-close');
        console.log("requestModalForm found:", !!requestModalForm);
        console.log("requestCloseButton found:", !!requestCloseButton);
    } else {
        console.log("requestModalOverlay found: FALSE");
        console.log("Cannot check child elements because requestModalOverlay is null.");
    }
    console.log("--- End Request Modal Element Check ---");

    
    if (requestModalOverlay && requestModalForm && requestCloseButton) {
        console.log("Request Modal: All elements found. Initializing logic.");

        
        const attemptShowRequestModal = () => {
            console.log("Request Modal: Checking conditions to show...");
            
            const hasSubmittedThisSession = sessionStorage.getItem('requestModalSubmitted') === 'true';

            

            if (hasSubmittedThisSession) {
                console.log("Request Modal: Condition Fail - Form already submitted this session.");
                return;
            }

            console.log("Request Modal: Conditions met. Showing modal.");
            showModal(requestModalOverlay);
        };

        
        setTimeout(attemptShowRequestModal, 150); 

        
        requestCloseButton.addEventListener('click', () => {
            console.log("Request Modal: Close button clicked.");
            hideModal(requestModalOverlay);
        });

        
        requestModalOverlay.addEventListener('click', (event) => {
            
            if (event.target === requestModalOverlay) {
                console.log("Request Modal: Overlay clicked directly. Hiding modal.");
                hideModal(requestModalOverlay);
            } else {
                
            }
        });

        
        requestModalForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            console.log("Request Modal: Form submit event triggered.");

            
            const formData = new FormData(requestModalForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email'); 
            const message = formData.get('message'); 

            console.log("Request Modal: Form Data Collected:");
            console.log("  Name:", name);
            console.log("  Phone:", phone);
            console.log("  Email:", email || '(Not provided)');
            console.log("  Message:", message || '(Not provided)');

            console.log("Request Modal: --- Submission to backend is currently a placeholder ---");
            alert('Спасибо за заявку!'); 
            
            sessionStorage.setItem('requestModalSubmitted', 'true');
            console.log("Request Modal: Marked as submitted for this session (placeholder).");
            hideModal(requestModalOverlay); 
            
        });

    } else {
        
        console.warn("Request Modal: Not all required elements were found. Quick request logic will not run.");
    }

    console.log("Main script execution finished.");

}); 
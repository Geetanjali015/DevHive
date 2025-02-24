from django.urls import path
from .views import RegisterView, LoginView,ResumeUploadView

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('resumes/upload/', ResumeUploadView.as_view(), name='resume-upload'),

]

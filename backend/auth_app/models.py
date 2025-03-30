from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, full_name=full_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, full_name, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=100)
    profile = models.TextField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    linkedin_profile = models.URLField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    last_active = models.DateTimeField(auto_now=True)
    is_verified = models.BooleanField(default=False)
    location = models.CharField(max_length=255, blank=True, null=True)
    time_zone = models.CharField(max_length=100, blank=True, null=True)
    account_status = models.CharField(max_length=50, choices=[("active", "Active"), ("suspended", "Suspended")])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email


class Resume(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    file = models.FileField(upload_to='resumes/')
    raw_text = models.TextField(blank=True, null=True)
    parsed_text = models.TextField(blank=True, null=True)
    metadata = models.JSONField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    file_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"Resume of {self.user.full_name}"


class Education(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=100)
    field_of_study = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    gpa = models.FloatField(blank=True, null=True)
    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.degree} at {self.institution}"


class WorkExperience(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    responsibilities = models.TextField(blank=True, null=True)
    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.position} at {self.company_name}"


class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency_level = models.CharField(
        max_length=50,
        choices=[("beginner", "Beginner"), ("intermediate", "Intermediate"), ("advanced", "Advanced")],
    )
    is_verified = models.BooleanField(default=False)
    last_used_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name


class ResumeSkill(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    proficiency = models.CharField(max_length=50)
    is_head = models.BooleanField(default=False)


class Project(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    technologies = models.JSONField(blank=True, null=True)
    status = models.CharField(max_length=50, choices=[("ongoing", "Ongoing"), ("completed", "Completed")])
    team_size = models.IntegerField(default=1)
    contribution_id = models.IntegerField()

    def __str__(self):
        return self.title


class Chat(models.Model):
    chat_id = models.AutoField(primary_key=True)
    user1 = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="chats_initiated")
    user2 = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="chats_received")
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    last_message_at = models.DateTimeField(blank=True, null=True)


class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content = models.TextField()
    is_read = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)


class Call(models.Model):
    initiator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="calls_initiated")
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="calls_received")
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(blank=True, null=True)
    call_type = models.CharField(max_length=50, choices=[("audio", "Audio"), ("video", "Video")])
    call_status = models.CharField(max_length=50, choices=[("ongoing", "Ongoing"), ("completed", "Completed")])


class Review(models.Model):
    reviewer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="reviews_given")
    reviewed = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="reviews_received")
    rating = models.IntegerField()
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class CompatibilityScore(models.Model):
    user1 = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="compatibility_scores_given")
    user2 = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="compatibility_scores_received")
    score = models.IntegerField()
    matched_skills = models.JSONField(blank=True, null=True)
    algorithm_version = models.CharField(max_length=50)


# Ensure migrations are applied
# Run: python manage.py makemigrations
# Run: python manage.py migrate

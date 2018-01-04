package pro.finance.demoapi.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "system_account")
public class SystemAccount extends BaseEntity{


	@Column(name="first_name", length = 50, nullable = false)
	private String firstName;


	@Column(name="last_name", length = 50, nullable = false)
	private String lastName;

	@Column(name="email", length = 50, nullable = false)
	private String email;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("SystemAccount{");
		sb.append("firstName='").append(firstName).append('\'');
		sb.append(", lastName='").append(lastName).append('\'');
		sb.append(", email='").append(email).append('\'');
		sb.append('}');
		return sb.toString();
	}
}

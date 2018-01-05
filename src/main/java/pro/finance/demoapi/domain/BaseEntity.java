package pro.finance.demoapi.domain;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonFormat;

@MappedSuperclass
public abstract class BaseEntity {

	@Id
	@GeneratedValue
	@Column(name="id", nullable = false)
	private UUID id = UUID.randomUUID();

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	@Column(name="create_date", nullable = false)
	private Date createDate = new Date();


	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("BaseEntity{");
		sb.append("id=").append(id);
		sb.append(", createDate=").append(createDate);
		sb.append('}');
		return sb.toString();
	}
}
